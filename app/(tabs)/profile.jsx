import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Linking } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Profile = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedSetting, setSelectedSetting] = useState('');
  const [selectedValue, setSelectedValue] = useState({
    Language: 'English',
    Currency: 'USD',
    'Temperature Unit': 'Celsius',
  });

  const openSetting = (setting) => {
    setSelectedSetting(setting);
    setModalVisible(true);
  };

  const handleSelection = (option) => {
    setSelectedValue((prev) => ({ ...prev, [selectedSetting]: option }));
    setModalVisible(false);
  };

  const options = {
    Language: ['English', 'Spanish', 'French', 'German'],
    Currency: ['USD', 'EUR', 'GBP', 'PHP'],
    'Temperature Unit': ['Celsius', 'Fahrenheit'],
    'Sync Settings': ['Google', 'GitHub'], // Add Sync Settings options
  };

  const handleLinking = (option) => {
    // Open official links for Google or GitHub
    if (option === 'Google') {
      Linking.openURL('https://www.google.com');
    } else if (option === 'GitHub') {
      Linking.openURL('https://www.github.com');
    }
    setModalVisible(false);
  };

  return (
    <View className="flex-1 bg-[#E6FAF0] p-5">
      {/* Profile Header */}
      <View className="mb-5">
        <Text className="text-3xl font-bold">Hey, Veej 🌱</Text>
        <TouchableOpacity className="absolute top-0 right-0">
          <Link href = "/Ecohub">
          <Ionicons name="create-outline" size={30} color="green" />
          </Link>
        </TouchableOpacity>
      </View>

      {/* Store Button */}
      <TouchableOpacity
        className="bg-white p-5 rounded-lg mb-5 shadow-md flex-row justify-between items-center"
      >
        <View>
          <Link href="/shop" className="text-lg font-bold">
            Visit the EcoStore 🛒
          </Link>
          <Link href="/shop" className="text-sm text-gray-500">
            Buy attachments and supplements for your EcoTech. Orders typically arrive in 3 working days.
          </Link>
        </View>
        <MaterialIcons name="arrow-forward-ios" size={24} color="gray" />
      </TouchableOpacity>

      {/* Settings List */}
      <View className="bg-white p-5 rounded-lg shadow-md">
        <TouchableOpacity
          className="flex-row justify-between items-center mb-3"
          onPress={() => openSetting('Language')}
        >
          <Text className="text-lg">Language</Text>
          <Text className="text-sm text-gray-500">{selectedValue.Language}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row justify-between items-center mb-3"
          onPress={() => openSetting('Currency')}
        >
          <Text className="text-lg">Currency</Text>
          <Text className="text-sm text-gray-500">{selectedValue.Currency}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row justify-between items-center mb-3"
          onPress={() => openSetting('Temperature Unit')}
        >
          <Text className="text-lg">Temperature Unit</Text>
          <Text className="text-sm text-gray-500">{selectedValue['Temperature Unit']}</Text>
        </TouchableOpacity>

        {/* Sync Settings */}
        <TouchableOpacity
          className="flex-row justify-between items-center mb-3"
          onPress={() => openSetting('Sync Settings')}
        >
          <Text className="text-lg">Sync Settings</Text>
        </TouchableOpacity>

        <Link href="/login" className="flex-row justify-between items-center mb-3">
          <Text className="text-lg">Log Out</Text>
        </Link>
      </View>

      {/* Modal for settings */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-5 rounded-lg w-[90%]">
            <Text className="text-2xl mb-4 font-bold">{selectedSetting}</Text>

            {/* Check if options[selectedSetting] exists */}
            {options[selectedSetting] ? (
              options[selectedSetting].map((option, index) => (
                <TouchableOpacity
                  key={index}
                  className="p-3 bg-gray-100 mb-2 rounded-lg"
                  onPress={() =>
                    selectedSetting === 'Sync Settings'
                      ? handleLinking(option)
                      : handleSelection(option)
                  }
                >
                  <Text className="text-lg">{option}</Text>
                </TouchableOpacity>
              ))
            ) : (
              <Text className="text-lg text-red-500">No options available</Text>
            )}

            <TouchableOpacity
              className="bg-green-600 p-3 rounded-lg"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-white text-center">Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Profile;
