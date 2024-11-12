import { View, Text } from 'react-native'
import React from 'react'
import {Stack} from 'expo-router'

const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name = "Hub" options ={{headerShown: false}}/>
      <Stack.Screen name = "settings" options ={{headerShown: false}}/>
      <Stack.Screen name = "store" options ={{headerShown: false}}/>
    </Stack>
  )
}

export default _layout