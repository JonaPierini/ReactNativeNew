import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {RouteNavigation} from '../RouteNavigation/RouteNavigation';
import {AuthNavigation} from '../AuthNavigation/AuthNavigation';
import {StackCardStyleInterpolator} from '@react-navigation/stack';
import {useAuthStore} from '../../../store/auth/useAuthStore';

export type RootStackParams = {
  //Los nombres tienen que coicidir con los pasados en el Stack.Screen name
  AuthNavigation: undefined;
  RouteNavigation: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

export const AppNavigation = () => {
  //USEAMOS el store
  const {status} = useAuthStore();
  console.log(status);

  return status === 'unAuthorized' ? (
    <Stack.Navigator
      initialRouteName="AuthNavigation"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="AuthNavigation" component={AuthNavigation} />
    </Stack.Navigator>
  ) : (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="RouteNavigation" component={RouteNavigation} />
    </Stack.Navigator>
  );
};
