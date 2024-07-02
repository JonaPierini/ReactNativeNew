//Funcion para que traiga las peliculas

import {HttpAdapter} from '../../../config/adapters/http/http.adapter';
import {Movie} from '../../entities/movie.entity';
import {MovieMapper} from '../../../infrastructure/mappers/movie.mapper';
import {MovieDBResponse} from '../../../infrastructure/interfaces/movies/now-movie-type';

//La finalidad es que con el adapter depende de código escrito por mi y no de una libreria como axios

export const moviesUpComingPlayingUseCase = async (
  fetcher: HttpAdapter,
): Promise<Movie[]> => {
  try {
    const upcoming = await fetcher.get<MovieDBResponse>('/upcoming');

    return upcoming.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    throw new Error('Error fetching movies');
  }

  //Se puede hacer asi directamente
  //   axios.get('https://');
};
