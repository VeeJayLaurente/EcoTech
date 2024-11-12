import React from 'react'
import { Stack, SplashScreen} from 'expo-router'
import {useFonts} from 'expo-font'
import { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';


SplashScreen.preventAutoHideAsync();

const MainLayout = () => {

  const [fontsLoaded, error] = useFonts({
    "Roboto-Black": require("../assets/fonts/Roboto-Black.ttf"),
    "Roboto-Thin": require("../assets/fonts/Roboto-Thin.ttf"),
    "Roboto-Light": require("../assets/fonts/Roboto-Light.ttf"),
    "impact": require("../assets/fonts/impact.ttf"),
    "BAHNSCHRIFT": require("../assets/fonts/BAHNSCHRIFT.ttf"),
  });
  
  useEffect(() => {
    if (error) throw error;
  
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, error]);
  
  if (!fontsLoaded && !error) {
    return null;
  }
  
  return (
    <>
    <Stack>
      <Stack.Screen 
      name="index" 
      options ={{headerShown: false}}
        />

    <Stack.Screen 
      name="(Auth)" 
      options ={{headerShown: false}}
        />

    <Stack.Screen 
      name="EcoMode" 
      options = {{headerShown: false}}
      />

    <Stack.Screen 
      name="(tabs)" 
      options = {{headerShown: false}}
      />

    <Stack.Screen 
      name="EcoLite" 
      options = {{headerShown: false}}
      /> 

     <Stack.Screen 
      name="LiteTabs" 
      options = {{headerShown: false}}
      /> 

    <Stack.Screen 
      name="ProTabs" 
      options = {{headerShown: false}}
      /> 

    <Stack.Screen 
      name="sync" 
      options = {{headerShown: false}}
      /> 

      </Stack>
      <StatusBar backgroundColor = "white" style="light-content"/>
      </>
  )
}

export default MainLayout