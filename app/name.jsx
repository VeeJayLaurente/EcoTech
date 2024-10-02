import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';


const name = () => {
  const [inputName, setInputName] = useState('');

  const handleContinue = () => {
    setName(inputName); 
  };

  return (
    <View className="flex-1 justify-center items-center bg-[#0C9359] px-8 py-12 relative">
      <View className="absolute top-[-40px] left-[-250px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-light" />
      <View className="absolute bottom-[-100px] right-[-200px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-light" />
      
      <View className="w-full max-w-md">
        <Text className="text-3xl font-bold text-white mb-2">
          Let's personalize your experience
        </Text>
        <Text className="text-white text-base mb-6">
          What can we call you? Could be your name, a nickname or something funny 🍃.
        </Text>

        <View className="border-b border-white flex-row items-center mb-6">
          <Image 
            source={require('../assets/icons/profile.png')} 
            className="w-5 h-5 mr-2"
          />
          <TextInput
            placeholder="Name"
            placeholderTextColor="#fff"
            className="text-white p-2 flex-1"
            value={inputName}
            onChangeText={setInputName}  
          />
        </View>

        <TouchableOpacity className="bg-white rounded-lg py-3" onPress={handleContinue}>
          <Link href="./sync" className="text-[#0C9359] text-center text-base font-semibold">Continue</Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default name;