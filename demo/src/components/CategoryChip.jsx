import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CategoryChip = ({ category }) => {
  if (!category) return null;
  
  return (
    <View style={[styles.container, { backgroundColor: category.color }]}>
      <Text style={styles.text}>{category.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});

export default CategoryChip;