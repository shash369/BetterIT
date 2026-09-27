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

//todo:style to set after the setup
/*
<Tabs
  screenOptions={{
    headerShown: false,

    tabBarActiveTintColor: "#89CFF0",
    tabBarInactiveTintColor: "#ffffff",

    tabBarStyle: {
      position: "absolute",
      bottom: 20,
      left: 20,
      right: 20,

      height: 65,
      borderRadius: 35,

      backgroundColor: "#800020",

      borderTopWidth: 0,

      elevation: 6,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.15,
      shadowRadius: 8,
    },

    tabBarItemStyle: {
      borderRadius: 20,
      alignContent:"center",
      justifyContent:"center",
      marginTop:"auto"
    },
  }}
>
*/
