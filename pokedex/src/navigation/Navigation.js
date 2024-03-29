import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Image } from 'react-native'

import AccountNavigation from './AccountNavigation'
import PokedexNavigation from './PokedexNavigation'
import FavoritesNavigation from './FavoritesNavigation'

const Tab = createBottomTabNavigator()

const Navigation = () => {
  return (
    <Tab.Navigator initialRouteName='Pokedex'>
      <Tab.Screen name='Account' component={AccountNavigation} options={{
        tabBarLabel: 'Cuenta',
        tabBarIcon: ({color, size}) => (
          <Icon name='user' color={color} size={size} />
        )
      }}/>
      <Tab.Screen name='Pokedex' component={PokedexNavigation} options={{
        tabBarLabel: '',
        tabBarIcon: () =>  renderPokeball()
        
      }}/>
      <Tab.Screen name='Favorites' component={FavoritesNavigation} options={{
        tabBarLabel: 'Favoritos',
        tabBarIcon: ({color, size}) => (
          <Icon name='star' color={color} size={size} />
        )
      }}/>
    </Tab.Navigator>
  )
}

const renderPokeball = () => {
  return (
    <Image 
      source={require('../assets/pokeball.png')}
      style={{width: 75, height: 75, top: -15}}
    />
  )
}

export default Navigation