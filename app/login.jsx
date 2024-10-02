import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Link } from 'expo-router';

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 justify-center items-center bg-[#0C9359] p-4">
      <View className="absolute bottom-[-100px] right-[-200px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-light" />
      <View className="absolute top-[-40px] left-[-250px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-light" />
      <Text className="text-white font-jesus text-4xl font-semibold mb-6">Welcome back</Text>
      <Text className="text-white font-nestor text-center mb-6">
        Let’s get back to growing your EcoTech plants, shall we?
      </Text>

      {/* Email Input */}
      <View className="w-full mb-4">
        <View className="flex-row items-center bg-white rounded-full px-4 py-2">
          <FontAwesome name="envelope" size={20} color="gray" />
          <TextInput
            className="ml-2 flex-1"
            placeholder="Email"
            placeholderTextColor="gray"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />
        </View>
      </View>

      {/* Password Input */}
      <View className="w-full mb-4">
        <View className="flex-row items-center bg-white rounded-full px-4 py-2">
          <FontAwesome name="lock" size={20} color="gray" />
          <TextInput
            className="ml-2 flex-1"
            placeholder="Password"
            placeholderTextColor="gray"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity>
            <FontAwesome name="eye" size={20} color="gray" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Forgot Password */}
      <TouchableOpacity className="w-full mb-4">
        <Text className="text-white text-right">Forgot your password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity className="w-full bg-white py-3 rounded-full mb-4">
        <Link href ="./sync" className="text-center text-gray-500 font-semibold">Login</Link>
      </TouchableOpacity>

      <Text className="text-white mb-4">Or Login using social media</Text>

      {/* Social Media Login */}
      <View className="flex-row justify-around w-full mb-4">
        <TouchableOpacity className="bg-white rounded-full p-3 flex-row items-center">
          <FontAwesome name="facebook" size={20} color="blue" />
          <Link href="https://www.facebook.com/login" className="ml-2">Facebook</Link>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white rounded-full p-3 flex-row items-center">
          <FontAwesome name="google" size={20} color="red" />
          <Link href="https://accounts.google.com/signin" className="ml-2">Google</Link>
        </TouchableOpacity>
      </View>

      {/* Register Link */}
      <TouchableOpacity>
        <Link href ="./register" className="text-white">New here? Register</Link>
      </TouchableOpacity>
    </View>
  );
};

export default login;
