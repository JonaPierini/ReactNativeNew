import 'react-native-gesture-handler';

import {StackNavigator} from './presentation/navigator/StackNavigator';
import {ThemeContextProvider} from './presentation/context/ThemeContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

export const PokedexApp = () => {
  //TANSTACK QUERY => Mantiene en cache las peticiones http que ya se hicieron. Evita la utilización de un servicio y en mejor rendimiento
  //Ver documentación de como se instala

  //HAY un packete que se llama react-native-image-colors que sirve para sacar como fondo el color de la imagen
  return (
    //Contexto de ese tanstack
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <StackNavigator />
      </ThemeContextProvider>
    </QueryClientProvider>
  );
};
