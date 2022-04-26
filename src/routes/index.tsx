import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AppRoutes } from './auth.routes';

import { Home } from '../screens/Home';

const Routes = () => {
  return (
    <NavigationContainer>
      {/* <Home /> */}
      <AppRoutes />
    </NavigationContainer>
  );
};

export default Routes;