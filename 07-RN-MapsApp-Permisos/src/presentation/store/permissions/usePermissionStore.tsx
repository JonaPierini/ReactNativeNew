import {create} from 'zustand';
import type {PermissionStatus} from '../../../infrastructure/interfaces/permissions';
import {
  checkLocationPermission,
  requestLocationPermission,
} from '../../../actions/permissions/location';

interface PermissionsState {
  //El status => puede ser denegado, permitido, etc. Son de nuestra interfaces
  locationStatus: PermissionStatus;
  //Dos funciones. Le podemos poner que sean de tipo void
  //PREGUNTA si damos o no el permiso
  requestLocationPermission: () => Promise<PermissionStatus>;
  //VERIFICA el estado sin preguntar
  checkLocationPermission: () => Promise<PermissionStatus>;
}

//CREAMOS EL STORE
export const usePermissionStore = create<PermissionsState>()(set => ({
  //Estado inicial va a ser sin determinar
  locationStatus: 'undetermined',

  //Pedimos el permiso y ese estado va a cambiar de acuerdo a lo que diga el usuario
  requestLocationPermission: async () => {
    //el status va a ser igual al permiso que le damos cuando preguntamos
    const status = await requestLocationPermission();
    //Aca seteamos ese locationStatus con lo otrogado por el usuario
    set({locationStatus: status});

    return status;
  },

  //Chequeamos el permiso y el estado va a ser de acuerdo a ese permiso otorgado
  checkLocationPermission: async () => {
    const status = await checkLocationPermission();
    set({locationStatus: status});
    return status;
  },
}));
