import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from "../screens/Home";

const { Navigator, Screen } = createStackNavigator();

const AppRoutes = () => {
  return (
    <Navigator
      headerMode="none"
      screenOptions={{
        cardStyle: { backgroundColor: "transparent" },
      }}
    >
      <Screen name="Home" component={Home} />
    </Navigator>
  );
};

export default AppRoutes;
