import React, { } from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Task from './components/Task';
import AddTask from './components/views/AddTask';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}> 
      <View style={styles.taskWrapper}>
        <View style={styles.items}>
          <Task priority={1} text={'oi'} description={'ola'} />          
        </View>
      </View>
      <View style={styles.addTask}>
        <Button title="Add new task" onPress={() => { navigation.navigate(AddTask)}} />
      </View>

    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{title: 'Todays to-do list' }}/>
        <Stack.Screen name="AddTask" component={AddTask} options={{title: 'Add new task' }}/>
      </Stack.Navigator>
    </NavigationContainer>
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
