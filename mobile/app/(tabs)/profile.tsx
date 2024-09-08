import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        <View style={styles.headerContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/400x200?text=Fitness+Background' }}
            style={styles.headerImage}
          />
          <View style={styles.headerOverlay}>
            <Image
              source={{ uri: 'https://via.placeholder.com/120?text=Coach+Pic' }}
              style={styles.profileImage}
            />
            <Text style={styles.username}>Coach Alexandre</Text>
            <Text style={styles.email}>alexandre.coach@example.com</Text>
            <Text style={styles.bio}>Certified personal trainer with over 10 years of experience in fitness and wellness.</Text>
          </View>
        </View>

        <View style={styles.personalDetailsContainer}>
          <Text style={styles.sectionTitle}>Personal Details</Text>
          <View style={styles.personalDetailRow}>
            <Icon name="person" size={24} color="#007BFF" style={styles.icon} />
            <Text style={styles.detailLabel}>Name:</Text>
            <Text style={styles.detailValue}>Alexandre Dupont</Text>
          </View>
          <View style={styles.personalDetailRow}>
            <Icon name="cake" size={24} color="#007BFF" style={styles.icon} />
            <Text style={styles.detailLabel}>Age:</Text>
            <Text style={styles.detailValue}>32</Text>
          </View>
          <View style={styles.personalDetailRow}>
            <Icon name="transgender" size={24} color="#007BFF" style={styles.icon} />
            <Text style={styles.detailLabel}>Gender:</Text>
            <Text style={styles.detailValue}>Male</Text>
          </View>
          <View style={styles.personalDetailRow}>
            <Icon name="location-on" size={24} color="#007BFF" style={styles.icon} />
            <Text style={styles.detailLabel}>Location:</Text>
            <Text style={styles.detailValue}>Paris, France</Text>
          </View>
        </View>

        <View style={styles.servicesContainer}>
          <Text style={styles.sectionTitle}>Services Offered</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.servicesScrollContainer}>

            <View style={styles.serviceCard}>
              <Image
                source={{ uri: 'https://via.placeholder.com/160?text=Personal+Training' }}
                style={styles.serviceImage}
              />
              <Text style={styles.serviceTitle}>Personal Training</Text>
              <Text style={styles.serviceDescription}>Custom workout programs tailored to your fitness goals.</Text>
              <TouchableOpacity
                style={styles.serviceButton}
                onPress={() => alert('See Personal Training Details')}
              >
                <Text style={styles.serviceButtonText}>See Details</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.serviceCard}>
              <Image
                source={{ uri: 'https://via.placeholder.com/160?text=Nutrition+Consultation' }}
                style={styles.serviceImage}
              />
              <Text style={styles.serviceTitle}>Nutrition</Text>
              <Text style={styles.serviceDescription}>Nutritional advice to improve your diet.</Text>
              <TouchableOpacity
                style={styles.serviceButton}
                onPress={() => alert('See Nutrition Consultation Details')}
              >
                <Text style={styles.serviceButtonText}>See Details</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.serviceCard}>
              <Image
                source={{ uri: 'https://via.placeholder.com/160?text=Group+Sessions' }}
                style={styles.serviceImage}
              />
              <Text style={styles.serviceTitle}>Group Sessions</Text>
              <Text style={styles.serviceDescription}>Group fitness sessions for a fun and motivating workout experience.</Text>
              <TouchableOpacity
                style={styles.serviceButton}
                onPress={() => alert('See Group Sessions Details')}
              >
                <Text style={styles.serviceButtonText}>See Details</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.serviceCard}>
              <Image
                source={{ uri: 'https://via.placeholder.com/160?text=Virtual+Training' }}
                style={styles.serviceImage}
              />
              <Text style={styles.serviceTitle}>Virtual Training</Text>
              <Text style={styles.serviceDescription}>Flexible online training sessions tailored to your schedule.</Text>
              <TouchableOpacity
                style={styles.serviceButton}
                onPress={() => alert('See Virtual Training Details')}
              >
                <Text style={styles.serviceButtonText}>See Details</Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>

        <View style={styles.reservationsContainer}>
          <Text style={styles.sectionTitle}>Manage Bookings</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('See Bookings')}
          >
            <Text style={styles.buttonText}>See Bookings</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Add a Booking')}
          >
            <Text style={styles.buttonText}>Add a Booking</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.reviewsContainer}>
          <Text style={styles.sectionTitle}>Client Reviews</Text>
          <View style={styles.review}>
            <Icon name="star" size={18} color="#FFD700" />
            <Text style={styles.reviewText}>"Coach Alexandre has been exceptional! His sessions are always well-structured and motivating."</Text>
            <Text style={styles.reviewAuthor}>– Marie, 29</Text>
          </View>
          <View style={styles.review}>
            <Icon name="star" size={18} color="#FFD700" />
            <Text style={styles.reviewText}>"Great variety and effectiveness in the training sessions. Highly recommend!"</Text>
            <Text style={styles.reviewAuthor}>– Lucas, 35</Text>
          </View>
        </View>

        <View style={styles.programContainer}>
          <Text style={styles.sectionTitle}>See My Programs</Text>
          <Text style={styles.programText}>Explore my upcoming fitness programs and find the right one for you.</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('See My Programs')}
          >
            <Text style={styles.buttonText}>See My Programs</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.partnershipsContainer}>
          <Text style={styles.sectionTitle}>Partnerships</Text>
          <Text style={styles.partnershipText}>Proudly partnered with top fitness brands and gyms:</Text>
          <View style={styles.partnershipRow}>
            <Image
              source={{ uri: 'https://via.placeholder.com/100?text=Brand+1' }}
              style={styles.partnershipLogo}
            />
            <Image
              source={{ uri: 'https://via.placeholder.com/100?text=Brand+2' }}
              style={styles.partnershipLogo}
            />
            <Image
              source={{ uri: 'https://via.placeholder.com/100?text=Brand+3' }}
              style={styles.partnershipLogo}
            />
          </View>
        </View>

        <View style={styles.promotionsContainer}>
          <Text style={styles.sectionTitle}>Promotional Codes</Text>
          <View style={styles.promoCodeRow}>
            <Text style={styles.promoCode}>SUMMER2024</Text>
            <Text style={styles.promoDescription}>Get 20% off on all personal training sessions!</Text>
          </View>
          <View style={styles.promoCodeRow}>
            <Text style={styles.promoCode}>FITNESS10</Text>
            <Text style={styles.promoDescription}>10% off on your first group session!</Text>
          </View>
          <View style={styles.promoCodeRow}>
            <Text style={styles.promoCode}>NUTRITION15</Text>
            <Text style={styles.promoDescription}>15% off on all nutrition consultations!</Text>
          </View>
        </View>

        <View style={styles.contactContainer}>
          <Text style={styles.sectionTitle}>Contact</Text>
          <View style={styles.contactRow}>
            <Icon name="phone" size={24} color="#007BFF" style={styles.icon} />
            <Text style={styles.contactLabel}>Phone:</Text>
            <Text style={styles.contactValue}>+33 6 12 34 56 78</Text>
          </View>
          <View style={styles.contactRow}>
            <Icon name="language" size={24} color="#007BFF" style={styles.icon} />
            <Text style={styles.contactLabel}>Website:</Text>
            <Text style={styles.contactValue}>www.coach-alexandre.com</Text>
          </View>
          <View style={styles.contactRow}>
            <Icon name="instagram" size={24} color="#E4405F" style={styles.icon} />
            <Text style={styles.contactLabel}>Instagram:</Text>
            <Text style={styles.contactValue}>@coach_alexandre</Text>
          </View>
          <View style={styles.contactRow}>
            <Icon name="facebook" size={24} color="#1877F2" style={styles.icon} />
            <Text style={styles.contactLabel}>Facebook:</Text>
            <Text style={styles.contactValue}>facebook.com/coach.alexandre</Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => alert('Access Settings')}
          >
            <Text style={styles.buttonText}>Settings</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContainer: {
    padding: 0,
  },
  headerContainer: {
    position: 'relative',
    height: 280,
    backgroundColor: '#007BFF',
    marginBottom: 20,
  },
  headerImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    resizeMode: 'cover',
  },
  headerOverlay: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 5,
    borderColor: '#FFD700',
    marginBottom: 10,
  },
  username: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  email: {
    fontSize: 18,
    color: '#e0e0e0',
    marginTop: 5,
  },
  bio: {
    fontSize: 16,
    color: '#e0e0e0',
    marginTop: 10,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  personalDetailsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  personalDetailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
    flex: 1,
  },
  detailValue: {
    fontSize: 16,
    color: '#333',
    flex: 2,
  },
  icon: {
    marginRight: 10,
  },
  servicesContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  servicesScrollContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  serviceCard: {
    backgroundColor: '#f8f9fa',
    borderRadius: 10,
    padding: 15,
    marginRight: 15,
    width: 220,
    height: 280,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  serviceImage: {
    width: '100%',
    height: 120,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  serviceTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  serviceDescription: {
    fontSize: 14,
    color: '#555',
    marginVertical: 10,
  },
  serviceButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  serviceButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  reservationsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  reviewsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  review: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  reviewText: {
    fontSize: 14,
    color: '#777',
    fontStyle: 'italic',
    marginLeft: 10,
  },
  reviewAuthor: {
    fontSize: 12,
    color: '#333',
    marginTop: 5,
    marginLeft: 10,
  },
  programContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  programText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 15,
  },
  partnershipsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  partnershipText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 10,
  },
  partnershipRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  partnershipLogo: {
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  promotionsContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  promoCodeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  promoCode: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#007BFF',
  },
  promoDescription: {
    fontSize: 14,
    color: '#555',
  },
  contactContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 20,
  },
  contactRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  contactLabel: {
    fontSize: 16,
    color: '#555',
    fontWeight: 'bold',
    flex: 1,
  },
  contactValue: {
    fontSize: 16,
    color: '#333',
    flex: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#007BFF',
    marginBottom: 10,
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default ProfileScreen
