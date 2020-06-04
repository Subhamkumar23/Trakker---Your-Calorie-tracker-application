import React, { useContext, useState, useEffect } from 'react'

import { NavigationContainer } from '@react-navigation/native'
import Firebase from '../config/Firebase'


import AuthStackScreen from './AuthStackScreen'
// import AppStackScreen from './AppStackScreen'
import AppStackScreen from '../screens/homeScreens/BottomTabNavigator'

import Loading from '../screens/LoadingScreen'

import { AuthContext } from './AuthProvider'


export default function Routes() {
    const { user, setUser, isVerified } = useContext(AuthContext);
    const [loading, setLoading] = useState(true);
    const [initializing, setInitializing] = useState(true);
    
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
      setLoading(false);
    }
    
    useEffect(() => {
      const subscriber = Firebase.auth().onAuthStateChanged(onAuthStateChanged);
      return subscriber; // unsubscribe on unmount
    }, []);

    if (loading) {
      return <Loading />;
    }
    
    return (
      <NavigationContainer>
        {(user && isVerified) ? <AppStackScreen /> : <AuthStackScreen />}
      </NavigationContainer>
    );

  }