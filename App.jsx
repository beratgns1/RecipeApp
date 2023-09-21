import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import LinearGradient from "react-native-linear-gradient";

import RegisterScreen from "./src/screens/RegisterScreen";
import LoginScreen from "./src/screens/LoginScreen";
import HomeScreen from "./src/screens/HomeScreen";



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
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default App