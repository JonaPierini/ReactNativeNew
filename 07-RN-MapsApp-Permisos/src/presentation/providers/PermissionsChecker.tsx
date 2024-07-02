import {PropsWithChildren, useEffect} from 'react';
import {AppState} from 'react-native';
import {usePermissionStore} from '../store/permissions/usePermissionStore';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigation/StackNavigator';

export const PermissionsChecker = ({children}: PropsWithChildren) => {
  const {locationStatus, checkLocationPermission} = usePermissionStore();
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  //REDIRECCIONA al usuario en caso que lo desabilite o habilite
  useEffect(() => {
    if (locationStatus === 'granted') {
      //SI LO ACEPTA te permite ingresar a la APP
      //ESE RESETE lo que hace es que no te permite volver a la ruta anterior. ES como el reemplazo del reaplce

      //RESETE todo el stack. NO PUEDO regresar a la ruta anterio que en nuestro caso la ruta principal es el loading.
      //Y SOLO ME VA A MOSTRAR la pantalla del 'MAPScreen'
      navigation.reset({
        routes: [{name: 'MapScreen'}],
      });
    } else if (locationStatus !== 'undetermined') {
      //SI NO ACEPTA te va a los permisos
      navigation.reset({
        routes: [{name: 'PermissionsScreen'}],
      });
    }
  }, [locationStatus]);

  //VERIFICA EL PERMISO cuando el componente se monta
  useEffect(() => {
    checkLocationPermission();
  }, []);

  //CHEQUEAMOS el estado de la aplicacion (APPSTATE)
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      //ESTA pendiente de cuando el usuario sale o entra de la app. ACTIVO => cuando ingresa. BACKGROUND => cuando sale de la APP. Eso nos va a servir para controlar los permisos
      if (nextAppState === 'active') {
        checkLocationPermission();
      }
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return <>{children}</>;
};
