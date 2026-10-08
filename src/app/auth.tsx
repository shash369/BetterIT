import { View, KeyboardAvoidingView, Platform } from 'react-native'
import {Button, Text,TextInput} from 'react-native-paper'
import React from 'react'

export default function AuthScreen() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS=='ios'?"padding":"height"}>

        <View>
            <Text>this is the auth text</Text>


            <TextInput label="Email" autoCapitalize='none' keyboardType='email-address' placeholder='example@gmail.com' mode='outlined' /> 

            <TextInput label="Password" autoCapitalize='none' keyboardType='email-address' mode='outlined' /> 


            <Button mode='contained'>Sign UP</Button>
            <Button mode='text'>Allredy have an account ? Sign in</Button>
        </View>

    </KeyboardAvoidingView>
  )
}