import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CheckBox from 'expo-checkbox';

const priorityColors = {
  1: '#FF6347', // Urgent
  2: '#FFD700', // Medium priority
  3: '#0088ff7a', // Low priority
  default: '#0088ff7a' // Default 
};

export default function Todo(props) {
  const badgeColor = priorityColors[props.priority] || priorityColors.default;

    return (
      <View style={styles.item}>
        <View style={styles.itemLeft}>            
          <View style={styles.checkboxContainer}>
          <View style={[styles.badge, { backgroundColor: badgeColor }]}></View>
            <View style={styles.teste}>
              <CheckBox style={styles.checkbox} value={props.isCompleted} onValueChange={() => props.handleCompleteTodo(props.index)} />
              <Text style={[styles.itemText, props.isCompleted && styles.itemTextCompleted]}>{props.title}</Text>
            </View>
            <TouchableOpacity style={styles.delete} onPress={() => props.onDelete(props.index)} hitSlop={{top: 20, bottom: 50, left: 50, right: 50}}>
                <Ionicons name="trash-outline" size={20} color="white" />
            </TouchableOpacity>
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
    marginBottom: 20,
  },
  itemLeft: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: '100%',
  },
  checkboxContainer: {
    flexDirection: 'row',
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
  itemText: {
    width: '78%'
  },
  badge: {
    width:10, 
    right: 10,
  },
  delete: {
    width:30, 
    height:30, 
    backgroundColor: '#b51111', 
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
  },
  teste:{
    flexDirection: 'row',
    top: 5,
  },
});
