import React, {useEffect, useState} from 'react';
import {getMovieByIdUseCase} from '../../core/use-casas/movies/movie/get-by-id.use-case';
import {movieDBFetcher} from '../../config/adapters/http/movieDB.adaptar';
import {FullMovie} from '../../core/entities/movie.entity';

export const useHookMovie = ({movieId}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<FullMovie>();

  useEffect(() => {
    loadMovie();
  }, [movieId]);

  const loadMovie = async () => {
    setIsLoading(true);
    const fullMovie = await getMovieByIdUseCase(movieDBFetcher, movieId);
    setMovie(fullMovie);
    setMovie(fullMovie);
    setIsLoading(false);
  };

  return {
    isLoading,
    setIsLoading,
    movie,
  };
};
