import React from 'react'

import { View, Text, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import Saludar from '../components/Saludar'

const HomeScreen = ({navigation}) => {

  const goToPage = () => {
    navigation.navigate("Settings")
  }

  return (
    <SafeAreaView>
      <Text>Esto es: HomeScreen</Text>
      
      <Saludar nombre='Jaco!'/>
      <Button title='Ir a settings' onPress={goToPage} />
    </SafeAreaView>
  )
}

export default HomeScreen