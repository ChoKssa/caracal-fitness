import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { API_URL } from '@/components/Env';

export default function App() {
  const [showDietForm, setShowDietForm] = useState(false);
  const [showTrainingForm, setShowTrainingForm] = useState(false);
  const [dietName, setDietName] = useState('');
  const [dietGrammage, setDietGrammage] = useState('');
  const [trainingName, setTrainingName] = useState('');
  const [trainingDescription, setTrainingDescription] = useState('');
  const [trainingCategory, setTrainingCategory] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const handleAddDiet = () => {
    setShowDietForm(true);
    setShowTrainingForm(false);
  };

  const handleAddTraining = () => {
    setShowTrainingForm(true);
    setShowDietForm(false);
  };

  const handleUpdateDiet = () => {
    Alert.alert("Diet Updated", `Name: ${dietName}, Grammage: ${dietGrammage}`);
    setDietName('');
    setDietGrammage('');
    setShowDietForm(false);
  };

  const handleUpdateTraining = async () => {
    try {
      const userResponse = await fetch(`${API_URL}/api/users/email/${userEmail}`);
      const userData = await userResponse.json();

      if (userResponse.status !== 200) {
        throw new Error(userData.error);
      }

      const programResponse = await fetch(`${API_URL}/api/programs`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          coach_id: 2,
          client_id: userData.ID,
          exercises: JSON.stringify([{ name: trainingName, description: trainingDescription, category: trainingCategory }]),
          description: trainingDescription,
        }),
      });

      if (programResponse.status !== 201) {
        const errorData = await programResponse.json();
        throw new Error(errorData.error);
      }

      Alert.alert("Training Program Sent", `Program for ${userEmail} has been created and sent.`);
      setTrainingName('');
      setTrainingDescription('');
      setTrainingCategory('');
      setUserEmail('');
      setShowTrainingForm(false);
    } catch (error) {
      Alert.alert("Error traning", error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcom coach</Text>
      <View style={styles.buttonContainer}>
        <Button title="Add Diet" onPress={handleAddDiet} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add Training" onPress={handleAddTraining} />
      </View>

      {showDietForm && (
        <View style={styles.formContainer}>
          <Text style={styles.label}>Name of the food</Text>
          <TextInput
            style={styles.input}
            placeholder="Name of the food"
            value={dietName}
            onChangeText={setDietName}
          />
          <Text style={styles.label}>Grammage</Text>
          <TextInput
            style={styles.input}
            placeholder="Grammage"
            value={dietGrammage}
            onChangeText={setDietGrammage}
            keyboardType="numeric"
          />
          <Button title="Update" onPress={handleUpdateDiet} />
        </View>
      )}

      {showTrainingForm && (
        <View style={styles.formContainer}>
          <Text style={styles.label}>User Email</Text>
          <TextInput
            style={styles.input}
            placeholder="User Email"
            value={userEmail}
            onChangeText={setUserEmail}
            keyboardType="email-address"
          />
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={trainingName}
            onChangeText={setTrainingName}
          />
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            placeholder="Description"
            value={trainingDescription}
            onChangeText={setTrainingDescription}
          />
          <Text style={styles.label}>Category</Text>
          <TextInput
            style={styles.input}
            placeholder="Category"
            value={trainingCategory}
            onChangeText={setTrainingCategory}
          />
          <Button title="Send Program" onPress={handleUpdateTraining} />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  buttonContainer: {
    margin: 10,
    width: '80%',
  },
  formContainer: {
    width: '80%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
});