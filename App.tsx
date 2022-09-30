import { StyleSheet, Text, View } from 'react-native';
import { Router } from './src/client/Router';
import { AuthProvider } from './src/client/context/UserContext';

export default function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}
