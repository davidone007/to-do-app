import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const EmptyState = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="checkmark-done-circle" size={80} color="#bdc3c7" />
      <Text style={styles.title}>¡No hay tareas!</Text>
      <Text style={styles.subtitle}>Crea tu primera tarea usando el botón +</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  title: {
    fontSize: 24,
    color: '#2c3e50',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#95a5a6',
    marginTop: 10,
  },
});

export default EmptyState;