import {API_URL, API_KEY, STAGE, API_IOS, API_ANDROID} from '@env';
import axios from 'axios';
import {Platform} from 'react-native';
import {StorageAdapter} from '../adapter/storage';

//BASADO EN LA PLATAFORMA

// export const PLATAFORMA =
//   STAGE === 'prod' ? API_URL : Platform.OS === 'ios' ? API_IOS : API_ANDROID;

const appCreateClient = axios.create({
  //LA BASE  de la URL a usar
  baseURL: API_URL,
  // baseURL: PLATAFORMA,
  //HEADERS que en nuestro caso tienen una apikey - test
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY,
  },
});

//interceptors para manejar el token si es o no válido
appCreateClient.interceptors.request.use(async config => {
  //verificamos si el token existe
  const token = await StorageAdapter.getItem('token');
  if (token) {
    //si existe se lo mandamos con bearer token
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
});

export {appCreateClient};
