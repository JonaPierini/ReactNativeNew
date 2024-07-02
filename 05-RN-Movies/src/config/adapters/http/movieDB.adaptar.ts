import {AxiosAdapter} from './axios.adaptar';

export const movieDBFetcher = new AxiosAdapter({
  baseUrl: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e7283079d2e17305df26fdfba2e3851d',
    language: 'es',
  },
});
