import {Button, Input, Layout, Text} from '@ui-kitten/components';
import React from 'react';
import {ScrollView, useWindowDimensions} from 'react-native';
import {CustomIcon} from '../../components/CustomIcon/CustomIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthNavigationParams} from '../../navigation/AuthNavigation/AuthNavigation';

//StackscreenProps vienen de la libreria => npm install @react-navigation/stack
//AuthNavigationParams es donde esta definida la navegacion. En este caso seria AuthNavigationsParams porque ahi tengo al LoginScreen y al Register
//Como estoy en RegisterScreen ese ese el nombre que lleva
interface Props
  extends StackScreenProps<AuthNavigationParams, 'RegisterScreen'> {}
export const RegisterScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions();
  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.3}}>
          <Text category="h1">Crear cuenta</Text>
          <Text category="p2">Por favor, crea una cuenta para continuar</Text>
        </Layout>

        {/* Inputs */}
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Nombre completo"
            accessoryLeft={<CustomIcon name="person-outline" />}
            style={{marginBottom: 10}}
          />
          <Input
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            accessoryLeft={<CustomIcon name="email-outline" />}
            style={{marginBottom: 10}}
          />

          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            accessoryLeft={<CustomIcon name="lock-outline" />}
            style={{marginBottom: 10}}
          />
        </Layout>

        {/* Space */}
        <Layout style={{height: 10}} />

        {/* Button */}
        <Layout>
          <Button
            accessoryRight={<CustomIcon name="arrow-forward-outline" white />}
            onPress={() => {}}>
            Crear
          </Button>
        </Layout>

        {/* Información para crear cuenta */}
        <Layout style={{height: 50}} />

        <Layout
          style={{
            alignItems: 'flex-end',
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text>¿Ya tienes cuenta?</Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => navigation.goBack()}>
            {' '}
            ingresar{' '}
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
