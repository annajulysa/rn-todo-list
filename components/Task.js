import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import CheckBox from 'expo-checkbox';
import IconBadge from 'react-native-icon-badge';

export default function Task(props) {
    const [isSelected, setIsSelected] = useState(false);

    console.log(props)

    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>      
                <View style={styles.checkboxContainer}>
                    <CheckBox style={styles.checkbox} value={isSelected} onValueChange={setIsSelected}/>   
                    <Entypo name="dots-three-vertical" size={15} color="black" />        
                    <Button title="Ola" />
                </View>         
                <View>
                    <Text style={styles.itemText}>{props.title}</Text>
                    <Text style={styles.itemText}>{props.description}</Text>
                    <IconBadge 
                        BadgeElement={ <Text style={{color:'#0b4577'}}>{props.priority}</Text> }
                        IconBadgeStyle={{ width:90, height:20, backgroundColor: '#0088ff7a', borderRadius:5,} }
                    />                    
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
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkbox: {
    width: 24,
    height: 24,
    marginRight: 15,
  },
});
