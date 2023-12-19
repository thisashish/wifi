import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';

const WifiConnectorApp = () => {
  const [ssid, setSSID] = useState('');
  const [password, setPassword] = useState('');

  const handleConnect = () => {
    // Handle logic to connect to the entered WiFi
    if (ssid && password) {
      // Implement connection logic here
      Alert.alert('Connecting to WiFi', `SSID: ${ssid}, Password: ${password}`);
    } else {
      Alert.alert('Error', 'SSID and Password are required');
    }
  };

  const handleStart = () => {
    // Handle logic to start WiFi service
    // Implement start logic here
    Alert.alert('WiFi Service Started');
  };

  const handleStop = () => {
    // Handle logic to stop WiFi service
    // Implement stop logic here
    Alert.alert('WiFi Service Stopped');
  };

  const handleClose = () => {
    // Handle logic to close the app or perform cleanup
    // Implement close logic here
    Alert.alert('Closing WiFi Connector App');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 }}>
      <TextInput
        placeholder="Enter SSID"
        value={ssid}
        onChangeText={text => setSSID(text)}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
      />
      <TextInput
        placeholder="Enter Password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 10, width: 200 }}
      />
      <View style={{ marginBottom: 10, width: 120, overflow: 'hidden' }}>
        <Button title="Connect" onPress={handleConnect} />
      </View>
      <View style={{ marginBottom: 10, width: 120, overflow: 'hidden' }}>
        <Button title="Start" onPress={handleStart} />
      </View>
      <View style={{ marginBottom: 10, width: 120,overflow: 'hidden' }}>
        <Button title="Stop" onPress={handleStop} />
      </View>
      <View style={{ marginBottom: 10, width: 120, overflow: 'hidden' }}>
        <Button title="Close" onPress={handleClose} />
      </View>
    </View>
  );
};

export default WifiConnectorApp;
