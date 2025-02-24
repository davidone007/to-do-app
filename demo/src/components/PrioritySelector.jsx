import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const PRIORITY_OPTIONS = [
  { value: 'alta', label: 'Alta', color: '#e74c3c' },
  { value: 'media', label: 'Media', color: '#f1c40f' },
  { value: 'baja', label: 'Baja', color: '#2ecc71' },
];

const PrioritySelector = ({ selectedPriority, onSelect }) => {
  return (
    <View style={styles.container}>
      {PRIORITY_OPTIONS.map((priority) => (
        <TouchableOpacity
          key={priority.value}
          style={[
            styles.priorityButton,
            { backgroundColor: priority.color },
            selectedPriority === priority.value && styles.selectedPriority
          ]}
          onPress={() => onSelect(priority.value)}
        >
          <Text style={styles.priorityText}>{priority.label}</Text>
          {selectedPriority === priority.value && (
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
    gap: 10,
    marginBottom: 15,
  },
  priorityButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderRadius: 8,
  },
  priorityText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  icon: {
    marginLeft: 5,
  },
  selectedPriority: {
    borderWidth: 2,
    borderColor: 'white',
  },
});

export default PrioritySelector;