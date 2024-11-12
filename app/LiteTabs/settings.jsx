import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Link } from 'expo-router';

const Settings = () => {
  return (
    <View className="bg-[#F0F8F5] flex-1 p-6 top-8">
        {/* Go Back Button */}
        <TouchableOpacity className="flex-row items-center bg-white p-3 rounded-full shadow-md w-[30%] ">
          <Ionicons name="chevron-back" size={20} color="#0C9359" />
          <Link href="/EcoLite" className="text-[#0C9359] text-lg font-bold ml-1">
            Go Back
          </Link>
        </TouchableOpacity>

      {/* Header */}
      <View className="flex-row justify-between items-center mb-10 top-5">
        <Text className="text-[#0C9359] text-2xl font-bold">
          Hey, Veej <Ionicons name="leaf" size={24} color="#0C9359" />
        </Text>
        <TouchableOpacity>
          <Ionicons name="pencil" size={24} color="#0C9359" />
        </TouchableOpacity>
      </View>

      {/* Language Option */}
      <TouchableOpacity className="bg-[#F0F9F4] rounded-lg p-4 mb-3 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="language" size={20} color="#0C9359" />
          <Text className="text-black ml-4 font-semibold">Language</Text>
        </View>
        <Text className="text-gray-600 font-semibold">English</Text>
      </TouchableOpacity>

      {/* Currency Option */}
      <TouchableOpacity className="bg-[#F0F9F4] rounded-lg p-4 mb-3 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="cash-outline" size={20} color="#0C9359" />
          <Text className="text-black ml-4 font-semibold">Currency</Text>
        </View>
        <Text className="text-gray-600 font-semibold">USD</Text>
      </TouchableOpacity>

      {/* Temperature Unit Option */}
      <TouchableOpacity className="bg-[#F0F9F4] rounded-lg p-4 mb-3 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="thermometer-outline" size={20} color="#0C9359" />
          <Text className="text-black ml-4 font-semibold">Temperature Unit</Text>
        </View>
        <Text className="text-gray-600 font-semibold">Celsius</Text>
      </TouchableOpacity>

      {/* Sync Settings Option */}
      <TouchableOpacity className="bg-[#F0F9F4] rounded-lg p-4 flex-row justify-between items-center">
        <View className="flex-row items-center">
          <Ionicons name="sync-outline" size={20} color="#0C9359" />
          <Text className="text-black ml-4 font-semibold">Sync Settings</Text>
        </View>
        <Ionicons name="chevron-forward-outline" size={20} color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
