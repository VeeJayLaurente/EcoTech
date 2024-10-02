import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Ecohub = () => {
  const [credentials, setCredentials] = useState({
    email: 'veej@example.com',
    username: 'Veej',
    id: '12345',
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [newCredentials, setNewCredentials] = useState({ ...credentials });

  const handleSave = () => {
    setCredentials(newCredentials);
    setModalVisible(false);
  };

  return (
    <View className="flex-1 bg-[#E6FAF0] p-5">
      {/* Header */}
      <View className="mb-5">
        <Text className="text-3xl font-bold">EcoHub 🌿</Text>
        <TouchableOpacity className="absolute top-0 right-0">
          <Link href="/profile">
            <Ionicons name="chevron-back" size={24} color="green" />
          </Link>
        </TouchableOpacity>
      </View>

      {/* Credentials */}
      <View className="bg-white p-5 rounded-lg shadow-md mb-5">
        <View className="mb-4">
          <Text className="text-lg font-bold">Email Address</Text>
          <Text className="text-gray-500">{credentials.email}</Text>
        </View>

        <View className="mb-4">
          <Text className="text-lg font-bold">Username</Text>
          <Text className="text-gray-500">{credentials.username}</Text>
        </View>

        <View className="mb-4">
          <Text className="text-lg font-bold">I.D</Text>
          <Text className="text-gray-500">{credentials.id}</Text>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity
        className="bg-green-600 p-3 rounded-lg shadow-md"
        onPress={() => setModalVisible(true)}
      >
        <Text className="text-white text-center text-lg">Edit Profile</Text>
      </TouchableOpacity>

      {/* Edit Profile Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View className="flex-1 justify-center items-center bg-black bg-opacity-50">
          <View className="bg-white p-5 rounded-lg w-[90%]">
            <Text className="text-2xl mb-4 font-bold">Edit Profile</Text>

            <TextInput
              className="border-b border-gray-300 mb-4 p-2"
              placeholder="Username"
              value={newCredentials.username}
              onChangeText={(text) => setNewCredentials({ ...newCredentials, username: text })}
            />

            <TouchableOpacity
              className="bg-green-600 p-3 rounded-lg mb-2"
              onPress={handleSave}
            >
              <Text className="text-white text-center">Save Changes</Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="bg-red-600 p-3 rounded-lg"
              onPress={() => setModalVisible(false)}
            >
              <Text className="text-white text-center">Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Ecohub;
