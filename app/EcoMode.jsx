import React from 'react';
import { View, Text, Switch, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {router} from 'expo-router'

const EcoMode = () => {
  const navigation = useNavigation();

  const handleEcoProSwitch = (value) => {
    if (value){
      router.push ('sync');
    }
  }
  const handleEcoLiteSwitch = (value) => {
    if (value) {
      navigation.navigate('EcoLite'); // Navigate to EcoLite page
    }
  };

  return (
    <View className="flex-1 items-center justify-start bg-[#0C9359] p-5">
      {/* EcoTech Logo and Name */}
      <View className="items-center my-5">
        <Image
          source={require('../assets/icons/GrayLogo.png')}
          style={{ width: 240, height: 200 }}
        />
      </View>

      {/* Header */}
      <Text className="text-2xl font-bold mb-8 text-center text-white">
        Which Mode will you be using today, Veej?
      </Text>

      {/* EcoPro Mode Switch */}
      <View className="flex-row items-center bg-white p-4 rounded-lg mb-6 w-[80%] shadow-md">
        <View className="flex-1">
          <Text className="text-xl text-[#0C9359] font-bold">EcoPro</Text>
        </View>
        <Switch
          trackColor={{ false: '#D3D3D3', true: '#B8E994' }}
          thumbColor={'#0C9359'}
          onValueChange={handleEcoProSwitch}
        />
      </View>

      {/* EcoLite Mode Switch */}
      <View className="flex-row items-center bg-white p-4 rounded-lg w-[80%] shadow-md">
        <View className="flex-1">
          <Text className="text-xl text-[#0C9359] font-bold">EcoLite</Text>
        </View>
        <Switch
          trackColor={{ false: '#0C9359', true: '#D3D3D3' }}
          thumbColor={'#D3D3D3'}
          onValueChange={handleEcoLiteSwitch}
        />
      </View>
    </View>
  );
};

export default EcoMode;
