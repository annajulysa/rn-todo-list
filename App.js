import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';
import AddTaskScreen from './components/screens/AddTaskScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Today\'s to-do list' }} />
        <Stack.Screen name="AddTask" component={AddTaskScreen} options={{ title: 'Add new task' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
