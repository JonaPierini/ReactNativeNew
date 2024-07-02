import {HttpAdapter} from '../../../../config/adapters/http/http.adapter';
import {MovieDBMovie} from '../../../../infrastructure/interfaces/movies/now-movie-type';
import {MovieMapper} from '../../../../infrastructure/mappers/movie.mapper';
import {FullMovie, Movie} from '../../../entities/movie.entity';

export const getMovieByIdUseCase = async (
  fetcher: HttpAdapter,
  movieId: number,
): Promise<FullMovie> => {
  try {
    const movie = await fetcher.get<MovieDBMovie>(`/${movieId}`);
    const fullMovie = MovieMapper.fromMovieDBToEntity(movie);
    return fullMovie;
  } catch (error) {
    throw new Error('Error fetching movies');
  }

  //Se puede hacer asi directamente
  //   axios.get('https://');
};
