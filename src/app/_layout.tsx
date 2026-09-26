import { Slot, Stack } from "expo-router";
import '../../global.css'
export default function RootLayout() {
  // return <Slot />;
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{headerShown:false}}></Stack.Screen>
    </Stack>
  )
}
