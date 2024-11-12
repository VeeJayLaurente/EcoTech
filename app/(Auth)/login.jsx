import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';
import { Link, router, useRouter} from 'expo-router';
import FormField from '../../components/FormField';

const login = () => {
  const Router = useRouter();
  const [form, setForm] = useState({
      email: '',
      password: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submit =() =>{}

  return (
    <View className="flex-1 justify-center items-center bg-[#0C9359] p-5">
      <View className="absolute bottom-[-100px] right-[-200px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-light" />
      <View className="absolute top-[-120px] left-[-250px] w-circle-size h-circle-size rounded-circle border-circle border-circle-border-light" />
      <Text className="text-white font-jesus text-4xl mb-6">Welcome back</Text>
      <Text className="text-white font-nestor text-center mb-6 text-base">
        Let’s get back to growing your EcoTech plants, shall we?
      </Text>

      {/* Email Input */}
      <View className = "w-full items-center">
      <View className=" absolute top-5 left-[30px]"> 
        <FontAwesome name ="envelope" size={25} color="white"/>
        </View>
          <FormField
          title ="Email"
          value ={form.email}
          handleChangeText={(e) => setForm({ ...form, email: e })}
          otherStyles="mt-5"
          keyboardType="email-address"
          />
     
      {/* Password Input */}
      <View className="absolute bottom-[65px] left-[35px]">
        <FontAwesome name ="lock" size={30} color="white"/>
        </View>
         <FormField 
         title = "Password"
         value={form.password}
         handleChangeText={(e) => setForm({ ...form, password: e })}
         otherStyles="mt-5"
         />
      
      
      </View>

      {/* Forgot Password */}
      <TouchableOpacity className="w-full mb-4">
        <Text className="text-white text-right">Forgot your password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity className="w-full bg-white py-3 rounded-full mb-4" onPress={() => router.push('EcoMode')}>
        <Text className="text-center text-gray-500 font-semibold text-lg">Login</Text>
      </TouchableOpacity>

      <Text className="text-white mb-4 text-base">Or Login using social media</Text>

      {/* Social Media Login */}
      <View className="flex-row justify-around w-full mb-4">
        <TouchableOpacity className="bg-white rounded-full p-4 flex-row items-center">
          <FontAwesome name="facebook" size={25} color="blue" />
          <Link href="https://www.facebook.com/login" className="ml-2 text-lg">Facebook</Link>
        </TouchableOpacity>
        <TouchableOpacity className="bg-white rounded-full p-4 flex-row items-center">
          <FontAwesome name="google" size={22} color="red" />
          <Link href="https://accounts.google.com/signin" className="ml-2 text-lg">Google</Link>
        </TouchableOpacity>
      </View>

      {/* Register Link */}
      <TouchableOpacity>
        <Link href ="./register" className="text-white text-base">New here? Register</Link>
      </TouchableOpacity>
    </View>
  );
};

export default login;
