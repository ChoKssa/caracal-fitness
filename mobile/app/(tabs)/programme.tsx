import React from 'react';
import { View, Image, StyleSheet, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useNavigation } from '@react-navigation/native';


const { height } = Dimensions.get('window');

export default function HomeScreen() {
	const colorScheme = useColorScheme();
	const navigation = useNavigation();

	const dynamicStyles = {
		container: {
			flex: 1,
			backgroundColor: Colors[colorScheme ?? 'light'].background,
		},
		header: {
			backgroundColor: Colors[colorScheme ?? 'light'].background,
			height: "8%",
			justifyContent: 'center',
		},
		section: {
			backgroundColor: Colors[colorScheme ?? 'light'].backgroundSection,
			borderColor: Colors[colorScheme ?? 'light'].icon,
			width: '100%',
			height: height * 0.22,
			alignItems: 'center',
			justifyContent: 'center',
			marginBottom: 15,
			borderRadius: 25,
		},
		text: {
			color: Colors[colorScheme ?? 'light'].text,
			marginBottom: '2%',
		}
	};

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      <View style={[styles.header, dynamicStyles.header]}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/caracal.png')}
            style={styles.headerImage}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.body}>
        <View style={[styles.section, dynamicStyles.section]}>
          <Text style={dynamicStyles.text}>Conor Frazier</Text>
		  <View style={styles.imageCoachContainer}>
			<Image
				source={require('../../assets/images/coach.png')}
				style={styles.imageCoach}
			/>
		  </View>
        </View>
        <View style={[styles.section, dynamicStyles.section]}>
			<Text style={dynamicStyles.text}>Diet</Text>
			<View style={styles.imageElementContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('diet')}>
					<Image
						source={require('../../assets/images/food.png')}
						style={styles.imageElement}
					/>
				</TouchableOpacity>
			</View>
		</View>
        <View style={[styles.section, dynamicStyles.section]}>
			<Text style={dynamicStyles.text}>Trainning</Text>
			<View style={styles.imageElementContainer}>
				<TouchableOpacity onPress={() => navigation.navigate('trainning')}>
					<Image
						source={require('../../assets/images/trainning.png')}
						style={styles.imageElement}
					/>
				</TouchableOpacity>
			</View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    height: "100%",
    width: "100%",
    overflow: 'hidden',
    marginBottom: '-7%',
    marginLeft: '2%',
  },
  headerImage: {
    width: '15%',
    height: '65%',
  },
  body: {
    flexGrow: 1,
  },
  image: {
    width: 100,
    height: 100,
  },
  imageCoachContainer: {
	width: "30%",
    height: "75%",
  },
  imageCoach: {
	width: "100%",
    height: "100%",
	borderRadius: 25,
  },
  imageElementContainer: {
	width: "75%",
    height: "75%",
  },
  imageElement: {
	width: "100%",
    height: "100%",
	borderRadius: 25,
  }
});

