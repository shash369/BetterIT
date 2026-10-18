import {
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import React, { useState } from 'react';
import { UseAuth } from '../../lib/auth-context';
import { router, useRoute } from 'expo-router';

export default function AuthScreen() {
  const [isSignUP, setIsSignUp] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const route=useRoute();

  // const [error,setError]=useState<boolean>(false);
  // const [errorMessage,setErrorMessage]=useState<string>();

  const [error, setError] = useState<string | null>(null);


  const {signIn,signUp}=UseAuth();

  const handleSwitchMode = () => {
    setIsSignUp((prev) => !prev);
  };


  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

    const handleAuth = async () => {
      const normalizedEmail = email.trim();

      if (!normalizedEmail || !password) {
        setError("All fields are required");
        return;
      }

      if (!isValidEmail(normalizedEmail)) {
        setError("Please enter a valid email address");
        return;
      }

      if (isSignUP && password.length < 8) {
        setError("Password must be at least 8 characters long");
        return;
      }

      setError(null);

      const authError = isSignUP?await signUp(normalizedEmail, password):await signIn(normalizedEmail, password);

      if (authError !== null) {
        setError(authError);
        return;
      }

      router.replace("/");
    };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      className="flex-1 bg-[#F0F8FF]"
    >
      <ScrollView
        contentContainerClassName="flex-grow justify-center px-6 py-10"
        keyboardShouldPersistTaps="handled"
        className='bg-violet-200'
      >
        <View className="w-full max-w-md self-center rounded-3xl bg-white p-6 shadow-lg">

          {/* Header */}
          <View className="mb-8 items-center">

            <Text
              variant="headlineMedium"
              className="text-center font-bold text-[#800020]"
            >
              {isSignUP ? 'Create Account' : 'Welcome Back'}
            </Text>

            <Text
              variant="bodyMedium"
              className="mt-2 text-center text-gray-500"
            >
              {isSignUP
                ? 'Create an account to get started'
                : 'Sign in to continue to your account'}
            </Text>
          </View>

          {/* Input Fields */}
          <View className="gap-4">
            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholder="example@gmail.com"
              mode="outlined"
              outlineColor="#B8DFF5"
              activeOutlineColor="#800020"
              // left={<TextInput.Icon icon="email-outline" />}
              style={{ backgroundColor: '#FFFFFF' }}
            />

            <TextInput
              label="Password"
              value={password}
              onChangeText={setPassword}
              autoCapitalize="none"
              secureTextEntry
              mode="outlined"
              outlineColor="#B8DFF5"
              activeOutlineColor="#800020"
              // left={<TextInput.Icon icon="lock-outline" />}
              style={{ backgroundColor: '#FFFFFF' }}
            />

            {/* Main Button */}

            {error!=null && (<Text
                variant="bodyMedium"
                style={{
                  color: "red",
                  textAlign: "center",
                  marginTop: 8,
                }}>
                  {error}
                </Text>
            )}
            
            <Button
              mode="contained"
              onPress={handleAuth}
              buttonColor="#800020"
              textColor="#FFFFFF"
              contentStyle={{ height: 50 }}
              labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
              style={{ marginTop: 12, borderRadius: 14 }}
            >
              {isSignUP ? 'Create Account' : 'Sign In'}
            </Button>
          </View>

          {/* Switch Authentication Mode */}
          <View className="mt-6 items-center">
            <Text variant="bodyMedium" className="text-center text-gray-500">
              {isSignUP
                ? 'Already have an account?'
                : "Don't have an account?"}
            </Text>

            <Button
              mode="text"
              onPress={handleSwitchMode}
              textColor="#800020"
              labelStyle={{ fontWeight: 'bold' }}
            >
              {isSignUP ? 'Sign In' : 'Sign Up'}
            </Button>
          </View>

          {/* Footer Accent */}
          <View className="mt-4 h-1 w-16 self-center rounded-full bg-[#B8DFF5]" />

        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
