import React from 'react';
import {Text, View} from 'react-native';
import {PrimaryButton} from '../../components/PrimaryButton';
import {StackActions, useNavigation} from '@react-navigation/native';
import {globalStyles} from '../../theme/theme';

export const SettingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={globalStyles.container}>
      <Text>SettingScreenn</Text>

      <PrimaryButton
        label="Regresar"
        handleNavigate={() => navigation.goBack()}></PrimaryButton>

      <PrimaryButton
        label="Regresar al Home"
        handleNavigate={() =>
          navigation.dispatch(StackActions.popToTop)
        }></PrimaryButton>
    </View>
  );
};
