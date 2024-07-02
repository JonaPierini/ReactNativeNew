import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {RootStackParams} from '../../routes/StackNavigator';
import {globalStyles} from '../../theme/theme';

export const ProductScreen = (props: any) => {
  // console.log(props.route.params);
  const params = useRoute<RouteProp<RootStackParams, 'Product'>>().params;

  //Para hacer que el titulo se conforme al product
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, []);

  return (
    <View style={globalStyles.container}>
      <Text>Product Screen</Text>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginTop: 20,
        }}>
        {params.name} - {params.id}
      </Text>
    </View>
  );
};
