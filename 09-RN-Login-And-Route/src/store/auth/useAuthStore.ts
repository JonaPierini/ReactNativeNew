import {create} from 'zustand';
import {authCheckStatus, authLogin} from '../../actions/auth/auth';
import {StorageAdapter} from '../../config/adapter/storage';

export type AuthStatus = 'loggedIn' | 'unAuthorized';

export interface AuthState {
  status: AuthStatus;
  token?: string;
  user?: string;
  login: (email: string, password: string) => Promise<boolean>;
  //CHEQUEAMOS el statu
  checkStatus: () => Promise<any>;
  logOut: () => Promise<any>;
}

export const useAuthStore = create<AuthState>()((set, get) => ({
  //Estado inicial
  status: 'unAuthorized',
  token: undefined,
  user: undefined,

  login: async (email: string, password: string) => {
    //El auto login es el llamado a la api
    const resp = await authLogin(email, password);
    //si no hay respuesta
    if (!resp) {
      set({status: 'unAuthorized', token: undefined, user: undefined});
      return false;
    }

    //si todo sale bien, seteamos esos valores
    set({status: 'loggedIn', token: resp.token, user: resp.name});
    //Ademas lo guardamos en el storage => se puede hacer con persist
    await StorageAdapter.setItem('token', resp.token);
    //Probamos si se guardo
    // const storeToken = await StorageAdapter.getItem('token');
    // console.log('StoreToken');
    // console.log(storeToken);
    return true;
  },

  //CHEQUEAMOS para hacer un refresh del token
  checkStatus: async () => {
    //llamamos a la api
    const resp = await authCheckStatus();
    if (!resp) {
      set({status: 'unAuthorized', token: undefined, user: undefined});
      return;
    }
    //si hay una respuesta actualizado el token
    await StorageAdapter.setItem('token', resp.token);
    set({status: 'loggedIn', token: resp.token, user: resp.name});
  },

  logOut: async () => {
    await StorageAdapter.removeItem('token');
    set({status: 'unAuthorized', token: undefined, user: undefined});
  },
}));
