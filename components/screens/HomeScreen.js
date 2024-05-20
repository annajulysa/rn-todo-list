import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Button, ScrollView, SafeAreaView } from 'react-native';
import Task from '../Task';

export default function HomeScreen({ navigation, route }) {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    if (route.params?.newTask) {
      setTasks([...tasks, route.params.newTask]);
    }
  }, [route.params?.newTask]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.taskWrapper}>
          <View style={styles.items}>
            {tasks.map((task, index) => (
              <Task key={`todo-${index}`} priority={task.priority} title={task.title} description={task.description} />
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
    marginTop: 30,
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
