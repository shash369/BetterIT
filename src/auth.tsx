import { View, Text, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'

export default function AuthScreen() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS=='ios'?"padding":"height"}>

        <View>
            <Text>this is the auth text</Text>
        </View>

    </KeyboardAvoidingView>
  )
}