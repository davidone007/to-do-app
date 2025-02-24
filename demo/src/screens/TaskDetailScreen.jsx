import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../redux/slices/taskSlice';
import TaskForm from '../components/TaskForm';
import DeleteConfirmationModal from '../components/DeleteConfirmationModal';
import PriorityTag from '../components/PriorityTag';
import DueDateBadge from '../components/DueDateBadge';

const TaskDetailScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const { task } = route.params;
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);

  const handleSave = (updatedTask) => {
    dispatch(editTask(updatedTask));
    navigation.goBack();
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    navigation.goBack();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <PriorityTag priority={task.priority} />
        <DueDateBadge dueDate={task.dueDate} />
      </View>

      <TaskForm
        initialTask={task}
        onSave={handleSave}
        onCancel={() => navigation.goBack()}
        onDelete={() => setShowDeleteModal(true)}
      />

      <DeleteConfirmationModal
        visible={showDeleteModal}
        onConfirm={handleDelete}
        onCancel={() => setShowDeleteModal(false)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#FFF',
    minHeight: '100%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default TaskDetailScreen;