import React, { useState } from 'react';
import { StyleSheet, Button, View, KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
  { label: 'Urgent', value: '1' },
  { label: 'Medium priority', value: '2' },
  { label: 'Low priority', value: '3' },
];

export default function AddTaskScreen({ navigation }) {
  const [task, setTask] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const handleInputChange = (value, name) => {
    if (name === 'priority' && value === "" ) {
      value = "Low priority"; 
    }
    setTask({ ...task, [name]: value });
  };

  const submitHandler = () => {
    navigation.navigate('Home', { newTask: task });
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput
          style={styles.input}
          placeholder={'Title task'}
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

      <View style={styles.addTask}>
        <Button title="Add task" onPress={submitHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    height: 40,
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
  addTask: {
    marginTop: 20,
  },
});
