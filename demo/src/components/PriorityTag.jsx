import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PRIORITY_COLORS = {
  alta: '#e74c3c',
  media: '#f1c40f',
  baja: '#2ecc71',
};

const PriorityTag = ({ priority }) => {
  return (
    <View style={[
      styles.container,
      { backgroundColor: PRIORITY_COLORS[priority] || '#95a5a6' }
    ]}>
      <Text style={styles.text}>{priority.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
});

export default PriorityTag;