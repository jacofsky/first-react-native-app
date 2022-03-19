import React from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function() {
  return (
    <View>
      <Text style={styles.text}>LoginForm</Text>
      <TextInput placeholder="Email"/>
      <TextInput placeholder="Password"/>
      <Button title="Enviar" onPress={() => console.log('enviado')}/>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        color: 'red',
    }
})
