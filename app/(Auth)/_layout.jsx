import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layout = () => {
  return (
        <Stack>
            
        <Stack.Screen 
      name="name" 
      options = {{headerShown: false}}
      />

        <Stack.Screen 
      name="login" 
      options = {{headerShown: false}}
      />

        <Stack.Screen 
      name="register" 
      options = {{headerShown: false}}
      />

        </Stack>
  )
}

export default _layout