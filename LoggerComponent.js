import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { startNetworkLogging } from 'react-native-network-logger';
import NetworkLogger from 'react-native-network-logger';

export default function LoggerComponent() {
  return (
    <View style={styles.container}>
      <Text style={{ alignSelf: 'center' }}>Network Logger Component</Text>
      <NetworkLogger/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    backgroundColor: '#fff',
  },
});