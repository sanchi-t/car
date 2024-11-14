// screens/OBDConnectionScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';

const OBDConnectionScreen = ({ navigation }) => {
  // Hardcoded devices data
  const devices = [
    { id: '1', name: 'OBD-II Device 1' },
    { id: '2', name: 'OBD-II Device 2' },
    { id: '3', name: 'OBD-II Device 3' },
    { id: '4', name: 'OBD-II Device 4' },
  ];

  const [connectedDevice, setConnectedDevice] = useState(null);

  const connectToDevice = (device) => {
    // Hardcoded device connection logic (no actual Bluetooth connection here)
    setConnectedDevice(device);
    navigation.navigate('OBDDataScreen', { device });
  };

  return (
    <View>
      <Text>Select OBD-II Device</Text>
      <FlatList
        data={devices}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => connectToDevice(item)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
      {connectedDevice && (
        <Text>Connected to: {connectedDevice.name}</Text>
      )}
    </View>
  );
};

export default OBDConnectionScreen;
