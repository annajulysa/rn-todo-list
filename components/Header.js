import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.name}</Text>
            <TouchableOpacity style={styles.addtodo}><Text style={styles.button}>+</Text></TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        margin: 20,
        height:'8%',
        top: 18,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    addtodo: {
        width: 40,
        height: 40,
        backgroundColor: '#5b5fc7',
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
      },  
    button: {
        fontSize: 30,
        color: 'white',
        bottom: 2
    },
    title: {
        fontSize: 20,
        fontWeight: "bold"
    }
});
