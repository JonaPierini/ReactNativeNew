import {Platform} from 'react-native';
import {
  PERMISSIONS,
  PermissionStatus as RNPermissionStatus,
  check,
  openSettings,
  request,
} from 'react-native-permissions';
import type {PermissionStatus} from '../../infrastructure/interfaces/permissions';

//PERMISO de localización
//Es un promesa

//LA DIFERENCIA ENTRE REQUEST y CHECK
//REQUEST => Abre el popUp que nos pregunta
//CHECK => Verifica si ya se otorgo o no. Y ya no pregunta

//REQUEST => Pedimos el permiso
export const requestLocationPermission =
  //Permisiso Status es de la interfaces
  async (): Promise<PermissionStatus> => {
    //'react-native-permissions'; => Libreria
    let status: RNPermissionStatus = 'unavailable';

    //PREGUNTAMOS SI ESTAMOS EN IOS O ANDROID
    if (Platform.OS === 'ios') {
      //'react-native-permissions'; => Libreria
      status = await request(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
    } else if (Platform.OS === 'android') {
      status = await request(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      throw new Error('Unsupported platform');
    }

    if (status === 'blocked') {
      //'react-native-permissions'=> Libreria
      //Lo que hace es que te abre la configuración y habilite la location
      await openSettings();
      //Cuando regresa hace esta función que verifica si el permiso ya se habia otorgado
      return await checkLocationPermission();
    }

    //CUANDO da el permiso hacemos un maper con las opciones
    const permissionMapper: Record<RNPermissionStatus, PermissionStatus> = {
      granted: 'granted',
      denied: 'denied',
      blocked: 'blocked',
      unavailable: 'unavailable',
      limited: 'limited',
    };

    //RETORNAMOS el permiso con el estado que selecciono
    return permissionMapper[status] ?? 'unavailable';
  };

//CHECK => Chequeamos eL permiso
export const checkLocationPermission = async (): Promise<PermissionStatus> => {
  let status: RNPermissionStatus = 'unavailable';

  if (Platform.OS === 'ios') {
    //'react-native-permissions'; => Libreria
    status = await check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE);
  } else if (Platform.OS === 'android') {
    status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
  } else {
    throw new Error('Unsupported platform');
  }

  const permissionMapper: Record<RNPermissionStatus, PermissionStatus> = {
    granted: 'granted',
    denied: 'denied',
    blocked: 'blocked',
    unavailable: 'unavailable',
    limited: 'limited',
  };

  return permissionMapper[status] ?? 'unavailable';
};
