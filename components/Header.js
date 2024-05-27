import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Header({ name, navigation, buttonText, screen }) {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
            <TouchableOpacity style={styles.addtodo} onPress={() => navigation.navigate(screen)}>
                <Text style={styles.button}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'white',
        width: '100%',
        height:'10%',
        top: 18,
        paddingHorizontal: 20,
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
