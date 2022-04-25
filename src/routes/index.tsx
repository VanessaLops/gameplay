import React from 'react';
import { NavigationContainer } from '@react-navigation/native';


import { Home } from '../screens/Home';

const Routes = () => {
  return (
    <NavigationContainer>
      <Home />
    </NavigationContainer>
  );
};

export default Routes;