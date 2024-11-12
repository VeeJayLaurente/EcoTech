import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Hub = () => {
  return (
    <View className="bg-[#F0F8F5] flex-1 p-4 top-8">
      {/* Top Header */}
      <View className="flex-row justify-between items-center mb-4">
        
        {/* Go Back Button */}
        <TouchableOpacity className="flex-row items-center bg-white p-3 rounded-full shadow-md w-[30%]">
          <Ionicons name="chevron-back" size={20} color="#0C9359" />
          <Link href="/EcoLite" className="text-[#0C9359] text-lg font-bold ml-1">
            Go Back
          </Link>
        </TouchableOpacity>

        {/* Profile Logo */}
        <View className="flex-1 items-center">
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEgE5f6R39fRCffIy2Rq2F64E47zSyaYyKl0UNDi3avIdbOLkZEWrgHLCGPzhMwXsW_0Y&usqp=CAU' }} // Replace with actual profile image
              className="w-12 h-12 rounded-full"
            />
          </TouchableOpacity>
        </View>

        {/* Settings Button */}
        <TouchableOpacity className="flex-row items-center bg-white p-3 rounded-full shadow-md">
          <Link href="/LiteTabs/settings" className="text-[#0C9359] text-lg font-bold ml-1">
            <Ionicons name="settings" size={20} color="#0C9359" />
          </Link>
        </TouchableOpacity>
      </View>

      {/* General Info Section */}
      <View className="border border-[#0C9359] rounded-lg p-4 mb-4">
        <Text className="text-[#0C9359] text-lg font-bold mb-2">General Info</Text>
        
        {/* Gender */}
        <View className="flex-row justify-between">
          <Text className="text-black font-semibold">Username</Text>
          <Text className="text-gray-600 font-semibold">Veej</Text>
        </View>

        {/* DOB */}
        <View className="flex-row justify-between mt-2">
          <Text className="text-black font-semibold">I.D</Text>
          <Text className="text-gray-600 font-semibold">12901883</Text>
        </View>

        {/* Preferred Language */}
        <View className="flex-row justify-between mt-2">
          <Text className="text-black font-semibold">GitHub</Text>
          <Text className="text-gray-600 font-semibold">https://github.com/VeeJayLaurente</Text>
        </View>
      </View>

      {/* Contact Info Section */}
      <View className="border border-[#0C9359] rounded-lg p-4">
        <Text className="text-[#0C9359] text-lg font-bold mb-2">Contact Info</Text>
        
        {/* Phone */}
        <View className="flex-row justify-between">
          <Text className="text-black font-semibold">Phone</Text>
          <Text className="text-gray-600 font-semibold">09565378644</Text>
        </View>

        {/* Emergency Contact */}
        <View className="flex-row justify-between mt-2">
          <Text className="text-black font-semibold">Emergency Contact</Text>
          <Text className="text-gray-600 font-semibold">(480) 555-0103</Text>
        </View>

        {/* Email Address */}
        <View className="flex-row justify-between mt-2">
          <Text className="text-black font-semibold">Email Address</Text>
          <Text className="text-gray-600 font-semibold">veejaylaurente@gmail.com</Text>
        </View>

        {/* Mailing Address */}
        <View className="flex-row justify-between mt-2">
          <Text className="text-black font-semibold">Mailing Address</Text>
          <Text className="text-gray-600 font-semibold">
            Toledo City, Cebu
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Hub;
