import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import CategorySelector from './CategorySelector';
import PrioritySelector from './PrioritySelector';

const TaskForm = ({ 
  initialTask, 
  categories = [],
  onSave, 
  onCancel, 
  onDelete 
}) => {
  const [task, setTask] = useState(initialTask || {
    title: '',
    description: '',
    category: null,
    priority: 'media',
    dueDate: null,
  });
  const [showDatePicker, setShowDatePicker] = useState(false);

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(Platform.OS === 'ios');
    if (selectedDate) {
      setTask({ ...task, dueDate: selectedDate.toISOString() });
    }
  };

  const handleSubmit = () => {
    if (task.title.trim()) {
      onSave(task);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título de la tarea"
        value={task.title}
        onChangeText={(text) => setTask({ ...task, title: text })}
      />
      
      <TextInput
        style={[styles.input, styles.descriptionInput]}
        placeholder="Descripción (opcional)"
        multiline
        value={task.description}
        onChangeText={(text) => setTask({ ...task, description: text })}
      />

      <CategorySelector
        categories={categories}
        selectedCategory={task.category}
        onSelect={(category) => setTask({ ...task, category })}
      />

      <PrioritySelector
        selectedPriority={task.priority}
        onSelect={(priority) => setTask({ ...task, priority })}
      />

      <TouchableOpacity 
        style={styles.datePickerButton}
        onPress={() => setShowDatePicker(true)}
      >
        <Ionicons name="calendar" size={20} color="#3498DB" />
        <Text style={styles.dateText}>
          {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'Establecer fecha límite'}
        </Text>
      </TouchableOpacity>

      {showDatePicker && (
        <DateTimePicker
          value={task.dueDate ? new Date(task.dueDate) : new Date()}
          mode="date"
          display="default"
          onChange={handleDateChange}
        />
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={onCancel}>
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.saveButton} onPress={handleSubmit}>
          <Text style={styles.buttonText}>{initialTask ? 'Guardar' : 'Crear'}</Text>
        </TouchableOpacity>
      </View>

      {initialTask && (
        <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
          <Text style={styles.deleteButtonText}>Eliminar Tarea</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
    backgroundColor: 'white',
  },
  descriptionInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  datePickerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 15,
    gap: 10,
  },
  dateText: {
    color: '#3498DB',
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 20,
  },
  cancelButton: {
    flex: 1,
    backgroundColor: '#e74c3c',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  saveButton: {
    flex: 1,
    backgroundColor: '#2ecc71',
    borderRadius: 8,
    padding: 15,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  deleteButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#e74c3c',
    fontWeight: 'bold',
  },
});

export default TaskForm;