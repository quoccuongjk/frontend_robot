import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Login from "../screens/Login";
import Footer from "../components/Footer";

import { navigationRef } from "./RootNavigation";

const Stack = createNativeStackNavigator();
export default function Index() {
  const handleNavigationRef = (ref) => {
    navigationRef.current = ref;
  };
  return (
    <NavigationContainer ref={handleNavigationRef}>
      <Stack.Navigator
        initialRouteName="login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Group>
          <Stack.Screen name="login" component={Login} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="home" component={Home} />
        </Stack.Group>
      </Stack.Navigator>
      <Footer />
    </NavigationContainer>
  );
}
