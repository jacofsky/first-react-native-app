import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import HomeScreen from '../screens/HomeScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Stack = createStackNavigator()

const NavigationStack = () => {

  return (
    <Stack.Navigator>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name='Settings' component={SettingsScreen}/>  
    </Stack.Navigator>
  )
}

export default NavigationStack