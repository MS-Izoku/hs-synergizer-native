import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppHeader from './core_gui_components/AppHeader'
import AppFooter from './core_gui_components/AppFooter'

export default function App() {
  return (
    <View style={styles.container}>
      <AppHeader/>
      <Text>Wello Dello</Text>
      <AppFooter/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
