import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Todo from '../Todo';
import NoTodo from '../NoTodo';

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Low Priority', value: '3' },
  { label: 'Medium Priority', value: '2' },
  { label: 'Urgent', value: '1' },
];

export default function HomeScreen({ navigation, route }) {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');
  
  useEffect(() => {
    if (route.params?.newTodo) {
      setTodos([...todos, { isCompleted: false, ...route.params.newTodo }]);
    }
  }, [route.params?.newTodo]);

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_,i) => i !== index));
  };

  const handleCompleteTodo = (index) => {
    const updatedtodos = todos.map((todo, i) => 
      i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedtodos);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>        
        <View style={styles.todoWrapper}>
          <View>
            <Text>{'To-do items: ' + todos.length}</Text>  
            <View style={styles.actions}>
              <Dropdown style={styles.dropdown} data={filterOptions} maxHeight={300} labelField="label" valueField="value" placeholder="Filter todos" value={filter} onChange={item => setFilter(item.value)} />     
              <TouchableOpacity style={styles.btn} >
                <Text>Check All</Text>  
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn} >
                <Text>Delete All</Text>  
              </TouchableOpacity>
            </View>   
          </View>
          <View style={styles.items}>            
            { todos.length > 0 ? 
                todos.map((todo, index) => (
                  (filter === "all" || todo.priority === filter) &&
                    <Todo key={todo.id} priority={todo.priority} title={todo.title} isCompleted={todo.isCompleted} index={index} onDelete={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />
                ))
              :
              <NoTodo />               
            }
          </View>
        </View>        
      </ScrollView>
      <View style={styles.addtodo}>
        <Button title="Add new todo" onPress={() => navigation.navigate('AddTodo')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  todoWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 50,
  },
  addtodo: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 20,
  },
  dropdown: {
    width: '50%',
    marginRight: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 20
  },
  btn: {
    borderRadius: 20,
    backgroundColor: 'white',    
    paddingHorizontal: 10,
    marginRight: 5,
    width: '23%',
    height: 35,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
