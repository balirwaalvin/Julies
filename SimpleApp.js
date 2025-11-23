import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SimpleApp() {
  console.log("SimpleApp is rendering");
  return (
    <View style={styles.container}>
      <Text style={styles.text}>If you can see this, the app setup is correct.</Text>
      <Text style={styles.text}>The issue is likely in App.js or Firebase/Navigation.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  text: {
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
});
