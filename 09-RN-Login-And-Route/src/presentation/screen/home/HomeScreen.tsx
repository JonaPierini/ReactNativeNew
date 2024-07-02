import {Button, Layout} from '@ui-kitten/components';
import React from 'react';
import {CustomIcon} from '../../components/CustomIcon/CustomIcon';
import {useAuthStore} from '../../../store/auth/useAuthStore';

export const HomeScreen = () => {
  const {logOut} = useAuthStore();
  return (
    <Layout style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        onPress={logOut}
        accessoryLeft={<CustomIcon name="log-out-outline" />}>
        Cerrar sesión
      </Button>
    </Layout>
  );
};
