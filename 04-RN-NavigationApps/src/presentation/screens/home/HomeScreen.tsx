import React, {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../theme/theme';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {PrimaryButton} from '../../components/PrimaryButton';
import {RootStackParams} from '../../routes/StackNavigator';

export const HomeScreen = (props: any) => {
  //Esas props las proporciona el NavigationContainer
  // console.log(props);

  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  const handleNavigateProducts = () => {
    navigation.navigate('Products');
  };

  const handleNavigateSetting = () => {
    navigation.navigate('Settings');
  };

  //Esto es para que el Texto de Menu haga ese Drawer
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
    <View style={globalStyles.container}>
      {/* <Pressable
        onPress={handleNavigate}
        style={globalStyles.primaryButton}>
        <Text style={globalStyles.buttonText}>Ir a productos</Text>
      </Pressable> */}
      <PrimaryButton
        handleNavigate={handleNavigateProducts}
        label="Ir a Products"
      />
      <PrimaryButton
        handleNavigate={handleNavigateSetting}
        label="Ir a Setting"
      />
    </View>
  );
};
