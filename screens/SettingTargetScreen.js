//import liraries
import React, { Component, useState, useContext } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions } from 'react-native';

import { useFonts } from '@use-expo/font'
import { Item, Input, Icon } from 'native-base'
import { Hideo, Fumi } from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
const {width, height} = Dimensions.get('window');

// import * as firebase from 'firebase'
import firebase from '../config/Firebase'
import { AuthContext } from '../navigation/AuthProvider'

// create a component
const SettingTargetScreen = ({ route, navigation}) => {

    let [fontsLoaded] = useFonts({
        'Avenir': require('../assets/fonts/AvenirLTStd-Roman.otf')
    });

    const { userHeight } = route.params;
    const { weight } = route.params;
    const { name } = route.params;
    const { age } = route.params;
    const { gender } = route.params;
    const { lifeStyle } = route.params;

    const { user, setNewUser } = useContext(AuthContext)

    const [targetWeight, setTargetWeight ] = useState('')
    const [duration, setDuration ] = useState('')

    // const [calorieRequired, setCalorieRequired] = useState(0)

    // console.log(userHeight);

    const userBMI = weight / Math.pow(userHeight/100, 2);

    const updateUserData = () => {

        console.log(user.uid);
        try {

            const calorieRequired = required_calories_perDay();
            console.log("calorieRequired", calorieRequired)
            firebase.database().ref('users/' + user.uid)
            .update({
                name: name,
                age: age,
                gender: gender,
                height: userHeight,
                weight: weight,
                lifeStyle: lifeStyle,
                targetWeight: targetWeight,
                duration: duration,
                calorieRequired: calorieRequired
            })
            .then(function(snapshot) {
                console.log('snapshot', snapshot);
                setNewUser(false);
            });

        } catch(err) {
            alert(err.message)
        }
    }

    const required_calories_perDay = () => {
        let BMR
        if(gender === "male")
        {
            BMR = 10 * weight + 6.25 * userHeight - 5 * age + 5
        } else {
            BMR = 10 * weight + 6.25 * userHeight - 5 * age - 161
        }
        console.log("BMR", BMR);
        let MC
        switch (lifeStyle) {
            case "Sedentary":
                MC = BMR * 1.2
                break;
            case "Light":
                MC = BMR * 1.375
                break;
            case "Moderate":
                MC = BMR * 1.465
                break;
            case "Intense":
                MC = BMR * 1.6
                break;
            case "Hard Exercise":
                MC = BMR * 1.75
                break;
        }
        console.log("MC", MC)
        const CBW = targetWeight - weight;
        console.log("CBW", CBW)
        const calorie_per_day = (CBW * 7716.17928) / (duration * 30)
        console.log("calorie", calorie_per_day)

        const x = MC + calorie_per_day
        console.log("x", x)
        console.log(MC+calorie_per_day)
        // console.log("required",calorieRequired)

        return x;
    }

    return (
        <View style={styles.container}>
            <Image
                source = {require('../assets/header.png')}
                style={{flex:1, ...styles.headerImg}}
                // resizeMode="contain"
            />

            <View style={styles.form}>
                <Text style={styles.header}>BMI: <Text style={{color:'#fff'}}>{userBMI.toFixed(2)}</Text></Text>
                <Text style={styles.header}>Body fat percent: <Text style={{color:'#fff'}}>{userBMI.toFixed(2)}</Text></Text>

                <Text style={styles.separator}>______________</Text>

                <View style={{flexDirection:'row'}}>
                    <Text style={styles.targetText}>Target Body Weight : </Text>
                    <TextInput 
                        placeholder="XX"
                        style={styles.targetInput}
                        keyboardType="number-pad"   
                        onChangeText={(text) => {setTargetWeight(text)}}
                    />
                </View>

                <Text style={styles.targetText}>Duration</Text>
                <View style={styles.target}>
                    
                    <TouchableOpacity 
                        underlayColor={'gray'}
                        style={[styles.durationBtn, {backgroundColor:'#D3DAEF'}]}
                        onPress={() => setDuration(12)}
                    >
                        <Text style={{color: '#fff', fontWeight:'bold', fontSize:20}}>EASY</Text>
                        <Text style={{color:'#fff'}}>12 Months</Text>
                        <Image
                            source = {require('../assets/easy.png')}
                            style={styles.durationImg}
                            resizeMode="contain"
                        />
                        {/* //#97A8D5  #6178B8*/}

                    </TouchableOpacity>


                    <TouchableOpacity 
                        underlayColor={'gray'}
                        style={[styles.durationBtn, {backgroundColor:'#97A8D5'}]}
                        onPress={() => setDuration(6)}
                    >
                        <Text style={{color: '#fff', fontWeight:'bold', fontSize:20}}>MODERATE</Text>
                        <Text style={{color:'#fff'}}>6 Months</Text>
                        <Image
                            source = {require('../assets/moderate.png')}
                            style={styles.durationImg}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>


                    <TouchableOpacity 
                        underlayColor={'gray'}
                        style={[styles.durationBtn, {backgroundColor:'#6178B8'}]}
                        onPress={() => setDuration(3)}
                    >
                        <Text style={{color: '#fff', fontWeight:'bold', fontSize:20}}>TOUGH</Text>
                        <Text style={{color:'#fff'}}>3 Months</Text>
                        <Image
                            source = {require('../assets/tough.png')}
                            style={styles.durationImg}
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                </View>


                <TouchableOpacity
                    underlayColor={'gray'} 
                    style={styles.startBtn}
                    onPress={updateUserData}
                >
                    <Text style={{color: '#fff', fontWeight:'bold', fontSize:20}}>LETS GO</Text>
                </TouchableOpacity>

                {/* <Image
                    source = {require('../assets/logo.png')}
                    style={styles.logo}
                    resizeMode="contain"
                /> */}
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    action: {
        paddingBottom: 5,
        width:width*.9,
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: '#384C86'
    },
    ageText: {
        color: '#97A8D5',
        fontSize: 25,
        marginTop: 5,
        // marginLeft: -30
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#384C86',
    },
    durationBtn: {
        marginTop: 10,
        height: width*0.2,
        width: width*.8,
        backgroundColor: "#6178B8",
        borderRadius: 10,
        padding:15,
        shadowColor:'#000',
        shadowOffset: {
            width:200,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
        elevation: 5
    },
    durationImg: {
        marginTop:-width*0.16
    },
    form: {
        flex: 1,
        top: height*0.18,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center'
    },
    header: {
        color: '#97A8D5',
        fontFamily:'Avenir',
        fontSize: 18,
    },

    headerImg: {
        // flex: 1,
        position: 'absolute',
        top: -720,
        left: -380,
    },
    logo: {
        flex:1,
        // top:0,
        height: 10,
        width: width*.5,
        // position:"absolute",
        // left: width*.15,
        backgroundColor:'red',
        // bottom: width*0.1,
    },
    startBtn: {
        marginTop: 20,
        height: 40,
        width: width*.4,
        left:width*0.25,
        backgroundColor: '#6178B8',
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        shadowColor:'#000',
        shadowOffset: {
            width:200,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
        elevation: 5
    },
    separator: {
        color:'#97A8D5',
        fontSize:20
    },
    target: {
        flexDirection:'column',
    }, 
    targetInput: {
        padding: 10,
        height: 60,
        fontSize: 25,
        color: '#fff',
        borderBottomWidth: .5,
        borderBottomColor: '#97A8D5'
    },
    targetText: {
        color: '#D3DAEF',
        fontSize: 20,
        marginTop: 25,
        fontWeight:'bold'
    }, 
});

//make this component available to the app
export default SettingTargetScreen;
