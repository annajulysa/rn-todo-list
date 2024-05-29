import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/screens/HomeScreen';
import AddTodosScreen from './components/screens/AddTodosScreen';
import { TodosContext } from './context/TodosContext';

const Stack = createNativeStackNavigator();

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      <NavigationContainer>      
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="AddTodo" component={AddTodosScreen} options={{ title: 'Add new task' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </TodosContext.Provider>
  );
}