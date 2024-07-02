import axios, {AxiosInstance} from 'axios';
import {HttpAdapter} from './http.adapter';

//ESTO ES TODO UNA ABSTRACCIÓN PARA HACER EL METODO GET PQ SI CAMBIA CON EL TIEMPO ESE LIBRARIA DE AXIOS NOS EVITAMOS PROBLEMAS

interface Options {
  baseUrl: string;
  params: any;
}

export class AxiosAdapter implements HttpAdapter {
  private axiosIntances: AxiosInstance;

  constructor(options: Options) {
    this.axiosIntances = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    });
  }

  async get<T>(url: string, options?: any): Promise<T> {
    try {
      const {data} = await this.axiosIntances.get<T>(url, options);
      return data;
    } catch (error) {
      throw new Error('Error');
    }
  }
}
