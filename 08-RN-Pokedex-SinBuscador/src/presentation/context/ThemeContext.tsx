import {PropsWithChildren, createContext} from 'react';

import {
  NavigationContainer,
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import {PaperProvider, adaptNavigationTheme} from 'react-native-paper';
import {useColorScheme} from 'react-native';

//React Paper y React Navigation
const {LightTheme, DarkTheme} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

//isDark false
export const ThemeContext = createContext({
  isDark: false,
  theme: LightTheme,
});

export const ThemeContextProvider = ({children}: PropsWithChildren) => {
  //ESTO es lo que nos va a determinar si es un tema dark o light
  const colorScheme = useColorScheme();

  //si el color schema es igual al dark
  const isDark = colorScheme === 'dark';
  //Si estamos en modo oscuro usamos el DarkThema sino el otro
  const theme = isDark ? DarkTheme : LightTheme;

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <ThemeContext.Provider
          //Aca le paso los valores de la linea 19. Y aca ya vamos a saber si se esta utilizando el dark o light
          value={{
            isDark,
            theme,
          }}>
          {children}
        </ThemeContext.Provider>
      </NavigationContainer>
    </PaperProvider>
  );
};
