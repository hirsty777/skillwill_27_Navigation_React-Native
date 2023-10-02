import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View  } from 'react-native'
import Chats from "./screen/Chats"
import Status from "./screen/Status"
import Calls from "./screen/Calls"
import Group from "./screen/Group"
import Settings from './components/Settings';
import Camera from './components/Camera';
import { MaterialIcons } from '@expo/vector-icons';


const colorPropertyes = {
  "tabBarActiveTintColor": "#FFFFFF",
  "tabBarInactiveTintColor": "#FFFFFF87",
  "tabBarIndicatorStyle": {
    "backgroundColor": "#FFFFFF"
  },
  "tabBarStyle": {
    "backgroundColor": "#128C7E",
  }
}

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const Navigator = () => {
    return(
        <Tab.Navigator initialRouteName='Chats' >
            <Tab.Screen name="Group" component={Group} options={{...colorPropertyes,
              tabBarShowLabel:false,
              tabBarIcon:({focused}) => (
                <MaterialIcons name="groups"  size={24} color={focused ? "#FFFFFF" : "#FFFFFF87"} />
              )
            }}/>
            <Tab.Screen name="Chats" component={Chats}  options={colorPropertyes} />
            <Tab.Screen name="Status" component={Status} options={colorPropertyes}/>
            <Tab.Screen name="Calls" component={Calls} options={colorPropertyes}/>
        </Tab.Navigator>

    )
}

const StakNavigator = () => {
  return(
    <Stack.Navigator screenOptions={{headerSearchBarOptions:false,headerTransparent:true}}>
      <Stack.Screen name="MainPage" component={Navigator} options={{headerShown:false}}/>
      <Stack.Screen name="Settings" component={Settings} />
      <Stack.Screen name="Camera" component={Camera} />
    </Stack.Navigator>
  )
}


export default StakNavigator