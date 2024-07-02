import {pokeApi} from '../../config/api/pokeApi';
import type {Pokemon} from '../../domain/entities/pokemon';
import type {
  PokeAPIPaginatedResponse,
  PokeAPIPokemon,
} from '../../infrastructure/interfaces/pokepi.interfaces';
import {PokemonMapper} from '../../infrastructure/mappers/pokemon.mapper';

//Esto va a devolver el arreglo de pokemos
export const getPokemons = async (
  page: number,
  limit: number = 20,
): Promise<Pokemon[]> => {
  try {
    const url = `/pokemon?offset=${page * 10}&limit=${limit}`;
    const {data} = await pokeApi.get<PokeAPIPaginatedResponse>(url);

    //Peticiones en paralelo
    const pokemonPromises = data.results.map(info => {
      return pokeApi.get<PokeAPIPokemon>(info.url);
    });

    const pokeApiPokemons = await Promise.all(pokemonPromises);
    const pokemonsPromises = pokeApiPokemons.map(item =>
      //ME HACE UN MAPEO Y ME DEVUELVE ESA DATA DE LA FORMA QUE YO QUIERO (CON LOS TIPOS QUE YO QUIERO)
      PokemonMapper.pokeApiPokemonToEntity(item.data),
    );

    return await Promise.all(pokemonsPromises);
  } catch (error) {
    console.log(error);
    throw new Error('Error getting pokemons');
  }
};
