// import 'react-native-gesture-handler';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {AppNavigation} from './presentation/navigation/AppNavigation/AppNavigation';
import * as eva from '@eva-design/eva';
import {ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import {useColorScheme} from 'react-native';
import {EvaIconsPack} from '@ui-kitten/eva-icons';
import {AuthPovider} from './presentation/providers/AuthProvider';

export const App = () => {
  //Tema basado en el sistema operativo
  //Si ponemos el tema dark y no usamos los componentes de uiKitten se va a ver mal (ejemplo en settingScreen)
  const colorScheme = useColorScheme();
  const theme = colorScheme === 'dark' ? eva.dark : eva.light;

  //Esto es necesario para que el tema tambien se use en la navegación => theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}

  return (
    <>
      {/* El authProvider es para el refresh del token */}
      {/* <AuthPovider> */}
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={theme}>
        <NavigationContainer
          theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <AppNavigation />
        </NavigationContainer>
      </ApplicationProvider>
      {/* </AuthPovider> */}
    </>
  );
};
