import {useNavigation} from '@react-navigation/native';
import React, {PropsWithChildren, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useAuthStore} from '../../store/auth/useAuthStore';

export const AuthPovider = ({children}: PropsWithChildren) => {
  const navigation = useNavigation<any>();
  const {checkStatus, status} = useAuthStore();

  useEffect(() => {
    checkStatus();
  }, []);

  useEffect(() => {
    if (status === 'loggedIn') {
      navigation.reset({
        index: 0,
        routes: [{name: 'HomeScreen'}],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{name: 'LoginScreen'}],
      });
    }
  }, [status]);

  return <>{children}</>;
};
