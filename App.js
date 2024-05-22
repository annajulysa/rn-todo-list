import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import HomeScreen from './components/screens/HomeScreen';
import AddTodosScreen from './components/screens/AddTodosScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={({navigation}) =>({ title: 'Today\'s to-do list', headerRight: () => (
                <TouchableOpacity style={styles.addtodo} onPress={() => navigation.navigate('AddTodo')}><Text style={styles.text}>+</Text></TouchableOpacity>
                ), })} />
        <Stack.Screen name="AddTodo" component={AddTodosScreen} options={{ title: 'Add new task' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  addtodo: {
    width: 40,
    height: 40,
    backgroundColor: '#5b5fc7',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },  
  text: {
    fontSize: 30,
    color: 'white',
    bottom: 2
  }
});
