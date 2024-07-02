import {RouteProp, useRoute} from '@react-navigation/native';
import {Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {ProductNavigationParams} from '../../navigation/ProductNavigation/ProductNavigation';

export const ProductSelectedScreen = () => {
  const params =
    useRoute<RouteProp<ProductNavigationParams, 'ProductSelectedScreen'>>()
      .params;
  console.log(params);
  return (
    //Al ponerle un flex 1 abarca toda la pantalla y se ve del color que tengo en el sistema operativo
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Text category="h6" style={{textAlign: 'center'}}>
        ProductSelectedScreen - {params.productId}
      </Text>
    </Layout>
  );
};
