import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { router } from 'expo-router'

export default function index() {
  return (
    <View>
      <Text>index from the src/app</Text>


      <Pressable onPress={()=>router.push('/(tabs)')}>
        <Text className='text-violet-500 border-4 border-red-200'> go to the tabs section</Text>
      </Pressable>
    </View>
  )
}