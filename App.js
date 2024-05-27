import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';
import AddTodosScreen from './components/screens/AddTodosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>      
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="AddTodo" component={AddTodosScreen} options={{ title: 'Add new task' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}