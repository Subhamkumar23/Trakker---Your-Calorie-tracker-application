import {createStackNavigator} from '@react-navigation/stack'
import React, { useState, useEffect, createContext } from 'react'
import { View, Text, StyleSheet } from 'react-native';

import WelcomeScreen from '../screens/WelcomeScreen'
import SignInScreen from '../screens/SignInScreen'
import SignUpScreen from '../screens/SignUpScreen'

const AuthStack = createStackNavigator()


const AuthStackScreen = ({navigator}) => {
    return(
        <AuthStack.Navigator headerMode='none'>
            <AuthStack.Screen 
                name="WelcomeScreen"
                component = {WelcomeScreen}
            />
            <AuthStack.Screen 
                name="SignUpScreen"
                component = {SignUpScreen}
            />
            <AuthStack.Screen 
                name="SignInScreen"
                component = {SignInScreen}
            />
            
        </AuthStack.Navigator>
    )
}

export default AuthStackScreen;