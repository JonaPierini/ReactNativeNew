import {DrawerActions, useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';

export const Tabs3Screen = () => {
  //Para hacer que la tab  tenga el menu hamburguesa. Lo mejor es hacer un componente

  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <Text>Menu</Text>
        </Pressable>
      ),
    });
  }, []);
  return (
    <View>
      <Text>Tab3Screen</Text>
    </View>
  );
};
