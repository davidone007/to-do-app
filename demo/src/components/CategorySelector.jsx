import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CategorySelector = ({ categories = [], selectedCategory, onSelect }) => {
  return (
    <View style={styles.container}>
      {categories.map((category) => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.categoryButton,
            { backgroundColor: category.color },
            selectedCategory?.id === category.id && styles.selectedCategory
          ]}
          onPress={() => onSelect(selectedCategory?.id === category.id ? null : category)}
        >
          <Text style={styles.categoryText}>{category.name}</Text>
          {selectedCategory?.id === category.id && (
            <Ionicons name="checkmark" size={18} color="white" style={styles.icon} />
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 15,
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  categoryText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  icon: {
    marginLeft: 5,
  },
  selectedCategory: {
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default CategorySelector;