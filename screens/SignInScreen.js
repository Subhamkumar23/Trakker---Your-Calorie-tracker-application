//import liraries
import React, { Component, useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Platform, Image, Dimensions, StatusBar, Alert} from 'react-native';

import { useFonts } from '@use-expo/font'
import * as Animatable from 'react-native-animatable'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'

import Firebase from '../config/Firebase'
import { AuthContext } from '../navigation/AuthProvider'

// import Users from '../model/users'

const {width, height} = Dimensions.get('window');


// create a component
const SignInScreen = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        'Avenir': require('../assets/fonts/AvenirLTStd-Roman.otf')
    });

    const { user, login } = useContext(AuthContext);
    // const { signIn } = useContext(AuthContext);

    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        errMsg: null,
        isValidUser: true,
        isValidPassword: true,
    });

    const textInputChange = (val) => {
        // console.log(val)
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if(reg.test(val) === true)
        {
            setData({
                ...data,
                email:val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else {
            setData({
                ...data,
                email:val,
                check_textInputChange: false,
                isValidUser: false
            });
        }
    }

    const handlePasswordChange = (val) => {
        if( val.trim().length >= 8) {
            setData({
                ...data,
                password:val,
                isValidPassword: true
            });
        } else {
            setData({
                ...data,
                password:val,
                isValidPassword: false
            });
        }
        
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }
    const handleValidUser = (val) => {
        if(val.length >= 4) {
            setData({
                ...data,
                isValidUser: true
            })
        } else {
            setData({
                ...data,
                isValidUser: false
            })
        }
    }

    // const loginHandle = (email, password) => {
        
    //     const foundUser = Users.filter( item => {
    //         return email = item.username && password == item.password;
    //     });

    //     if( data.email.length == 0 || data.password.length == 0) {
    //         Alert.alert('Wrong Input:', 'Username or password field cannot be empty.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }

    //     if( foundUser.length  == 0) {
    //         Alert.alert('Invalid User:', 'Username or password incorrect.', [
    //             {text: 'Okay'}
    //         ]);
    //         return;
    //     }
    //     signIn(foundUser);
    // }

    // console.log(data.errMsg);
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#384C86" barStyle="default"/>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <Image
                    source = {require('../assets/header.png')}
                    style={{flex:1, ...styles.headerImg}}
                />
                <Image
                    source = {require('../assets/logo.png')}
                    style={{flex:1, ...styles.logo}}
                />

                <View style={styles.form}>
                    <Text style={styles.text_footer}>Email</Text>
                    <View style={styles.action}>
                        <FontAwesome 
                            name="user-o"
                            color= "#fff"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Your Email"
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => textInputChange(val)}
                            // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
                        />
                        {data.check_textInputChange ? 
                        <Animatable.View
                            animation = "bounceIn"
                        >
                            <Feather 
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null }
                    </View>

                    {data.isValidUser ? null :
                    <Animatable.View
                        animation="fadeInLeft"
                        duration={500}
                        style={{marginTop:10}}
                    >
                        <Text style={styles.errorMsg}> Enter a valid Email format </Text>
                    </Animatable.View>
                    }

                    <Text style={[styles.text_footer, {marginTop:35}]}>Password</Text>
                    <View style={styles.action}>
                        <Feather 
                            name="lock"
                            color= "#fff"
                            size={20}
                        />
                        <TextInput 
                            placeholder="Your Password"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            style={styles.textInput}
                            autoCapitalize="none"
                            onChangeText={(val) => handlePasswordChange(val)} 
                        />
                        <TouchableOpacity
                            onPress={updateSecureTextEntry}
                        >
                            {data.secureTextEntry ?
                            <Feather 
                                name="eye-off"
                                color="#eee"
                                size={20}
                            />
                            :
                            <Feather 
                                name="eye"
                                color="#eee"
                                size={20}
                            />
                            }
                        </TouchableOpacity>
                    </View>

                    {/* { data.isValidPassword ? null : 
                    <Animatable.View
                        animation="fadeInLeft"
                        duration={500}
                        style={{marginTop:10}}
                    >
                        <Text style={styles.errorMsg}> Password must be 8 characters long </Text>
                    </Animatable.View>
                    } */}
                    {/* <View style={styles.errorMsg}>
                        {!(user.emailVerified) && <Text style={styles.error}>Please Verify your email</Text>}
                        <Text style={styles.error}>Please Verify your email</Text>
                    </View> */}
                    
                    <TouchableOpacity 
                        style={styles.startBtn}
                        onPress={ () => login(data.email, data.password, data.errMsg)}
                        // onPress={() => loginHandle(data.email, data.password)}
                    >
                        
                        <Text style={{color: "#384C86", fontFamily:'Avenir', fontWeight:"500", fontSize:20}}>Sign In</Text>
                    </TouchableOpacity>

                </View>
            </Animatable.View>
        </View>
    );
}

// define your styles
const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#384C86'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    headerImg: {
        flex: 1,
        position: 'absolute',
        top: -720,
        right: -420,
    },
    footer: {
        flex: 3,
        // backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    form: {
        flex: 1,
        // position:"absolute"
        top: height*0.24
    },
    logo: {
        flex: 1,
        position: "absolute",
        height: height*0.2,
        width: width*.64,
        left:5,
        top: height*0.09
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    text_footer: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'Avenir'
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : 0,
        paddingLeft: 10,
        color: '#fff',
        fontSize: 20
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    error: {
        color: "#E9446A",
        fontSize: 13,
        fontWeight: "600",
        textAlign: 'center'
    },
    startBtn: {
        marginTop: 30,
        height: 42,
        width: width* .7,
        left: width*0.13,
        backgroundColor: "#FFFFFF",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });

//make this component available to the app
export default SignInScreen;
