import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, ScrollView, SafeAreaView, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import Task from '../Task';

const filterOptions = [
  { label: 'All', value: 'all' },
  { label: 'Low Priority', value: '3' },
  { label: 'Medium Priority', value: '2' },
  { label: 'Urgent', value: '1' },
];

export default function HomeScreen({ navigation, route }) {
  const [tasks, setTasks] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredTasks = selectedFilter === 'all'
    ? tasks
    : tasks.filter(task => task.priority.toString() === selectedFilter);
  
  useEffect(() => {
    if (route.params?.newTask) {
      setTasks([...tasks, { isCompleted: false, ...route.params.newTask }]);
    }
  }, [route.params?.newTask]);

  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_,i) => i !== index));
  };

  const handleCompleteTask = (index) => {
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>        
        <View style={styles.taskWrapper}>
          <View>
            <Text>{'To-do items: ' + tasks.length}</Text>     
            <Dropdown
                style={styles.dropdown}
                data={filterOptions}
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Filter tasks"
                value={selectedFilter}
                onChange={item => setSelectedFilter(item.value)}
              />     
          </View>
          <View style={styles.items}>
            {filteredTasks.map((task, index) => (
              <Task key={index} priority={task.priority} title={task.title} isCompleted={task.isCompleted} index={index} onDelete={handleDeleteTask} onToggleComplete={handleCompleteTask} />
            ))}
          </View>
        </View>        
      </ScrollView>
      <View style={styles.addTask}>
        <Button title="Add new task" onPress={() => navigation.navigate('AddTask')} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  taskWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  items: {
    marginTop: 20,
  },
  addTask: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
