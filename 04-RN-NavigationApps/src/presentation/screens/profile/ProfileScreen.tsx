import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PrimaryButton} from '../../components/PrimaryButton';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export const ProfileScreen = () => {
  //Esto es para evitar que se vea arriba de todo (mal) en ios

  const {top} = useSafeAreaInsets();
  console.log(top);

  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        marginTop: top,
      }}>
      <Text>ProfileScreen</Text>

      {/* Con este navigation dispacha se abre el menu hamburguesa */}
      <PrimaryButton
        handleNavigate={() => navigation.dispatch(DrawerActions.toggleDrawer)}
        label="Abrir Menu"
      />
    </View>
  );
};
