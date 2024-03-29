import React from 'react'
import { ScrollView } from 'react-native'
import { useEffect, useState } from 'react'
import {getPokemonDetailsApi} from '../api/pokemon'
import Icon from 'react-native-vector-icons/FontAwesome5'

import Header from '../components/Pokemon/Header'
import Type from '../components/Pokemon/Type'
import Stats from '../components/Pokemon/Stats'
import Favorite from '../components/Pokemon/Favorite'

import useAuth from '../hooks/useAuth'

const Pokemon = ({navigation, route: {params}}) => {

  const [pokemon, setPokemon] = useState(null)
  const {auth} = useAuth()

  
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => auth && <Favorite id={pokemon?.id}/>,
      headerLeft: () => <Icon name='arrow-left' color="#fff" size={20} style={{marginLeft: 20}} onPress={navigation.goBack}/>
    })
  }, [navigation, params, pokemon])

  useEffect(() => {
    (async() => {
      try {
        const pokemonDetail = await getPokemonDetailsApi(params.id)
        setPokemon(pokemonDetail)
        
      } catch (error) {
        navigation.goBack()
      }
    
    })()
  }, [params])

  if(!pokemon) return null

  
  

  return (
    <ScrollView>
      <Header name={pokemon.name}
        order={pokemon.order}
        image={pokemon.sprites.other["official-artwork"].front_default}
        type={pokemon.types[0].type.name}/>
      <Type types={pokemon.types}/>
      <Stats stats={pokemon.stats}/>
    </ScrollView>
  )
}

export default Pokemon