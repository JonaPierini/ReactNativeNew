import {useNavigation} from '@react-navigation/native';
import {Button, Icon, Input, Layout, Text} from '@ui-kitten/components';
import React, {useState} from 'react';
import {Alert, ScrollView, useWindowDimensions} from 'react-native';
import {CustomIcon} from '../../components/CustomIcon/CustomIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {AuthNavigationParams} from '../../navigation/AuthNavigation/AuthNavigation';
import {API_URL} from '@env';
import {authLogin} from '../../../actions/auth/auth';
import {useAuthStore} from '../../../store/auth/useAuthStore';

//StackscreenProps vienen de la libreria => npm install @react-navigation/stack
//AuthNavigationParams es donde esta definida la navegacion. En este caso seria AuthNavigationsParams porque ahi tengo al LoginScreen y al Register
//Como estoy en LoginScreen ese ese el nombre que lleva
interface Props extends StackScreenProps<AuthNavigationParams, 'LoginScreen'> {}

export const LoginScreen = ({navigation}: Props) => {
  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const {height} = useWindowDimensions();

  //USEAMOS el store
  const {login} = useAuthStore();
  const onLogin = async () => {
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }
    setIsPosting(true);
    const wasSuccessful = await login(form.email, form.password);
    setIsPosting(false);

    if (wasSuccessful) return;

    Alert.alert('Error', 'Usuario o contraseña incorrectos');
  };

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{paddingTop: height * 0.35}}>
          <Text category="h1">Ingresar</Text>
          <Text category="p2">Por favor, ingrese para continuar</Text>
        </Layout>

        {/* Inputs */}
        <Layout style={{marginTop: 20}}>
          <Input
            placeholder="Correo electrónico"
            keyboardType="email-address"
            autoCapitalize="none"
            value={form.email}
            onChangeText={email => setForm({...form, email})}
            accessoryLeft={<CustomIcon name="email-outline" />}
            style={{marginBottom: 10}}
          />

          <Input
            placeholder="Contraseña"
            autoCapitalize="none"
            secureTextEntry
            value={form.password}
            onChangeText={password => setForm({...form, password})}
            accessoryLeft={<CustomIcon name="lock-outline" />}
            style={{marginBottom: 10}}
          />
        </Layout>

        {/* Space */}
        <Layout style={{height: 10}} />

        {/* Button */}
        <Layout>
          <Button
            onPress={onLogin}
            disabled={isPosting}
            accessoryRight={<CustomIcon name="arrow-forward-outline" white />}>
            Ingresar
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
          <Text>¿No tienes cuenta?</Text>
          <Text
            status="primary"
            category="s1"
            onPress={() => navigation.navigate('RegisterScreen')}>
            {' '}
            crea una{' '}
          </Text>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
