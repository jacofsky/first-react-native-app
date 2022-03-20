import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import getColorByPokemonType from '../utils/getColorByPokemonType'
import { capitalize } from 'lodash'

const PokemonCard = ({pokemon}) => {

    const navigation = useNavigation()

    const goToPokemon = () => {
        navigation.navigate('Pokemon', {id: pokemon.id})
    }

    const bgStyles = {backgroundColor: getColorByPokemonType(pokemon.type), ...styles.bgStyles}

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
        <View style={styles.card}>
            <View style={styles.spacing}>
                <View style={bgStyles}>
                    <Text style={styles.number}>#{`${pokemon.order}`.padStart(3, 0)}</Text>
                    <Text style={styles.name}>{capitalize(pokemon.name)}</Text>
                    <Image source={{uri: pokemon.image}} style={styles.image}/>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
  )
}

export default PokemonCard

const styles = StyleSheet.create({
    card: {
        flex: 1,
        height: 130
    },
    spacing: {
        flex: 1,
        padding: 5
    },
    bgStyles: {
        flex: 1,
        borderRadius: 15,
        padding: 10
    },
    name: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 15,
        paddingTop: 10
    },
    number: {
        position: 'absolute',
        right: 10,
        top: 10,
        color: '#fff',
        fontSize: 11

    },
    image: {
        position: 'absolute',
        bottom: 2,
        right: 2,
        width: 90,
        height:90
    }
})