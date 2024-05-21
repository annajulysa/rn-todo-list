import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';

export default function Task(props) {
    const [isSelected, setIsSelected] = useState(false);

    console.log(props);

    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>  

          <View style={styles.checkboxContainer}>
            <CheckBox style={styles.checkbox} value={isSelected} onValueChange={setIsSelected}/>   
            <TouchableOpacity style={styles.delete} onPress={() => props.onDelete(props.index)} hitSlop={{top: 20, bottom: 50, left: 50, right: 50}}>
                <Ionicons name="trash-outline" size={24} color="white" />
            </TouchableOpacity>
          </View>  

          <View>            
            <Text style={[styles.itemText, isSelected && styles.itemTextCompleted]}>{props.title}</Text>
            <Text style={[styles.itemText, isSelected && styles.itemTextCompleted]}>{props.description}</Text>      
            <View style={styles.badge}>
              <Text style={{color:'#0b4577'}}>{props.priority === undefined ? "Low" : props.priority}</Text>
            </View>                               
          </View>
        </View>  

      </View>
    );
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
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 15,
    top: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
  itemTextCompleted: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  badge: {
    width:90, 
    height:20, 
    backgroundColor: '#0088ff7a', 
    borderRadius:5,
    alignItems: 'center',
    justifyContent: 'center',
    top: 5,
    bottom:5,
  },
  delete: {
    width:35, 
    height:35, 
    backgroundColor: '#b51111', 
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
});
