//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Firebase from '../config/Firebase'
// import {RootStackScreen } from '../navigation/RootStackNavigator'

import { AuthContext } from '../navigation/AuthProvider'

const {width, height} = Dimensions.get('window');


const HomeScreen = () =>  {

    const { user, logout } = useContext(AuthContext)

    return (
        <View style={styles.container}>
        <Text style={styles.title}>Welcome user!</Text>
        <Text style={{alignItems:"center"}}>{user.email}</Text>

        <TouchableOpacity 
            style={styles.button} 
            onPress={() => logout()}
        >
            <Text style={{color:'white'}}>Sign out 🤷</Text>
        </TouchableOpacity>

        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize:30
    },
    button:{
        marginTop: 40,
        height: 42,
        width: width* .7,
        // left: width*0.13,
        backgroundColor: "#384C86",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,        
    }
});

//make this component available to the app
export default HomeScreen;
