import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack'

import theme from '../global/styles/theme'

import Home from '../screens/Home'
import SignIn from '../screens/SignIn'

const Stack = createNativeStackNavigator();

const forFade = ({ }) => ({
    cardStyle: {
     backgroundColor: 'transparent' 
    },
  });

  export type RootStackParamList = {
    Main: undefined;
    Home: undefined;
  };

const AuthRoutes = () => {

    return (
        <Stack.Navigator
            screenOptions= {{
                headerShown: false,
            }}
        >
            <Stack.Screen 
                name= "SignIn"
                component= { SignIn }
            />
            <Stack.Screen 
                name= "Home"
                component= { Home }        
            />
        </Stack.Navigator>
    )
}

export default AuthRoutes;