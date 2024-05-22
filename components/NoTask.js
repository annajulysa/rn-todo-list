import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function NoTask() {
    return (
      <View style={styles.noItem}>
        <FontAwesome name="sticky-note" size={90} color="white" />
        <Text>...</Text>     
      </View>
    );
}

const styles = StyleSheet.create({
  noItem: {
    padding: 15,
    marginBottom: 20,
    flexDirection: 'column',
    alignItems: 'center',
  },
});
