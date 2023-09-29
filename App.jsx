import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LinearGradient from "react-native-linear-gradient";

import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";
import SideMenuScreen from "./src/screens/SideMenuScreen";
import SeeAllScreen from "./src/screens/SeeAllScreen";
import RecommendedSeeAllScreen from "./src/screens/RecommendedSeeAllScreen";
import FavouriteScreen from "./src/screens/FavouriteScrenn";
import ProfileScreen from "./src/screens/ProfileScreen";



const Stack = createNativeStackNavigator()

const App = () => {
  return (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="RegisterScreen" 
        component={RegisterScreen} options={{headerShown: false}}/>
      <Stack.Screen name="LoginScreen" 
        component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen name="HomeScreen" 
        component={HomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SideMenuScreen" 
        component={SideMenuScreen} options={{headerShown: false}}/>
        <Stack.Screen name="SeeAllScreen" 
        component={SeeAllScreen} options={{headerShown: false}}/>
        <Stack.Screen name="RecommendedSeeAllScreen" 
        component={RecommendedSeeAllScreen} options={{headerShown: false}}/>
        <Stack.Screen name="FavouriteScreen" 
        component={FavouriteScreen} options={{headerShown: false}}/>
        <Stack.Screen name="ProfileScreen" 
        component={ProfileScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App