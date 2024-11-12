import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Store = () => {
  return (
    <ScrollView className="bg-[#F0F8F5] flex-1 px-4 top-8">
      {/* Header with Go Back Button */}
      <View className="flex-row justify-between items-center py-4 ">
        {/* Welcome back Text */}
        <Text className="text-[#0C9359] text-xl font-bold">Welcome back!</Text>

        {/* Go Back Button */}
        <TouchableOpacity className="flex-row items-center bg-white p-3 rounded-full shadow-md w-[30%]" style={{ alignSelf: 'flex-end' }}>
          <Ionicons name="chevron-back" size={24} color="#0C9359" />
          <Link href="/EcoLite" className="text-lg font-bold text-[#0C9359] ml-2">
            Go Back
          </Link>
        </TouchableOpacity>
      </View>

      {/* User Info */}
      <View className="flex-row items-center space-x-4 mb-6">
        <Image
          source={{ uri: 'https://cdn3d.iconscout.com/3d/premium/thumb/farmer-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--gardener-agriculture-farming-farm-boy-avatar-pack-people-illustrations-4745159.png?f=webp' }} // Replace with actual user image
          className="w-12 h-12 rounded-full"
        />
        <View>
          <Text className="text-lg font-bold text-[#0C9359]">Veej</Text>
          <Text className="text-sm text-gray-500">Your Balance</Text>
          <Text className="text-lg font-bold text-black">$156,345.37</Text>
        </View>
        <TouchableOpacity className="ml-auto bg-[#0C9359] p-2 rounded-full">
          <Ionicons name="add" size={24} color="#FFF" />
        </TouchableOpacity>
      </View>

      {/* Promo Banner */}
      <View className="bg-[#0C9359] p-4 rounded-2xl mb-6">
        <Text className="text-white text-lg font-bold">Get discount prices up to 50%</Text>
        <Text className="text-white text-sm">Claim vouchers every week and get free shipping</Text>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHisXpd0L1vyKCFgg4guL8NA4UZLuFgb639A&s' }} // Replace with actual image
          className="h-24 w-70 rounded-xl mt-4"
        />
      </View>

      {/* Popular Plants Section */}
      <View className="flex-row justify-between items-center mb-4">
        <Text className="text-lg font-bold text-black">Popular Plants</Text>
        <Link href="/all-plants" className="text-[#0C9359]">See All</Link>
      </View>

      {/* Plant Items */}
      <View className="flex-row justify-between flex-wrap">
        {/* Example Plant Item */}
        <TouchableOpacity className="bg-white p-4 rounded-2xl w-[48%] mb-4">
          <Image
            source={{ uri: 'https://atlas-content-cdn.pixelsquid.com/stock-images/potted-mint-DxVn2q1-600.jpg' }} // Replace with actual plant image
            className="h-24 w-full rounded-xl"
          />
          <Text className="text-lg font-bold text-black mt-2">Exelina</Text>
          <Text className="text-[#0C9359]">$33.33</Text>
        </TouchableOpacity>

        <TouchableOpacity className="bg-white p-4 rounded-2xl w-[48%] mb-4">
          <Image
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqdalAMyU4tyP19e7x20o6xqJdx2yADzyqphXRMLhz1wF8g9opINWb5CbXomJAFN1UFsU&usqp=CAU' }} // Replace with actual plant image
            className="h-24 w-[85%] rounded-xl"
          />
          <Text className="text-lg font-bold text-black mt-2">Carolin</Text>
          <Text className="text-[#0C9359]">$41.15</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Store;
