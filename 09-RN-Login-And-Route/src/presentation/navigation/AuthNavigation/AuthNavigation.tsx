import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {View, Text} from 'react-native';
import {ProductScreen} from '../../screen/product/ProductScreen';
import {SettingScreen} from '../../screen/setting/SettingScreen';
import {HomeScreen} from '../../screen/home/HomeScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../../screen/login/LoginScreen';
import {RegisterScreen} from '../../screen/register/RegisterScreen';
import {
  StackCardStyleInterpolator,
  createStackNavigator,
} from '@react-navigation/stack';

export type AuthNavigationParams = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

//Este es una animación que sirve para pasar de pantalla en pantalla y que no se ve tan mal
//Es con createStackNavigator y no con createNativeStackNavigator
//Se usa en el Stack.Screen =>options={{cardStyleInterpolator: fadeAnimation}}

//Se puede aplicar de manera global en el Stack.Navigator => //cardStyleInterpolator: fadeAnimation

const fadeAnimation: StackCardStyleInterpolator = ({current}) => {
  return {
    cardStyle: {
      opacity: current.progress,
    },
  };
};

const Stack = createStackNavigator<AuthNavigationParams>();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerShown: false,
        //cardStyleInterpolator: fadeAnimation
      }}>
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="LoginScreen"
        component={LoginScreen}
      />
      <Stack.Screen
        options={{cardStyleInterpolator: fadeAnimation}}
        name="RegisterScreen"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};
