//Funcion para que traiga las peliculas

import axios from 'axios';
import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {NowPlayingResponse} from '../../../infrastructure/interfaces/movies/now-movie-type';
import {Movie} from '../../entities/movie.entity';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';

//La finalidad es que con el adapter depende de código escrito por mi y no de una libreria como axios

export const moviesNowPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const nowPlaying = await fetcher.get<NowPlayingResponse>('/now_playing');

    return nowPlaying.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching movies');
  }

  //Se puede hacer asi directamente
  //   axios.get('https://');
};
