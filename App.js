import React from 'react';
import { View, Text } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider, useAuth } from './context/AuthContext';
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import DashboardScreen from './screens/DashboardScreen';
import { ActivityIndicator } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  const { user, loading } = useAuth();

  console.log("App: Rendering, loading:", loading, "user:", user);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        <ActivityIndicator size="large" color="#3498db" />
        <Text style={{ marginTop: 20, color: '#3498db' }}>Loading Julies...</Text>
      </View>
    );
  }

  console.log("AppNavigator: Rendering content");
  
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
      ) : (
        <>
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Signup" component={SignupScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'pink' }}>
          <Text style={{ fontSize: 20, color: 'red', marginBottom: 20 }}>Something went wrong!</Text>
          <Text>{this.state.error?.toString()}</Text>
        </View>
      );
    }

    return this.props.children;
  }
}

export default function App() {
  console.log("App: Component Mounting (Full)");
  return (
    <ErrorBoundary>
      <AuthProvider>
        <SafeAreaProvider>
          <View style={{ flex: 1, height: '100%', width: '100%' }}>
            <NavigationContainer>
              <AppNavigator />
            </NavigationContainer>
          </View>
        </SafeAreaProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
}
