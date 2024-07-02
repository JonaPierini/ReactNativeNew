import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-paper';
import {getPokemons} from '../../../actions/pokemons';

import {useInfiniteQuery, useQueryClient} from '@tanstack/react-query';
import {PokeballBg} from '../../components/ui/PokeballBg';
import {FlatList} from 'react-native-gesture-handler';
import {globalTheme} from '../../../config/theme/global-theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PokemonCard} from '../../components/pokemons/PokemonCard';

export const HomeScreen = () => {
  const {top} = useSafeAreaInsets();
  const queryClient = useQueryClient();

  //* ESTA es la forma tradicional de una petición http
  // ISLOADIN, DATA => SON PROPIEDADES PARA QUE PODAMOS USAR
  // const {isLoading, data: pokemons = [] } = useQuery({
  //   QUERYKEY => IDENTIFICADOR QUE GUARDA EN CACHE
  //   queryKey: ['pokemons'],
  //   FUNCION QUE TRAE LA DATA
  //   queryFn: () => getPokemons(0),
  //   MANTIENE NUESTRA DATA POR 60 MINUTOS. Tenemos disponible la data en cache por 60 minutos
  //   staleTime: 1000 * 60 * 60, // 60 minutes
  // });

  //HACE EL INFINITE SCROOL
  const {isLoading, data, fetchNextPage} = useInfiniteQuery({
    //Idententificador que se guarda en cache
    queryKey: ['pokemons', 'infinite'],
    //Pagina inicial sea la 0
    initialPageParam: 0,
    staleTime: 1000 * 60 * 60, // 60 minutes
    //La forma en que vamos a extender la data
    queryFn: async params => {
      const pokemons = await getPokemons(params.pageParam);
      //ESTOY ACTUALIZA EL CACHE DE ANTEMANO (OPCIONAL)
      pokemons.forEach(pokemon => {
        queryClient.setQueryData(['pokemon', pokemon.id], pokemon);
      });

      return pokemons;
    },
    getNextPageParam: (lastPage, pages) => pages.length,
  });

  return (
    <View style={globalTheme.globalMargin}>
      <PokeballBg style={styles.imgPosition} />

      {/* SE puede agregar columnas NUMCOLUMNS */}
      <FlatList
        data={data?.pages.flat() ?? []}
        keyExtractor={(pokemon, index) => `${pokemon.id}-${index}`}
        numColumns={2}
        style={{paddingTop: top + 20}}
        //EL TITULO ESTA ADENTRO
        ListHeaderComponent={() => <Text variant="displayMedium">Pokédex</Text>}
        renderItem={({item}) => <PokemonCard pokemon={item} />}
        onEndReachedThreshold={0.6}
        //Función que trae la siguiente página
        onEndReached={() => fetchNextPage()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imgPosition: {
    position: 'absolute',
    top: -100,
    right: -100,
  },
});
