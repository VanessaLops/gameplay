import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";

import { theme } from "../global/styles/theme";
import { AppointmentDetails } from "../screens/AppointmentDetails";
import { SignIn } from "../screens/SignIn";


const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <>
      <Stack.Navigator
        // headerMode="none"
        screenOptions={{
          cardStyle: { backgroundColor: theme.colors.secondary100 },
          headerShown: false,
          headerMode: "float"
        }}
      >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="AppointmentDetails" component={AppointmentDetails} />
      </Stack.Navigator>
    </>
  );
}

export default AppRoutes;
