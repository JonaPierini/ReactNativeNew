import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {CustomView} from '../../components/ui/CustomView';
import {Title} from '../../components/ui/Title';
import {globalStyles} from '../../../config/theme/theme';
import {Card} from '../../components/ui/Card';
import {useState} from 'react';

export const TextInputScreen = () => {
  //  PARA capturar los valores
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    /// ES necesario para IOS PARA QUE FUNCIONE BIEN EL TEXT, TECLADO, Y SCROLL
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      {/* ES PARA hacer scroll y que el teclado no moleste al usuario. 
      HAY que usarlo cuando trabajamos con textos */}
      <ScrollView>
        <CustomView margin>
          <Title text="Text Inputs" safe />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre completo"
              autoCapitalize={'words'}
              autoCorrect={false}
              //CAMPUTARAMOS los valores
              onChangeText={value => setForm({...form, name: value})}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Correo electrónico"
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({...form, email: value})}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Teléfono"
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>

          <View style={{height: 10}} />

          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>

          <View style={{height: 20}} />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Teléfono"
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>
        </CustomView>

        <View style={{height: 20}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
