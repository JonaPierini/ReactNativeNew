import React from 'react';
import {Image, Text, View} from 'react-native';
import {Movie} from '../../core/entities/movie.entity';
import {ScrollView} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';

interface Props {
  movies?: Movie[];
  height?: number;
}

export const CarrousePrincipal = ({movies, height = 440}: Props) => {
  // console.log('MOVIE');
  // console.log(movies);
  return (
    <View style={{height: height}}>
      {/* No usamos libreria. Horizontal para que el scroll sea horizontal. ShowsHorizontalScrollIndicator en FALSE es para que no se vea la barra de scrool */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {movies?.map((elem, i) => (
          <>
            {/* <Image width={300} source={{uri: elem.poster}} /> */}
            <MoviePoster
              key={i}
              movie={elem.poster}
              description={elem}></MoviePoster>
          </>
        ))}
      </ScrollView>
    </View>
  );
};
