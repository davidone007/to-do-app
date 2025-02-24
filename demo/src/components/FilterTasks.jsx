import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const FILTERS = [
  { label: 'Todas', value: 'todas' },
  { label: 'Pendientes', value: 'pendientes' },
  { label: 'Completadas', value: 'completadas' },
];

const FilterTasks = ({ currentFilter, onFilterChange }) => {
  return (
    <View style={styles.container}>
      {FILTERS.map((filter) => (
        <TouchableOpacity
          key={filter.value}
          style={[
            styles.filterButton,
            currentFilter === filter.value && styles.activeFilter,
          ]}
          onPress={() => onFilterChange(filter.value)}
        >
          <Text style={[
            styles.filterText,
            currentFilter === filter.value && styles.activeFilterText
          ]}>
            {filter.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  filterButton: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ecf0f1',
    marginHorizontal: 4,
  },
  activeFilter: {
    backgroundColor: '#3498db',
  },
  filterText: {
    color: '#7f8c8d',
    fontWeight: '500',
  },
  activeFilterText: {
    color: 'white',
  },
});

export default FilterTasks;