import {NavigationProp, useNavigation} from '@react-navigation/native';
import {Button, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {ProductNavigationParams} from '../../navigation/ProductNavigation/ProductNavigation';
import {StackScreenProps} from '@react-navigation/stack';

const productos = [
  {
    id: '1',
    nombre: 'Producto 1',
    descripcion: 'El Mejor 1',
  },
  {
    id: '2',
    nombre: 'Producto 2',
    descripcion: 'El Mejor 2',
  },
  {
    id: '3',
    nombre: 'Producto 3',
    descripcion: 'El Mejor 3',
  },
];

//StackscreenProps vienen de la libreria => npm install @react-navigation/stack
//ProductNavigationParams es donde esta definida la navegacion. En este caso seria ProductNavigationParams porque ahi tengo al ProductScreen y al ProductSelected
//Como estoy en ProductScreen ese ese el nombre que lleva

//Se puede hacer asi o de la forma => const navigation = useNavigation<NavigationProp<ProductNavigationParams>>();

interface Props
  extends StackScreenProps<ProductNavigationParams, 'ProductScreen'> {}
export const ProductScreen = ({navigation}: Props) => {
  return (
    //Al ponerle un flex 1 abarca toda la pantalla y se ve del color que tengo en el sistema operativo
    <Layout
      style={{
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
      }}>
      <Text category="h4" style={{textAlign: 'center'}}>
        ProductScreen
      </Text>
      {productos.map(elem => (
        <Button
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 30,
            marginBottom: 10,
          }}
          key={elem.id}
          onPress={() =>
            navigation.navigate('ProductSelectedScreen', {
              productId: elem.id,
            })
          }>
          {elem.nombre}
        </Button>
      ))}
      {/* <Button
        onPress={() =>
          navigation.navigate('ProductSelectedScreen', {
            params: '1',
          })
        }>
        Ir al producto seleccionado
      </Button> */}
    </Layout>
  );
};
