import { Slot, Stack, Tabs } from "expo-router";
import '../../../global.css'
export default function TabsLayout() {
  // return <Slot />;
  return (
    <Tabs  screenOptions={{headerShown:false}}>
      <Tabs.Screen name="index"  options={{title:"Home"}}></Tabs.Screen>
      <Tabs.Screen name="login"/>
    </Tabs>
  )
}
