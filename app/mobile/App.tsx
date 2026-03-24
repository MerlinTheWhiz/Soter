import React from 'react';
import * as ExpoLinking from 'expo-linking';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from './src/navigation/AppNavigator';
import { WalletProvider } from './src/contexts/WalletContext';

const linking = {
  prefixes: [ExpoLinking.createURL('/'), 'soter://'],
};

export default function App() {
  return (
    <SafeAreaProvider>
      <WalletProvider>
        <NavigationContainer linking={linking}>
          <AppNavigator />
          <StatusBar style="auto" />
        </NavigationContainer>
      </WalletProvider>
    </SafeAreaProvider>
  );
}
