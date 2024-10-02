import { View, Text, TouchableOpacity, FlatList, Image } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

const Plant = () => {
  const [activeTab, setActiveTab] = useState('PLANTS');

  const plants = [
    { id: '1', name: 'Basil', type: 'Herb', harvestIn: '3 days', planted: '8 days ago' },
    { id: '2', name: 'Mint', type: 'Herb', harvestIn: '10 days', planted: '5 days ago' },
    { id: '3', name: 'Lemon Balm', type: 'Herb', harvestIn: '15 days', planted: 'yesterday' },
    { id: '4', name: 'Oregano', type: 'Herb', harvestIn: '3 weeks', planted: '3 weeks ago' }
  ];

  const logs = [
    { id: '1', title: 'Water Refill Due', details: "This EcoTech's water level is low (10%), you should refill it.", color: 'red' },
    { id: '2', title: 'New cycle started', details: 'You just started a new cycle, time to grow new plants 🌱', color: 'blue' },
    { id: '3', title: 'Oregano ready for harvest', details: 'Oregano has been ready for 2 days', color: 'green' },
  ];

  const settings = [
    { id: '1', title: 'Connectivity', value: 'Connected via Wifi', icon: require('../../assets/icons/wifi.png') },
    { id: '2', title: 'Plantlight Settings', value: 'Currently ON', icon: require('../../assets/icons/lightbulb.png') },
    { id: '3', title: 'Cycle Settings', value: '', icon: require('../../assets/icons/clock.png') },
    { id: '4', title: 'EcoTech Sync Settings', value: '', icon: require('../../assets/icons/sync.png') },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'PLANTS':
        return (
          <>
            {/* Pod Info Section */}
            <View className="bg-green-50 p-4 rounded-lg mb-6">
              <Text className="text-green-600 font-semibold">🪴Using 4 out of 4 pods</Text>
              <Text className="text-green-600">💡Basil will be ready for harvest in 3 days</Text>
            </View>

            {/* Growing Now Section */}
            <Text className="text-gray-500 mb-2">🌱 Growing now</Text>

            {/* Plant List */}
            <FlatList
              data={plants}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                <View className="flex-row justify-between items-center bg-green-50 p-4 mb-2 rounded-lg">
                  <View className="flex-row items-center">
                    <Image
                      source={require('../../assets/icons/basil.png')}
                      style={{ width: 40, height: 40 }}
                      className="mr-4"
                    />
                    <View>
                      <Text className="font-semibold">{item.name}</Text>
                      <Text className="text-gray-500">{item.type}</Text>
                    </View>
                  </View>
                  <View>
                    <Text className="text-gray-500">{`Harvest in ${item.harvestIn}`}</Text>
                    <Text className="text-gray-500">{`Planted ${item.planted}`}</Text>
                  </View>
                </View>
              )}
            />
          </>
        );
      case 'LOG':
        return (
          <FlatList
            data={logs}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className={`bg-${item.color}-100 p-4 rounded-lg mb-4`}>
                <Text className={`text-${item.color}-600 font-semibold`}>{item.title}</Text>
                <Text className="text-gray-500">{item.details}</Text>
              </View>
            )}
          />
        );
      case 'SETTINGS':
        return (
          <FlatList
            data={settings}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="flex-row items-center bg-gray-100 p-4 rounded-lg mb-4">
                {/* Image Icon */}
                <Image
                  source={item.icon}
                  style={{ width: 30, height: 25, marginRight: 12 }}
                />
                {/* Setting Text */}
                <View>
                  <Text className="text-gray-500">{item.title}</Text>
                  {item.value !== '' && <Text className="text-green-500">{item.value}</Text>}
                </View>
              </View>
            )}
          />
        );
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 bg-white">
      {/* Garden Overview Section */}
      <View className="mb-6">
        <Image
          source={require('../../assets/icons/Garden.png')}  // Replace with your actual image link
          className="w-full h-40 rounded-lg"
          resizeMode="cover"
        />
        <View className="flex-row justify-between items-center mt-4 p-4 bg-white rounded-lg shadow-lg">
          <View>
            <Text className="text-lg font-bold text-[#0C9359]">Veej’s Garden</Text>
            <Text className="text-gray-500">ID: 1344295024</Text>
          </View>
          <TouchableOpacity onPress={() => { /* Handle garden details navigation */ }}>
            <Ionicons name="chevron-forward" size={24} color="#0C9359" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Tabs Section */}
      <View className="flex-row justify-around mb-6">
        <TouchableOpacity
          className={`px-6 py-2 ${activeTab === 'PLANTS' ? 'bg-green-100 rounded-full' : ''}`}
          onPress={() => setActiveTab('PLANTS')}
        >
          <Text className={`font-semibold ${activeTab === 'PLANTS' ? 'text-green-500' : 'text-gray-500'}`}>PLANTS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`px-6 py-2 ${activeTab === 'LOG' ? 'bg-green-100 rounded-full' : ''}`}
          onPress={() => setActiveTab('LOG')}
        >
          <Text className={`font-semibold ${activeTab === 'LOG' ? 'text-green-500' : 'text-gray-500'}`}>LOG</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`px-6 py-2 ${activeTab === 'SETTINGS' ? 'bg-green-100 rounded-full' : ''}`}
          onPress={() => setActiveTab('SETTINGS')}
        >
          <Text className={`font-semibold ${activeTab === 'SETTINGS' ? 'text-green-500' : 'text-gray-500'}`}>SETTINGS</Text>
        </TouchableOpacity>
      </View>
      {renderContent()}
    </View>
  );
};

export default Plant;
