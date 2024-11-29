import React, { useState, useCallback } from 'react';
import { Image, View, Text, ActivityIndicator, Alert, TouchableOpacity, ScrollView, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons'; // Icon library for the hamburger and close icons
import { Link } from 'expo-router';
import { useFocusEffect } from '@react-navigation/native'; // Ensures cleanup/reset when navigating

const PlantHealthAnalyzer = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
 // State to control the sidebar

  // Reset state when returning to this screen
  useFocusEffect(
    useCallback(() => {
      setSelectedImage(null);
      setAnalysisResult(null);
      setIsSidebarOpen(false); // Close sidebar when returning to the screen

      return () => {
        // Optionally handle cleanup if needed when leaving the page
        setIsSidebarOpen(false); // Make sure the sidebar is closed when unmounting
      };
    }, [])
  );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled && result.assets && result.assets.length > 0) {
      const imageUri = result.assets[0].uri;
      setSelectedImage(imageUri);
      setAnalysisResult(null);
      setLoading(true);

      try {
        const analysis = await analyzePlantHealth(imageUri);
        setAnalysisResult(analysis);
      } catch (error) {
        Alert.alert("Error", "Failed to analyze plant health. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      Alert.alert("Cancelled", "Image selection was cancelled.");
    }
  };

  const analyzePlantHealth = async (imageUri) => {
    const base64Image = await FileSystem.readAsStringAsync(imageUri, { encoding: 'base64' });
    const apiUrl = 'https://plant.id/api/v3/identification';
    const apiKey = 'jtmC7sOVd9R2Kw9QL6XnoeId3k6col6GM8oOB3UhGfQJnOCZoh';

    try {
      const response = await axios.post(apiUrl, {
        api_key: apiKey,
        images: [`data:image/jpeg;base64,${base64Image}`],
        health: "all",
      });

      const result = response.data.result;

      if (!result.classification.suggestions || result.classification.suggestions.length === 0) {
        throw new Error("No plant detected in the image.");
      }

      return response.data;
    } catch (error) {
      console.error("Error analyzing plant:", error);
      Alert.alert("Error", "No plant detected or analysis failed. Please try again with a valid plant image.");
      return null;
    }
  };

  return (
    <View className="flex-1 bg-[#0C9359] p-5 top-5">
      {/* Sidebar icon to toggle the sidebar */}
      <TouchableOpacity 
        className="absolute top-10 right-5" 
        onPress={() => setIsSidebarOpen(true)}
      >
        <FontAwesome name="bars" size={24} color="white" />
      </TouchableOpacity>

      <View className="flex-1">
        <View className="absolute top-1 right-6 w-full items-center">
          <TouchableOpacity
            onPress={pickImage}
            className="bg-white py-4 px-6 rounded-full"
            activeOpacity={0.7}
          >
            <Text className="text-[#0C9359] text-lg font-bold text-center">
              Pick an image of your plant
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      {selectedImage && (
        <View className="absolute top-[15%] w-full items-center">
          <Image source={{ uri: selectedImage }} className="w-[250px] h-[180px] my-5 rounded-xl" />
        </View>
      )}

      {loading && <ActivityIndicator size="large" color="#00ff00" />}

      {analysisResult && (
        <ScrollView className="mt-72">
          {/* Plant Name Section */}
          <TouchableOpacity className="bg-white p-5 rounded-lg mb-4">
            <Text className="text-lg font-bold text-[#0C9359] mb-2">Identified Plant:</Text>
            {analysisResult.result.classification.suggestions.map((suggestion, index) => (
              <Text key={index} className="text-base text-gray-800 mb-2">
                {suggestion.name} (Probability: {(suggestion.probability * 100).toFixed(2)}%)
              </Text>
            ))}
          </TouchableOpacity>

          {/* Health Status Section */}
          <TouchableOpacity className="bg-white p-5 rounded-lg mb-4">
            <Text className="text-lg font-bold text-[#0C9359] mb-2">Plant Health Status:</Text>
            <Text className="text-base text-gray-800 mb-2">
              {analysisResult.result.is_healthy.binary ? 'Healthy' : 'Unhealthy'}
            </Text>
            <Text className="text-base text-gray-800 mb-2">
              Health Probability: {(analysisResult.result.is_healthy.probability * 100).toFixed(2)}%
            </Text>
          </TouchableOpacity>

          {/* Potential Issues Section */}
          <TouchableOpacity className="bg-white p-5 rounded-lg mb-4">
            <Text className="text-lg font-bold text-[#0C9359] mb-2">Potential Issues:</Text>
            {analysisResult.result.disease.suggestions.map((issue, index) => (
              <Text key={index} className="text-base text-gray-800 mb-2">
                {issue.name} (Probability: {(issue.probability * 100).toFixed(2)}%)
              </Text>
            ))}
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* Sidebar Modal */}
      <Modal
        visible={isSidebarOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsSidebarOpen(false)}
      >
        <View className="flex-1 bg-white">
          <View className="w-[150px] bg-[#F0F8F5] h-full p-5"> 
            <TouchableOpacity onPress={() => setIsSidebarOpen(false)}>
              <FontAwesome name="close" size={24} color="forestgreen" />
            </TouchableOpacity>
            <Text className="text-xl font-jesus mt-5 text-black">EcoLite</Text>

            {/* Sidebar Menu Items */}
            <TouchableOpacity>
              <Link href="/LiteTabs/Hub" className="mt-5">
              <Text className="text-green-700 text-base font-semibold">EcoHub</Text>
              </Link>
            </TouchableOpacity>

            <TouchableOpacity>
              <Link href = "/LiteTabs/store" className="mt-5">
              <Text className="text-green-700 text-base font-semibold" >EcoStore</Text>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link href = "/LiteTabs/settings" className="mt-5">
              <Text className="text-green-700 text-base font-semibold">Settings</Text>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link href = "/login" className="mt-5">
              <Text className="text-green-700 text-base font-semibold">Log Out</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default PlantHealthAnalyzer;
