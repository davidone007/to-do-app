import React from 'react';
import { Modal, View, TouchableWithoutFeedback, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import TaskForm from './TaskForm';
import { addTask } from '../redux/slices/taskSlice';

const AddTaskModal = ({ visible, onClose }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.tasks);

  const handleSubmit = (taskData) => {
    dispatch(addTask(taskData));
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      
      <KeyboardAvoidingView
        style={styles.modalContent}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <TaskForm 
            categories={categories}
            onSave={handleSubmit}
            onCancel={onClose}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    marginTop: 'auto',
    maxHeight: '90%',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});

export default AddTaskModal;