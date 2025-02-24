import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DueDateBadge = ({ dueDate }) => {
  if (!dueDate) return null;

  const date = new Date(dueDate);
  const today = new Date();
  const isOverdue = date < today;

  return (
    <View style={[
      styles.container,
      isOverdue && styles.overdue
    ]}>
      <Ionicons 
        name="calendar" 
        size={14} 
        color={isOverdue ? 'white' : '#3498db'} 
      />
      <Text style={[
        styles.text,
        isOverdue && styles.overdueText
      ]}>
        {date.toLocaleDateString()}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    gap: 4,
  },
  text: {
    fontSize: 12,
    color: '#3498db',
  },
  overdue: {
    backgroundColor: '#e74c3c',
  },
  overdueText: {
    color: 'white',
  },
});

export default DueDateBadge;