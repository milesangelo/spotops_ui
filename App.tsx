import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from './src/Auth/Contexts/Auth';
import { Router } from './src/Auth/Routes/Router';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
