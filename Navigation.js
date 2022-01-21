import React from 'react';
import {Text,View,} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignupScreen from './src/screens/SignupScreen';
import LoginScreen from './src/screens/LoginScreen';
import Dasboard from './src/screens/Dasboard';
import profile from './src/screens/Profile';
import Like from './src/screens/Like';

const Stack = createStackNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen name=' ' component={LoginScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='SignUp' component={SignupScreen} options={{ headerShown: false }}/>
          <Stack.Screen name='Menu' component={Dasboard} options={{ headerShown: false }}/>
          <Stack.Screen name='Profile' component={profile} options={{ headerShown: false }}/>
          <Stack.Screen name='Like' component={Like}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}
    

export default App;
