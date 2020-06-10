import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'


import HomeScreen from '../HomeScreen'
import ProfileScreen from './ProfileScreen'
import RandomScreen from './RandomScreen'

const AppStack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator();


const AppStackScreen = ({navigator}) => {
    return(
        <AppStack.Navigator headerMode="none">
            <AppStack.Screen 
                name="Home"
                component = {BottomTabNavigator}
            />
        </AppStack.Navigator>
    )
}


const BottomTabNavigator = () =>  {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#161F2D"
      backgroundColor="#fff"
      barStyle={{ backgroundColor: '#694fad' }}
      options= {{
          
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Exercises"
        component={RandomScreen}
        options={{
          tabBarLabel: 'Exercises',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="football" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Posts"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Posts',
          tabBarIcon: ({ color }) => (
            <Ionicons 
                name="ios-add-circle" 
                color={color} 
                size={26} 
                // style={{
                //     shadowColor: "#E9446A",
                //     shadowOffset:{width: 0, height: 0},
                //     shadowRadius: 10,
                //     shadowOpacity: 0.3
                // }}    
            />
          ),
        }}
      />
      <Tab.Screen
        name="Connections"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Connections',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStackScreen