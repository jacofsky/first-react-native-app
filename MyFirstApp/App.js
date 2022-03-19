import 'react-native-gesture-handler';

import React from 'react'
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// import NavigationStack from './src/navigation/NavigationStack';
// import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';

// import LoginForm from './src/components/LoginForm';
// import Saludar from './src/components/Saludar';

export default function App() {
  return (
      /*  
        <View style={styles.container}> 
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Hola mundo</Text> 
          <LoginForm/> 
          <Saludar nombre="Jacooo"/> 
          <Saludar nombre={12}/> 
        </View> 
      */
    <NavigationContainer>
      {/* <NavigationStack/> */}
      {/* <NavigationTab/> */}
      <NavigationDrawer/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
