//import liraries
import React, { Component, useContext } from 'react';
import { View, Text, StyleSheet, Button, Image, TouchableOpacity, Dimensions } from 'react-native';

import * as firebase from 'firebase'


import { AuthContext } from '../../navigation/AuthProvider'


const {width, height} = Dimensions.get('window');

// create a component
const ProfileScreen = () => {

    const { user, logout } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <View style={{marginTop: 64, alignItems: "center"}}>
                <View style={styles.avatarContainer}>
                    <Image 
                        style={styles.avatar}
                        source={(user && user.avatar) ? {uri: user.avatar} : require('../../assets/profile.png')}
                        resizeMode="cover"
                    />
                </View>

                <Text style={styles.name}>Fitness Expert</Text>
            </View>

            <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <Text style={styles.statAmount}>21</Text>
                    <Text style={styles.statTitle}>Posts</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statAmount}>981</Text>
                    <Text style={styles.statTitle}>Followers</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statAmount}>63</Text>
                    <Text style={styles.statTitle}>Following</Text>
                </View>
            </View>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => logout()}
            >
                <Text style={{color:'white'}}>Sign out 🤷</Text>
            </TouchableOpacity>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    
    button:{
        marginTop: 40,
        height: 42,
        width: width* .7,
        // left: width*0.13,
        backgroundColor: "#384C86",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,        
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        top:0
        // backgroundColor: '#fff',
    },
    avatarContainer: {
        shadowColor: "#151734",
        shadowRadius:15,
        shadowOpacity:0.4
    },
    avatar: {
        width: 136,
        height: 136,
        borderRadius: 60,
    },
    name: {
        marginTop: 24,
        fontSize: 18,
        fontWeight: "600"
    },
    statsContainer: {
        flexDirection:"row",
        justifyContent:'center',
        margin:32
    },
    stat: {
        alignItems:'center',
        flex:1
    },
    statAmount: {
        color:"#4F566D",
        fontSize: 18,
        fontWeight: "100"
    },
    statTitle: {
        color: "#C3C5CD",
        fontSize: 12,
        fontWeight: "500",
        marginTop: 4
    },
});

//make this component available to the app
export default ProfileScreen;
