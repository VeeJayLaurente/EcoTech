import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { Link } from 'expo-router';
import {FontAwesome} from '@expo/vector-icons'
import FormField from '../../components/FormField';


const name = () => {
  const [form, setForm] = useState({
    name: ''
  });

  const handleContinue = () => {
    setForm(inputName); 
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

        <View className=" w-full items-center mb-5">
          <View className ="absolute top-[20px] left-8">
            <FontAwesome name="user" size={25} color="white"/>
          </View>
          <FormField
            title="Name"
            value ={form.name}
            handleChangeText={(e) => setForm({ ...form, name: e })}
            otherStyles="mt-5"
          />
          
        </View>

        <TouchableOpacity className="bg-white rounded-lg py-3" onPress={handleContinue}>
          <Link href="/EcoMode" className="text-[#0C9359] text-center text-base font-semibold">Continue</Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default name;