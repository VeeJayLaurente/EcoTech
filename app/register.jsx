import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';

const register = () => {
  return (
    <View className="flex-1 justify-center items-center bg-[#0C9359] px-8 py-12 relative">
      {/* Transparent Circle at the top */}
      <View className="absolute top-[-40px] left-[-250px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-light" />

      {/* Registration form */}
      <View className="w-full max-w-md">
        <Text className="text-3xl font-bold text-white mb-2">Register on EcoTech</Text>
        <Text className="text-white text-base mb-6">Create an EcoTech account, We can't wait to have you.</Text>

        {/* Email Input */}
        <View className="border-b border-white mb-4">
          <TextInput
            placeholder="Email Address"
            placeholderTextColor="#fff"
            className="text-white p-2"
            keyboardType="email-address"
          />
        </View>

        {/* Password Input */}
        <View className="border-b border-white mb-6">
          <TextInput
            placeholder="Password"
            placeholderTextColor="#fff"
            className="text-white p-2"
            secureTextEntry
          />
        </View>

        {/* Register Button */}
        <TouchableOpacity className="bg-white rounded-lg py-3">
          <Link href = "./name" 
          className="text-[#0C9359] text-center text-base font-semibold">Register</Link>
        </TouchableOpacity>

        {/* Login Link */}
        <Text className="text-white text-center mt-4">
          Already have an account? <Link href = "./login" className="underline">Login</Link>
        </Text>
      </View>
    </View>
  );
};

export default register;