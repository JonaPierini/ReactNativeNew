// import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/routes/StackNavigator';
import {DrawerNavigation} from './presentation/routes/DrawerNavigation';
import {BottomTabNavigation} from './presentation/routes/BottomTabNavigation';

export const App = () => {
  return (
    //NAVIGATIONCONTAINER es un PROVIDER
    <NavigationContainer>
      {/* <StackNavigator /> */}
      <DrawerNavigation />
      {/* <BottomTabNavigation/> */}
    </NavigationContainer>
  );
};
