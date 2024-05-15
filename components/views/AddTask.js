import React, { useState } from 'react';
import { StyleSheet, Button, View, KeyboardAvoidingView, Platform, TextInput, } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

const data = [
    { label: 'Urgent', value: '1' },
    { label: 'Medium priority', value: '2' },
    { label: 'Low priority', value: '3' },
];

export default function AddTask() {
    const [todos, setTodos] = useState([]);
    const [isFocus, setIsFocus] = useState(false);

    const addTodo = (text, input) => {
        setTodos(prevState => ({...prevState, [input]: text}));
    };
    const submitHandler = () => {
        console.log(todos);
    };

    return (
        <View style={styles.container}>  
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TextInput style={styles.input} placeholder={'Title task'} onChangeText={text => addTodo(text, 'title')}/>       
                <TextInput style={styles.input} placeholder={'Description task'} multiline={true} numberOfLines={4} onChangeText={text => addTodo(text, 'description')}/>     
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
                onChange={item => {
                    addTodo(item.value, 'priority')
                    setIsFocus(false);
                }}
            />

            <View style={styles.addTask}>
                <Button title="Add task" onPress={() => submitHandler()}/>
            </View>

            {
                todos.map((todo, index) => (
                        <Task text={todo} />
                ))
            }

        </View>        
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e8eaed',
        padding: 16,
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderColor: '#c0c0c0',
        borderWidth: 0.5,
        borderRadius: 8,
        marginBottom: 10,
    },
    dropdown: {
        height: 50,
        backgroundColor: '#FFF',
        borderColor: '#c0c0c0',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    addTask: {  
        marginTop: 20, 
    },
});