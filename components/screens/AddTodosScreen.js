import React, { useState, useContext } from 'react';
import { StyleSheet, Button, View, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import Header from '../Header';
import { TodosContext } from '../../context/TodosContext';

const data = [
  { label: 'Urgent', value: '1' },
  { label: 'Medium priority', value: '2' },
  { label: 'Low priority', value: '3' },
];

export default function AddTodosScreen({ navigation }) {
  const { setTodos }= useContext(TodosContext);
  const [newTodo, setNewTodo] = useState(false);
  const [isFocus, setIsFocus] = useState(false);

  const handleInputChange = (value, name) => {
    if (name === 'priority' && value === "" ) {
      value = "Low priority"; 
    }
    setNewTodo({ ...newTodo, [name]: value });
  };

  const submitHandler = () => {
    setTodos(prevTodos => [...prevTodos, newTodo])
    navigation.navigate('Home');
  };

  return (
    <View>
      <Header name={'Create new task'} navigation={navigation} buttonText={<Entypo name="home" size={20} color="white" />} screen={'Home'}></Header>
      <View style={styles.container}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          <TextInput
            style={styles.input}
            placeholder={'Title Todo'}
            onChangeText={(text) => handleInputChange(text, 'title')}
          />
        </KeyboardAvoidingView>
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={'Select Priority'}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {
            handleInputChange(item.value, 'priority');
            setIsFocus(false);
          }}
        />
        <View style={styles.addTodo}>
          <Button title="Add todo" onPress={submitHandler} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: '#e8eaed',
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    paddingLeft: 8,
  },
  dropdown: {
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  addTodo: {
    marginTop: 20,
  },
});
