import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Image, Text } from 'react-native';
import { HelloWave } from '@/components/HelloWave';

export default function HomeScreen() {
  const [greeting, setGreeting] = useState('');

  // Détermine le message de bienvenue en fonction de l'heure actuelle
  useEffect(() => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      setGreeting('Good Morning');
    } else if (currentHour < 18) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  return (
    <ScrollView style={styles.container}>
      {/* Section de l'en-tête avec le message de bienvenue et l'image de profil */}
      <View style={styles.headerContainer}>
        <View style={styles.userContainer}>
          <View>
            <Text style={styles.greetingText}>{greeting}</Text>
            <View style={styles.nameContainer}>
              <Text style={styles.nameText}>Martin Petit</Text>
              <HelloWave />
            </View>
          </View>
          <Image
            source={require('@/assets/images/caracal.png')}
            style={styles.logo}
          />
        </View>
      </View>

      {/* Section du plan de la journée */}
      <View style={styles.planContainer}>
        <Text style={[styles.planTitle, styles.textBlack]}>Today's Plan</Text>

        {/* Élément du plan : Exercice Chest */}
        <View style={styles.planItem}>
          <Image
            source={{ uri: 'https://source.unsplash.com/random/60x60/?exercise' }}
            style={styles.planImage}
          />
          <View style={styles.planDetails}>
            <Text style={styles.planItemText}>Chest</Text>
            <Text style={styles.planCaption}>Description</Text>
            <Text style={[styles.planTag, styles.textBlack]}>Morning</Text>
          </View>
          <View style={styles.planCheck}>
            <Text style={[styles.planCheckText, styles.textBlack]}>✔</Text>
          </View>
        </View>

        {/* Élément du plan : Cardio elliptical bike */}
        <View style={styles.planItem}>
          <Image
            source={{ uri: 'https://source.unsplash.com/random/60x60/?cardio' }}
            style={styles.planImage}
          />
          <View style={styles.planDetails}>
            <Text style={styles.planItemText}>Cardio elliptical bike</Text>
            <Text style={styles.planCaption}>45 min</Text>
            <Text style={[styles.planTag, styles.textBlack]}>Morning</Text>
          </View>
          <View style={styles.planCheck}>
            <Text style={[styles.planCheckText, styles.textBlack]}>✘</Text>
          </View>
        </View>

        {/* Élément du plan : Nourriture complète */}
        <View style={styles.planItem}>
          <Image
            source={{ uri: 'https://source.unsplash.com/random/60x60/?food' }}
            style={styles.planImage}
          />
          <View style={styles.planDetails}>
            <Text style={styles.planItemText}>Complete food</Text>
            <Text style={styles.planCaption}>OMEGA 3</Text>
            <Text style={[styles.planTag, styles.textBlack]}>Afternoon</Text>
          </View>
          <View style={styles.planCheck}>
            <Text style={[styles.planCheckText, styles.textBlack]}>✔</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  logo: {
    width: 50,
    height: 50,
    borderRadius: 25, // Rond
    marginLeft: 16,
  },
  greetingText: {
    color: 'black',
    fontSize: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nameText: {
    color: 'black',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 8,
  },
  planContainer: {
    padding: 16,
  },
  planTitle: {
    color: 'black',
    fontSize: 24,
    marginBottom: 16,
  },
  planItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
  },
  planImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
    marginRight: 16,
  },
  planDetails: {
    flex: 1,
  },
  planItemText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
  planCaption: {
    color: 'black',
    fontSize: 14,
  },
  planTag: {
    backgroundColor: '#ddd',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginTop: 8,
    alignSelf: 'flex-start',
    color: 'black',
  },
  planCheck: {
    marginLeft: 16,
  },
  planCheckText: {
    color: 'black',
    fontSize: 24,
  },
  textBlack: {
    color: 'black',
  },
});
