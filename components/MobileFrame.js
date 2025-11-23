import React from 'react';
import { View, StyleSheet, Platform } from 'react-native';

export default function MobileFrame({ children }) {
  if (Platform.OS !== 'web') {
    return <>{children}</>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.frame}>
        <View style={styles.notch} />
        <View style={styles.screen}>
          {children}
        </View>
        <View style={styles.homeIndicator} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0e0e0', // Background outside the phone
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: 20,
  },
  frame: {
    width: 375,
    height: 812, // iPhone X dimensions
    backgroundColor: '#000',
    borderRadius: 40,
    overflow: 'hidden',
    position: 'relative',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 40,
    elevation: 20,
    borderWidth: 10,
    borderColor: '#333',
  },
  notch: {
    position: 'absolute',
    top: 0,
    alignSelf: 'center',
    width: 150,
    height: 30,
    backgroundColor: '#000',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    zIndex: 10,
  },
  screen: {
    flex: 1,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 30, // Inner screen radius
  },
  homeIndicator: {
    position: 'absolute',
    bottom: 8,
    alignSelf: 'center',
    width: 120,
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 100,
    opacity: 0.5,
    zIndex: 10,
  },
});
