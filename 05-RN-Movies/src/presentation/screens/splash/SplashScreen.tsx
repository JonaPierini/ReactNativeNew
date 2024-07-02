import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

export const SplashScreen = () => {
  const navigation = useNavigation();

  const navigateToHome = () => {
    navigation.navigate('Home' as never);
  };
  useEffect(() => {
    const timeOut = setTimeout(navigateToHome, 2000);
    return () => clearTimeout(timeOut);
  }, []);

  return (
    <View
      style={{
        backgroundColor: 'tomato',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>SplasScreen</Text>
    </View>
  );
};
