// screens/OBDDataScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, Button } from 'react-native';

const OBDDataScreen = ({ route }) => {
  // Hardcoded device data (simulating the selected device)
  const device = { name: 'Smriti Agarwal' };

  // Hardcoded OBD-II data (simulated response)
  const [obdData, setObdData] = useState('');

  // Simulate fetching OBD data when the device is connected
  useEffect(() => {
    // Simulate OBD-II command response
    const simulatedObdData = {
      rpm: '2500 RPM',
      speed: '80 km/h',
      fuelLevel: '65%',
    };

    // Set the OBD data after a delay (simulating a Bluetooth data fetch)
    setTimeout(() => {
      setObdData(`
        RPM: ${simulatedObdData.rpm}
        Speed: ${simulatedObdData.speed}
        Fuel Level: ${simulatedObdData.fuelLevel}
      `);
    }, 1000); // Simulate a 1-second delay
  }, [device]);

  return (
    <View>
      <Text>Connected to: {device.name}</Text>
      <Text>OBD Data:</Text>
      <Text>{obdData}</Text>
    </View>
  );
};

export default OBDDataScreen;
