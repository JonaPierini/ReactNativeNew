import React from 'react';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {Movie} from '../../core/entities/movie.entity';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../navigation/Navigation';

interface Props {
  movie: Movie | any;
  height?: number;
  widht?: number;
  description?: any;
}

export const MoviePoster = ({
  movie,
  height = 420,
  widht = 300,
  description,
}: // description,
Props) => {
  /// TODO ESE TYPADO VIENDE DIRECTAMENTE DE LA LIBRERIA. ME AYUDA A PONER QUE PAGINA PONER EN navigation.navigate('Detalle)
  //const navigation = useNavigation<NavigationProp<RootStackParams>>();
  const navigation = useNavigation<any>();

  return (
    <Pressable
      style={({pressed}) => ({
        widht,
        height,
        marginHorizontal: 2,
        marginBottom: 20,
        paddingHorizontal: 5,
        //CAMBIA el color cuando estoy seleccionando
        opacity: pressed ? 0.9 : 1,
      })}
      onPress={() =>
        navigation.navigate('Details', {
          //movieId: movie.id,
          description: description,
        })
      }>
      <View style={{...style.imageContainer, height: height, width: widht}}>
        <Image style={style.image} source={{uri: movie}}></Image>
      </View>
    </Pressable>
  );
};

const style = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 18,
  },
  imageContainer: {
    flex: 1,
    borderRadius: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
    shadowRadius: 7,
    elevation: 9,
  },
});
