import { Slot, Stack, Tabs } from "expo-router";
import '../../../global.css'
import {House} from 'lucide-react-native'
export default function TabsLayout() {
  // return <Slot />;
  return (
    <Tabs  screenOptions={{headerShown:false,tabBarActiveTintColor:"#89CFF0",tabBarActiveBackgroundColor:"#800020"}}>
      <Tabs.Screen name="index"  options={{title:"Home",tabBarIcon:({color})=><House color={color} strokeWidth={"3"}/>}}></Tabs.Screen>
      <Tabs.Screen name="login"/>
    </Tabs>
  )
}
