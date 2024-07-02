import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {ProductScreen} from '../../screen/product/ProductScreen';
import {SettingScreen} from '../../screen/setting/SettingScreen';
import {HomeScreen} from '../../screen/home/HomeScreen';
import {ProductNavigation} from '../ProductNavigation/ProductNavigation';

export type RouteNavigationParams = {
  HomeScreen: undefined;
  SettingScreen: undefined;
  ProductNavigation: undefined;
};

const Tab = createBottomTabNavigator<RouteNavigationParams>();

export const RouteNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        unmountOnBlur: true,
        tabBarHideOnKeyboard: true,
        headerShown: false,
      }}>
      <Tab.Screen name={'HomeScreen'} component={HomeScreen} />
      <Tab.Screen
        options={{tabBarLabel: 'Hola'}}
        name={'ProductNavigation'}
        component={ProductNavigation}
      />
      <Tab.Screen name={'SettingScreen'} component={SettingScreen} />
    </Tab.Navigator>
  );
};
