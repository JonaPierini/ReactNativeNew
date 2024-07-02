import React from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {FlatList} from 'react-native-gesture-handler';
import {PrimaryButton} from '../../components/PrimaryButton';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../../../App';

export type ProductsType = {
  id: number;
  name: string;
};

const products: ProductsType[] = [
  {id: 1, name: 'Producto 1'},
  {id: 2, name: 'Producto 2'},
  {id: 3, name: 'Producto 3'},
  {id: 4, name: 'Producto 4'},
  {id: 5, name: 'Producto 5'},
  {id: 6, name: 'Producto 6'},
];

export const ProductsScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  return (
    <View style={globalStyles.container}>
      <Text style={{marginBottom: 10, fontSize: 20}}>Productos</Text>

      <FlatList
        data={products}
        renderItem={data => (
          <PrimaryButton
            handleNavigate={() =>
              navigation.navigate('Product', {
                id: data.item.id,
                name: data.item.name,
              })
            }
            label={data.item.name}
          />
        )}
      />

      <Text style={{marginBottom: 10, fontSize: 20}}>Ir a Ajustes</Text>
      <PrimaryButton
        handleNavigate={() => navigation.navigate('Settings')}
        label="Ir a Ajustes"
      />
    </View>
  );
};
