import { View, Text, TouchableOpacity, Image } from 'react-native';
import React, {useState}from 'react';
import { Link } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import FormField from '../../components/FormField';

const register = () =>{

  const [form, setForm] = useState({
    email: '',
    password: ''
})

  return (
    <View className="flex-1 justify-center items-center bg-[#0C9359] px-8 py-12 relative">
      {/* Transparent Circle at the top */}
      <View className="absolute top-[-40px] left-[-250px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-light" />

      {/* Registration form */}
      <View className="w-full max-w-md">
        <Text className="text-4xl font-jesus text-white mb-2">Register on EcoTech</Text>
        <Text className="text-white text-base font-nestor mb-6">Create an EcoTech account, We can't wait to have you.</Text>

        {/* Email Input */}
        <View className=" mb-4">
        <View className ="absolute top-5 left-[30px]">
        <FontAwesome name ="envelope" size={25} color="white"/>
        </View>
          <FormField 
          title = "Email"
          value = {form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-5"
          keyboardType="email-address"
          >
          </FormField>
        </View>

        {/* Password Input */}
        <View className="mb-6">
        <View className ="absolute bottom-16 left-8">
        <FontAwesome name ="lock" size={30} color="white"/>
        </View>
         <FormField
         title ="Password"
         value = {form.password}
         handleChangeText={(e) => setForm({ ...form, password: e })}
         otherStyles="mt-5"
         >
         </FormField>
        </View>

        {/* Register Button */}
        <TouchableOpacity className="bg-white rounded-lg py-3">
          <Link href = "./name" 
          className="text-[#0C9359] text-center text-base font-semibold">Register</Link>
        </TouchableOpacity>

        {/* Login Link */}
        <Text className="text-white text-center text-base mt-4">
          Already have an account? <Link href = "./login" className="underline">Login</Link>
        </Text>
      </View>
    </View>
  );
};
export default register;
