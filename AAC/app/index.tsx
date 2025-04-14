import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {

    // Initialize state to manage the message on screen
    const [message, setMessage] = useState('Press the button to see something happen!');

    // Function to handle button press
    const handlePress = () => {
        setMessage('Button pressed! The screen updated!');
    };
    return (
        <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to the Home Screen!</Text>
            <Text style={styles.description}>
            This is a basic home screen built with Expo and React Native.
            </Text>
        </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});
