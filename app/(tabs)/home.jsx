
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Modal, Alert } from 'react-native';
import {Link} from 'expo-router'
import { Ionicons, FontAwesome} from '@expo/vector-icons'; 


const Home = () => {
  const [lightStatus, setLightStatus] = useState('On'); // Light status state
  const [isModalVisible, setModalVisible] = useState(false); // Modal visibility state


  const showTutorial = () => {
    Alert.alert(
      "Dashboard Tutorial",
      "Welcome to the dashboard! \n\n- Use the 'Plant Stat' feature to analyze your plant's health. \n- Check real-time plant data on soil moisture, temperature, and more.\n- Use the sidebar for quick navigation to different sections for your EcoHub and EcoStore.",
      [{ text: "Got it!" }]
    );
  };

  // Function to toggle the light status
  const toggleLightStatus = () => {
    setLightStatus((prevStatus) => (prevStatus === 'On' ? 'Off' : 'On'));
  };

  return (
    <View className="flex-1 bg-[#F0F8F5] px-4 py-8 top-5">

      {/* Header Section */}
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-2xl font-bold text-[#0C9359]">Hello, Veej🌿</Text>
        <Link href ="/ProTabs/Ecohub">
          <Ionicons name="settings" size={24} color="#0C9359" />
        </Link>
      </View>

      {/* Garden Overview Section */}
      <View className="mb-6">
        <Image
          source={require("../../assets/icons/Garden.png")}
          className="w-full h-40 rounded-lg"
          resizeMode="cover"
        />
        <View className="flex-row justify-between items-center mt-4 p-4 bg-white rounded-lg shadow-lg">
          <View>
            <Text className="text-lg font-bold text-[#0C9359]">Veej’s Garden</Text>
            <Text className="text-gray-500">ID: 1344295024</Text>
          </View>
        </View>
      </View>

      {/* Status Cards */}
      <ScrollView>
        <View className="flex-wrap flex-row justify-between">
          {/* Humidity */}
          <TouchableOpacity
            className="w-[48%] bg-white p-4 rounded-lg shadow-lg mb-4">
            <Text className="text-sm text-gray-500">Humidity</Text>
            <Text className="text-lg font-bold text-[#0C9359]">74%</Text>
          </TouchableOpacity>

          {/* Temperature */}
          <TouchableOpacity
            className="w-[48%] bg-white p-4 rounded-lg shadow-lg mb-4">
            <Text className="text-sm text-gray-500">Temperature</Text>
            <Text className="text-lg font-bold text-[#0C9359]">23ºC</Text>
          </TouchableOpacity>

          {/* Water Level */}
          <TouchableOpacity
            className="w-[48%] bg-white p-4 rounded-lg shadow-lg mb-4">
            <Text className="text-sm text-gray-500">Water Level</Text>
            <Text className="text-lg font-bold text-[#0C9359]">85%</Text>
          </TouchableOpacity>

          {/* Connectivity */}
          <TouchableOpacity
            className="w-[48%] bg-white p-4 rounded-lg shadow-lg mb-4">
            <Text className="text-sm text-gray-500">Connectivity</Text>
            <Text className="text-lg font-bold text-[#0C9359]">Online</Text>
          </TouchableOpacity>

          {/* Nutrient Level */}
          <TouchableOpacity
            className="w-[48%] bg-white p-4 rounded-lg shadow-lg mb-4">
            <Text className="text-sm text-gray-500">Nutrient Level</Text>
            <Text className="text-lg font-bold text-[#0C9359]">5 grams left</Text>
            <Text className="text-xs text-gray-500">Refill Plant Pod in 2 days</Text>
          </TouchableOpacity>

          {/* Status */}
          <TouchableOpacity
            className="w-[48%] bg-white p-4 rounded-lg shadow-lg mb-4">
            <Text className="text-sm text-gray-500">Status</Text>
            <Text className="text-lg font-bold text-[#0C9359]">4 plants growing</Text>
            <Text className="text-xs text-gray-500">Expected harvest in 3 days</Text>
          </TouchableOpacity>

          {/* Light Status */}
          <TouchableOpacity
            className="w-[48%] bg-white p-4 rounded-lg shadow-lg mb-4"
            onPress={() => setModalVisible(true)}>
            <Text className="text-sm text-gray-500">Light Status</Text>
            <Text className="text-lg font-bold text-[#0C9359]">{lightStatus}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Modal for Light Status */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-6 rounded-lg shadow-lg w-[80%]">
            <Text className="text-lg font-bold text-[#0C9359] mb-4">Light Control</Text>
            <Text className="text-sm text-gray-500 mb-6">
              Current Light Status: <Text className="font-bold">{lightStatus}</Text>
            </Text>

            <TouchableOpacity
              className="bg-[#0C9359] p-4 rounded-lg mb-4"
              onPress={() => {
                toggleLightStatus();
                setModalVisible(false); // Close the modal after toggling
              }}
            >
              <Text className="text-white text-center font-bold">
                {lightStatus === 'On' ? 'Turn Off' : 'Turn On'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-gray-200 p-4 rounded-lg"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-center text-gray-500">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        {/* Floating Info Icon */}
        <TouchableOpacity
        className ='absolute bottom-10 right-5 bg-[#0C9359] p-4 rounded-full'
        onPress={showTutorial}
      >
        <FontAwesome name="info-circle" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default Home;
