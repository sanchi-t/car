import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text, Button } from 'react-native';

const VehicleListScreen = ({ navigation }) => {
  const [vehicles] = useState([
    { id: '1', name: 'Car 1', mileage: '5000' },
    { id: '2', name: 'Car 2', mileage: '8000' },
    // ... other vehicles
  ]);

  const renderVehicleItem = ({ item }) => (
    <TouchableOpacity
      style={styles.vehicleItem}
      onPress={() => navigation.navigate('VehicleDetails', { vehicle: item })}
    >
      <Text style={styles.vehicleName}>{item.name}</Text>
      <Text>Mileage: {item.mileage} km</Text>
      {/* Connect to OBD-II button for each vehicle */}
      <Button
        title="Connect to OBD-II"
        onPress={() => navigation.navigate('OBDConnection', { vehicleId: item.id })}
      />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={vehicles}
        keyExtractor={(item) => item.id}
        renderItem={renderVehicleItem}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddEditVehicle')}
      >
        <Text style={styles.addButtonText}>Add Vehicle</Text>
      </TouchableOpacity>
      {/* Single Connect to OBD-II button at the bottom */}
      <TouchableOpacity
        style={styles.obdButton}
        onPress={() => navigation.navigate('OBDConnection')}
      >
        <Text style={styles.obdButtonText}>Connect to OBD-II</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  vehicleItem: {
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#E5E5E5',
    borderRadius: 8,
  },
  vehicleName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  addButton: {
    marginVertical: 16,
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    borderRadius: 8,
  },
  addButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  obdButton: {
    marginTop: 10,
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
  },
  obdButtonText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default VehicleListScreen;
