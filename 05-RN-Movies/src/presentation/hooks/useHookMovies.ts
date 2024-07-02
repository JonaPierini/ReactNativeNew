import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Movie} from '../../core/entities/movie.entity';
import {moviesNowPlayingUseCase} from '../../core/use-casas/movies/now-playing.use-case';
import {movieDBFetcher} from '../../config/adapters/http/movieDB.adaptar';
import {moviesPopularPlayingUseCase} from '../../core/use-casas/movies/popular.use-case';
import {moviesTopRatedPlayingUseCase} from '../../core/use-casas/movies/top-rated.use-case';
import {moviesUpComingPlayingUseCase} from '../../core/use-casas/movies/upcoming.use-case';

/// ACA DIRECTAMENTE SE PUEDE HACER CON UN GET CON AXION O FETCHH Y CHAU
//ESTO SE HACE PORQUE ESTAMOS TRABAJANDO CON DATA QUE ES EXTERNA Y NO PODEMOS CONTROLAR SI CAMBIA EN UN FUTURO

//PARTE DEL SCROOL INFINITO
let popularPageNumber = 1;

export const useHookMovies = () => {
  const [nowMovies, setNowMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [isLoading, setLoading] = useState<boolean>();

  const getData = async () => {
    const nowMoviesPromise = moviesNowPlayingUseCase(movieDBFetcher);
    const popularMoviesPromise = moviesPopularPlayingUseCase(movieDBFetcher);
    const topRatedMoviesPromise = moviesTopRatedPlayingUseCase(movieDBFetcher);
    const upcomingMoviesPromise = moviesUpComingPlayingUseCase(movieDBFetcher);

    const [nowMovies, popularMovies, topRatedMovies, upcomingMovies] =
      await Promise.all([
        nowMoviesPromise,
        popularMoviesPromise,
        topRatedMoviesPromise,
        upcomingMoviesPromise,
      ]);

    setNowMovies(nowMovies);
    setPopularMovies(popularMovies);
    setTopRatedMovies(topRatedMovies);
    setUpcomingMovies(upcomingMovies);
    //Cargamos la data
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    nowMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    isLoading,

    //Methods
    popularNextPage: async () => {
      popularPageNumber++;
      const popularMovies = await moviesPopularPlayingUseCase(movieDBFetcher, {
        page: popularPageNumber,
      });

      setPopularMovies(prev => [...prev, ...popularMovies]);
    },
  };
};
