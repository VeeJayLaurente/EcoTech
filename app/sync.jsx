import { View, Text, TouchableOpacity, ScrollView, LayoutAnimation, UIManager, Platform } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons'; 
import { Link } from 'expo-router';

// Enable LayoutAnimation for Android (it works automatically on iOS)
if (Platform.OS === 'android') {
  UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Sync = () => {
  // State to track if pods are synced
  const [pods, setPods] = useState([
    { id: 1, name: 'Upstairs Pod', isSynced: false, podID: 1344295024 },
    { id: 2, name: 'Porch Pod', isSynced: false, podID: 1344295024 },
    { id: 3, name: 'Sync new EcoTech', podID: null },  // New pod, not synced yet
  ]);

  // Function to handle sync toggle
  const handleSyncToggle = (index) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const updatedPods = pods.map((pod, i) => 
      i === index ? { ...pod, isSynced: !pod.isSynced } : pod
    );
    setPods(updatedPods);
  };

  return (
    <View className="flex-1 justify-between bg-[#0C9359] px-6 py-12">
      
      {/* Title Section */}
      <View className="mb-6">
        <Text className="text-3xl font-bold text-white mb-2">
          Let’s set you up
        </Text>
        <Text className="text-white text-base mb-6">
          Sync your EcoTechs with the app for added functionality
        </Text>
      </View>

      {/* Scrollable List of Pods */}
      <ScrollView className="flex-1">
        {pods.map((pod, index) => (
          <View 
            key={pod.id} 
            className="flex-row items-center justify-between bg-[#ffffff66] rounded-lg p-4 mb-4"
          >
            <View>
              <Text className="text-white text-lg font-bold">{pod.name}</Text>
              {pod.podID && <Text className="text-white text-sm">ID: {pod.podID}</Text>}
            </View>

            <TouchableOpacity 
              className="p-2 rounded-full bg-white"
              onPress={() => handleSyncToggle(index)}
            >
              {pod.isSynced ? (
                <Text className="text-[#0C9359] font-base">Synced</Text>
              ) : (
                <Ionicons name="add" size={24} color="#0C9359" />
              )}
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Continue Button */}
      <TouchableOpacity className="bg-white rounded-lg py-3 mt-6">
        <Link href ="/home" className="text-[#0C9359] text-center text-base font-semibold">
          Continue
        </Link>
      </TouchableOpacity>
    </View>
  );
};

export default Sync;