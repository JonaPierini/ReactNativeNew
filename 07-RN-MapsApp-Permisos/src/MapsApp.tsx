import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './presentation/navigation/StackNavigator';
import {PermissionsChecker} from './presentation/providers/PermissionsChecker';

export const MapsApp = () => {
  return (
    <NavigationContainer>
      {/* PermissionCheker es un hightOrderComponente que checkea el permiso otorgado. Explicado en el punto 6 */}
      <PermissionsChecker>
        <StackNavigator />
      </PermissionsChecker>
    </NavigationContainer>
  );
};

//Action => Casos de uso
//Assets => recursos estaticos
//Config => themas
//Infrastructure => Interfaces o typos
//Presentation => Todo lo de React Native
//DENTRO de presentation
//Componentes => Componentes
//Navigation => Stack de navegacion
//Provider => Hight Order Compoennte
//Store => zustand

//PERMISOS se utiliza un libreria react-native-permissions
//SI no le damos ese permiso no podemos utilizar
//HAY que hacer modificacaion en AndroidManifest.xml y IOS hay que hacer otras configuraciones
//LEER REACT-NATIVE-PERMISSIONS

//1. Infrastructure/interfaces/permissins.ts
//2: Actions/permissions/location.ts = requestLocationPermission() => una funcion que pregunta sobre si habilitamos o no el permiso
//3: Actions/permissions/location.ts => checkLocationPermission() que es un funcion que Chequea el Permiso
//4: Presentation/Store => PermissionStore
//5: Consumir el Store => src/navigation/StackNavigatio => PermissionsScreen
//6: Que pasa si el usuario deniega el permiso => Me manda a las setting => y si en la setting pone que no lo permite no me deja entrar en la aplicación , pero si pone que si lo permite se me va a actualizar ese estado (por medio de las setting) y me va a permite el ingreso a la app.
//POR eso vamos a revisar el permiso siempre. Por ejemplo el usuario entra a la app (HABILITANDO el permiso) sale de la app y bloque el permiso, VAMOS a detectar esa acción y lo vamos a mandar nuevamente al inicio. SIEMPRE ES NECESARIO ESE PRIVILEGIO. PARA ESO CREAMOS UN HIGHT ORDER COMPONENTE. Provider/PermissionChecker
//7. LOADINGSCREEN
