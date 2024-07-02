import React, {useEffect, useRef} from 'react';
import {
  View,
  Text,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import {Movie} from '../../core/entities/movie.entity';
import {FlatList} from 'react-native-gesture-handler';
import {MoviePoster} from './MoviePoster';

interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}

export const CarrouselHorizontal = ({movies, title, loadNextPage}: Props) => {
  const isLoading = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoading.current = false;
    }, 200);
  }, [movies]);

  ///FUNCION SCROOL INFINITO
  const onScrool = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    //SACAMOS LA POSICION

    const {contentOffset, layoutMeasurement, contentSize} = e.nativeEvent;

    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndReached) return;

    isLoading.current = true;

    //CARGAR LA siguiente pelicula
    loadNextPage && loadNextPage();
  };
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: '300',
            marginLeft: 10,
            marginBottom: 10,
          }}>
          {title}
        </Text>
      )}
      {/* RENDERIZA elementos de manera dinamica */}
      <FlatList
        //PARA EL CARROUSEL INIFINITO
        onScroll={e => onScrool(e)}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item, index) => `${item.id}-${index}`}
        data={movies}
        renderItem={({item}) => (
          <MoviePoster
            description={item}
            movie={item.poster}
            widht={140}
            height={140}></MoviePoster>
        )}></FlatList>
    </View>
  );
};
