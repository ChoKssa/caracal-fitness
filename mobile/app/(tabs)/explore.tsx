import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function CoachSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [coaches, setCoaches] = useState([
    { id: '1', name: 'John Doe', specialty: 'Strength Training', age: 30 },
    { id: '2', name: 'Jane Smith', specialty: 'Yoga', age: 28 },
    { id: '3', name: 'Michael Brown', specialty: 'Cardio', age: 35 },
    { id: '4', name: 'Emily Davis', specialty: 'Pilates', age: 32 },
    { id: '5', name: 'Daniel Wilson', specialty: 'CrossFit', age: 29 },
    { id: '6', name: 'Andrija Djorgevik', specialty: 'Body building', age: 21 },
    { id: '7', name: 'Alexandre Catha', specialty: 'Foot', age: 21 },
    { id: '8', name: 'Francois Toinet', specialty: 'CrossFit', age: 20 },
    { id: '9', name: 'Vianney Ark', specialty: 'Préparation mentale', age: 22 },
    { id: '10', name: 'Jessy Piguri', specialty: 'Musculation', age: 32 },


  ]);

  const [newCoach, setNewCoach] = useState({ name: '', specialty: '', age: '' });

  const filteredCoaches = coaches.filter(coach =>
    coach.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addCoach = () => {
    if (newCoach.name && newCoach.specialty && newCoach.age) {
      setCoaches([
        ...coaches,
        {
          id: (coaches.length + 1).toString(),
          name: newCoach.name,
          specialty: newCoach.specialty,
          age: parseInt(newCoach.age),
        },
      ]);
      setNewCoach({ name: '', specialty: '', age: '' });
    }
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <View style={styles.textContainer}>
        <Text style={styles.itemText}>{item.name}</Text>
        <Text style={styles.itemSubText}>{item.specialty}</Text>
        <Text style={styles.itemSubText}>Age:{item.age}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search for Coaches</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search by name"
        value={searchQuery}
        onChangeText={text => setSearchQuery(text)}
      />
      <Text style={styles.subtitle}>Add New Coach</Text>
      <FlatList
        data={filteredCoaches}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  searchBar: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#28a745',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
  },
  itemText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  itemSubText: {
    fontSize: 16,
    color: '#666',
  },
});
