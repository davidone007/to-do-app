import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import TaskList from '../components/TaskList';
import SearchBar from '../components/SearchBar';
import FilterTasks from '../components/FilterTasks';
import AddTaskModal from '../components/AddTaskModal';
import { setFilter, setSearchQuery } from '../redux/slices/taskSlice';
import { toggleTask } from '../redux/slices/taskSlice';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const { tasks, currentFilter, searchQuery } = useSelector(state => state.tasks);
  const [showTaskForm, setShowTaskForm] = useState(false);

  const getFilteredTasks = () => {
    let filtered = tasks;
    
    switch (currentFilter) {
      case 'completadas':
        filtered = filtered.filter(t => t.completed);
        break;
      case 'pendientes':
        filtered = filtered.filter(t => !t.completed);
        break;
    }

    if (searchQuery) {
      filtered = filtered.filter(t => 
        t.title.toLowerCase().includes(searchQuery) ||
        t.description?.toLowerCase().includes(searchQuery)
      );
    }

    return filtered;
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Mis Tareas</Text>
        
        <SearchBar 
          onSearch={(query) => dispatch(setSearchQuery(query))}
          onClear={() => dispatch(setSearchQuery(''))}
        />

        <FilterTasks
          currentFilter={currentFilter}
          onFilterChange={(filter) => dispatch(setFilter(filter))}
        />

        <TaskList
          tasks={getFilteredTasks()}
          navigation={navigation}
          onToggleTask={(id) => dispatch(toggleTask(id))}
        />

        <TouchableOpacity 
          style={styles.addButton}
          onPress={() => setShowTaskForm(true)}
        >
          <Ionicons name="add" size={30} color="white" />
        </TouchableOpacity>

        <AddTaskModal
          visible={showTaskForm}
          onClose={() => setShowTaskForm(false)}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
    textAlign: 'center',
  },
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#3498DB',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

export default HomeScreen;