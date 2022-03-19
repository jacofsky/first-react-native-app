import { View, Text } from 'react-native'
import React from 'react'
import PropTypes from 'prop-types'

const Saludar = ({nombre}) => {
  return (
    <View>
      <Text>Hola {nombre} 👨🏿‍🦳</Text>
    </View>
  )
}

Saludar.defaultProps = {
    nombre: 'Default Name',
}

Saludar.propTypes = {
    nombre: PropTypes.string.isRequired
}

export default Saludar