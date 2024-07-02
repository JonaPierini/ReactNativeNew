import {Text, View} from 'react-native';
import {useHookMovies} from '../../hooks/useHookMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CarrousePrincipal} from '../../components/CarrouselPrincipal';
import {CarrouselHorizontal} from '../../components/CarrouselHorizontal';

export const HomeScreen = () => {
  const {
    isLoading,
    nowMovies,
    popularMovies,
    topRatedMovies,
    upcomingMovies,
    popularNextPage,
  } = useHookMovies();

  //Esto no aseguro que en ambos dispositivos se ve con el top que ponemos
  const {top} = useSafeAreaInsets();

  if (isLoading) {
    return <Text>Carrgando...</Text>;
  }

  return (
    <ScrollView>
      <View style={{marginTop: top + 20, paddingBottom: 30}}>
        {/* CARROUSE PRINCIPAL */}
        <CarrousePrincipal movies={nowMovies} />

        {/* CARROUSEL SECUNDARIO - INFINITI SCROLL */}
        <CarrouselHorizontal
          movies={popularMovies}
          title="Populares"
          loadNextPage={popularNextPage}
        />

        {/* CARROUSEL TOP RATEDMOVIES */}
        <CarrouselHorizontal
          movies={topRatedMovies}
          title="Mejor Calificadas"></CarrouselHorizontal>

        {/* CARROUSEL UPCOMINGMOVIES */}
        <CarrouselHorizontal
          movies={upcomingMovies}
          title="Proximamente"></CarrouselHorizontal>
      </View>
    </ScrollView>
  );
};
