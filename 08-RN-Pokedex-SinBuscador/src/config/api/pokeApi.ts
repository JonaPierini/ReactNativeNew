import axios from 'axios';

//ESTO es lo que voy a usar para hacer las peticiones
export const pokeApi = axios.create({
  baseURL: 'https://pokeapi.co/api/v2',
});
