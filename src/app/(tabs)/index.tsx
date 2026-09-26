import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

export default function Index() {
  return (
    <View>
      <Text className="text-xl font-bold text-blue-500">
        Welcome to <Text className="text-red-300">BetterIT</Text> 
      </Text>


      <Pressable onPress={()=>router.push('/login')}>
        <Text>
           go to the login page
        </Text>
      </Pressable>
    </View>
  );
}
