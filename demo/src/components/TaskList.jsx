import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import PriorityTag from './PriorityTag';
import DueDateBadge from './DueDateBadge';
import CategoryChip from './CategoryChip';
import EmptyState from './EmptyState';

const TaskList = ({ tasks, navigation, onToggleTask }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.taskItem}
      onPress={() => navigation.navigate('TaskDetail', { task: item })}
    >
      <View style={styles.taskContent}>
        <TouchableOpacity 
          onPress={() => onToggleTask(item.id)}
          style={styles.checkButton}
        >
          <Ionicons
            name={item.completed ? 'checkmark-circle' : 'ellipse-outline'}
            size={24}
            color={item.completed ? '#4CAF50' : '#666'}
          />
        </TouchableOpacity>
        
        <View style={styles.taskInfo}>
          <Text style={[styles.taskTitle, item.completed && styles.completed]}>
            {item.title}
          </Text>
          
          <View style={styles.metaContainer}>
            {item.category && <CategoryChip category={item.category} />}
            {item.priority && <PriorityTag priority={item.priority} />}
            {item.dueDate && <DueDateBadge dueDate={item.dueDate} />}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={tasks}
      renderItem={renderItem}
      keyExtractor={item => item.id.toString()}
      ListEmptyComponent={<EmptyState />}
      contentContainerStyle={styles.listContent}
    />
  );
};

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkButton: {
    marginRight: 10,
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    color: '#2C3E50',
    marginBottom: 5,
  },
  completed: {
    textDecorationLine: 'line-through',
    color: '#95a5a6',
  },
  metaContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  listContent: {
    paddingBottom: 20,
  },
});

export default TaskList;