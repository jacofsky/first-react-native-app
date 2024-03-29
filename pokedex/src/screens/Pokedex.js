import React, {useState, useEffect} from 'react'
import { View } from 'react-native'

import PokemonList from '../components/PokemonList'
import { getPokemonsApi, getPokemnDetailsByUrlApi } from '../api/pokemon'


const Pokedex = () => {

  const [pokemons, setPokemons] = useState([])
  const [nextUrl, setNextUrl] = useState()

  useEffect(() => {
    (async () => {
      await loadPokemons()
    })()
  }, [])

  const loadPokemons = async() => {
    try {

      const response = await getPokemonsApi(nextUrl)
      setNextUrl(response.next)
      
      const pokemonsArray = []
      

      for await(const pokemon of response.results) {
        const pokemonDetails = await getPokemnDetailsByUrlApi(pokemon.url)
        pokemonsArray.push({
          id: pokemonDetails.id,
          name: pokemonDetails.name,
          type: pokemonDetails.types[0].type.name,
          order: pokemonDetails.order,
          image: pokemonDetails.sprites.other['official-artwork'].front_default

        })
      }
      setPokemons([...pokemons, ...pokemonsArray])

    } catch (error) {
      console.log(error)
    }
  }
  

  return (
    <View>
      <PokemonList isNext={nextUrl} pokemons={pokemons} loadPokemons={loadPokemons} />
    </View>
  )
}

export default Pokedex