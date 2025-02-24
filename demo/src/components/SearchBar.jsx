import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ onSearch, onClear }) => {
  const [query, setQuery] = React.useState('');

  const handleClear = () => {
    setQuery('');
    onClear();
  };

  return (
    <View style={styles.container}>
      <Ionicons name="search" size={20} color="#95a5a6" />
      <TextInput
        style={styles.input}
        placeholder="Buscar tareas..."
        value={query}
        onChangeText={(text) => {
          setQuery(text);
          onSearch(text);
        }}
        placeholderTextColor="#95a5a6"
      />
      {query.length > 0 && (
        <TouchableOpacity onPress={handleClear}>
          <Ionicons name="close-circle" size={20} color="#95a5a6" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 15,
    elevation: 2,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: '#2C3E50',
  },
});

export default SearchBar;