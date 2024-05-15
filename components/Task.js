import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Task(props) {

    console.log(props);

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                { props.priority === 1 &&
                    <View style={styles.important} />
                }
                
                <View>
                    <Text style={styles.itemText}>{props.priority}</Text>
                    <Text style={styles.itemText}>{props.description}</Text>
                </View>
            </View>
            <View style={styles.circular}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15, 
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,        
    },
    itemLeft: {  
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    important: {
        width: 24,
        height: 24,
        backgroundColor: '#ed3315',
        borderRadius: 5,
        marginRight: 15,
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55bcf6',
        borderRadius: 5,
        borderWidth: 2, 
    },
});
