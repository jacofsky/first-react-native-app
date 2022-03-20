import { StyleSheet, Text, View, TextInput, Button, Keyboard } from 'react-native'
import React, {useState} from 'react'

import { useFormik } from 'formik'
import * as Yup from "yup"

import {user, userDetails} from '../../utils/userDB'
import useAuth from '../../hooks/useAuth'

const LoginForm = () => {

    const [error, setError] = useState('')
    const {login} = useAuth()

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: (formValue) => {
            const {username, password} = formValue
            setError('')
          
          if(username !== user.username || password !== user.password) {
            setError('El usuario o contraseña no son correctos')
          } else {
            login(userDetails)
          }
        },
      });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesion</Text>
      <TextInput 
        placeholder='Nombre de usuario' 
        style={styles.input} 
        autoCapitalize="none" 
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue('username', text) }
      />

      <TextInput
        placeholder="Contraseña"
        style={styles.input}
        autoCapitalize="none"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue('password', text) }

      />
      <View style={styles.entrar}>
        <Button title="Entrar" onPress={formik.handleSubmit} />
      </View>
      
      <Text style={styles.error}>{formik.errors.username}</Text>
      <Text style={styles.error}>{formik.errors.password}</Text>

      <Text style={styles.error}>{error}</Text>

    </View>
  )
}

const initialValues = () => ({
    username: "",
    password: ""
})

const validationSchema = () => ({
    username: Yup.string().required('El usuario es obligatorio'),
    password: Yup.string().required('La conraseña es obligatoria'),

})

export default LoginForm

const styles = StyleSheet.create({
    entrar:{
      marginVertical: 20,
      paddingHorizontal: 20,
    },
    title: {
      textAlign: "center",
      fontSize: 28,
      fontWeight: "bold",
      marginTop: 50,
      marginBottom: 15,
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      borderRadius: 10,
    },
    error: {
      textAlign: "center",
      color: "#f00",
      marginTop: 20,
    },
  })