import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, ScrollView, SafeAreaView, Text } from 'react-native';
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
            <Dropdown style={styles.dropdown} data={filterOptions} maxHeight={300} labelField="label" valueField="value" placeholder="Filter todos" value={filter} onChange={item => setFilter(item.value)} />     
          </View>
          <View style={styles.items}>            
            { todos.length > 0 ? 
                todos.map((todo, index) => (
                  (filter === "all" || todo.priority === filter) &&
                    <Todo key={index} priority={todo.priority} title={todo.title} isCompleted={todo.isCompleted} index={index} onDelete={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />
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
    marginTop: 20,
  },
  addtodo: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
