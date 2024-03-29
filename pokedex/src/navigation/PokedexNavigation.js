import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Pokedex from '../screens/Pokedex'
import Pokemon from '../screens/Pokemon'

const Stack = createStackNavigator()

const PokedexNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Pokedex}/>
      <Stack.Screen name="Pokemon" component={Pokemon} options={{
        title: '', 
        headerShown: true,            
        headerTransparent: true,
        headerShadowVisible: false}}
        />
    </Stack.Navigator>
  )
}

export default PokedexNavigation