import React from 'react';
import {ProductScreen} from '../../screen/product/ProductScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProductSelectedScreen} from '../../screen/product/ProductSelectedScreen';

export type ProductNavigationParams = {
  ProductScreen: undefined;
  ProductSelectedScreen: {productId: string};
};

const Stack = createNativeStackNavigator<ProductNavigationParams>();

export const ProductNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="ProductScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen
        name="ProductSelectedScreen"
        component={ProductSelectedScreen}
      />
    </Stack.Navigator>
  );
};
