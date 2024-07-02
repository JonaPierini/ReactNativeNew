//Login

import {appCreateClient} from '../../config/api/appCreateClient';
import type {RespLoginAuth} from '../../infrastructure/interfaces/auth';

export const authLogin = async (email: string, password: string) => {
  email = email.toLowerCase();
  try {
    //COMO LA DATA es de tipo any. Tengo que armar la interface en infraestructuraa
    const {data} = await appCreateClient.post<RespLoginAuth>('/login', {
      email,
      password,
    });
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};

//Es para renovar el login
//Para probarlo en el postman hay que pasarle en auth un bearer token
//despues hay que interceptarlo en appCreateClient.ts
//Luego en el storage
//Finalamente hay que hacer un proveedor que este pendiente de ese token y autentificación

export const authCheckStatus = async () => {
  try {
    const {data} = await appCreateClient.get<RespLoginAuth>('/auth/renew');
    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
};
