import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Todo from '../Todo';
import NoTodo from '../NoTodo';

const filterPriority = [
  { label: 'All Prioriy', value: 'all' },
  { label: 'Low Priority', value: '3' },
  { label: 'Medium Priority', value: '2' },
  { label: 'Urgent', value: '1' },
];

const filterStatus = [
  { label: 'All Status', value: 'all' },
  { label: 'To Do', value: 'todo' },
  { label: 'Completed', value: 'completed' },
];

export default function HomeScreen({ navigation, route }) {
  const [todos, setTodos] = useState([]);
  const [filterP, setFilterP] = useState('all');
  const [filterS, setFilterS] = useState('all');

  useEffect(() => {
    if (route.params?.newTodo) {
      setTodos([...todos, { isCompleted: false, ...route.params.newTodo }]);
    }
  }, [route.params?.newTodo]);

  const handleDeleteTodo = (index) => {
    setTodos(todos.filter((_,i) => i !== index));    
  };

  const handleCompleteTodo = (index) => {
    const updatedTodos = todos.map((todo, i) => 
      i === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
    );
    setTodos(updatedTodos);
  };

  function completeAllTodos() {
    const updatedTodos = todos.map(todo => {
        todo.isCompleted = true;
        return todo;
    });    
    setTodos(updatedTodos);
  }

  function deleteAllTodos() {
    setTodos(prevTodos => prevTodos.filter(todo => !todo.isCompleted));
  }

  const filteredTodos = todos.filter(todo => {
    const priority = filterP === "all" || todo.priority === filterP;
    const status = filterS === "all" || 
                  (filterS === "todo" && !todo.isCompleted) ||
                  (filterS === "completed" && todo.isCompleted);
    return priority && status;
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>        
        <View style={styles.todoWrapper}>
            <View style={styles.actions}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}> 
                <Dropdown style={styles.dropdown} data={filterPriority} maxHeight={300} labelField="label" valueField="value" value={filterP} onChange={item => setFilterP(item.value)} />     
                <Dropdown style={styles.dropdown} data={filterStatus} maxHeight={300} labelField="label" valueField="value" value={filterS} onChange={item => setFilterS(item.value)} />               
                <TouchableOpacity style={styles.btn} onPress={completeAllTodos} hitSlop={{top: 50, bottom: 50, left: 10, right: 10}}><Text>Check All</Text></TouchableOpacity>
                <TouchableOpacity style={styles.btn} onPress={deleteAllTodos} hitSlop={{top: 50, bottom: 50, left: 10, right: 10}}><Text>Clear</Text></TouchableOpacity>
              </ScrollView>        
            </View>  
          <View style={styles.items}>            
            { todos.length > 0 ? 
                filteredTodos.map((todo, index) => (
                    <Todo key={index} priority={todo.priority} title={todo.title} isCompleted={todo.isCompleted} index={index} onDelete={handleDeleteTodo} handleCompleteTodo={handleCompleteTodo} />
                ))
              :
              <NoTodo />               
            }
          </View>
        </View>        
      </ScrollView>
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
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 20,
  },
  dropdown: {
    marginRight: 5,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    borderRadius: 20,
    width: 160,
  },
  btn: {
    borderRadius: 20,
    backgroundColor: 'white',    
    paddingHorizontal: 20,
    marginRight: 5,
    width: 100,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
