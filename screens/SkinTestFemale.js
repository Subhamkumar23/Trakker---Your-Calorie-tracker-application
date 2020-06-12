//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Dimensions, TouchableHighlight } from 'react-native';
import { useFonts } from '@use-expo/font'
import { Item, Input, Icon } from 'native-base'
import { Hideo, Fumi } from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
const {width, height} = Dimensions.get('window');

// create a component
const SkinTestMale = ({ navigation }) => {

    let [fontsLoaded] = useFonts({
        'Avenir': require('../assets/fonts/AvenirLTStd-Roman.otf')
    });


    return (
        <View style={styles.container}>

            <View style={styles.form}>
                <View>
                    <Text style={styles.header}>Why body fat percentage ?</Text>
                    <Text style={styles.description}>Body Mass Index only can't be considered an accurate measure of one's health and so body fat percentage along with BMI is a better tool to scale the overall fitness.</Text>
                </View>

                <View style={styles.body}>
                    <Image 
                        source={require('../assets/femalePerson.png')}
                        style={styles.img}
                    />

                    <View style={{margin: 5, marginLeft:10}}>
                        <Image 
                            source={require('../assets/calipers.png')}
                        />
                        <Text>STEPS</Text>

                        <View style={{}}>
                            <Text style={styles.instruction}>1. Using the tips of your thumb and {"\n"}forefinger on one hand, pinch the {"\n"}skin in the location to be measured</Text>
                            <Text style={styles.instruction}>2. Once the skin is pinched, pull the {"\n"}skin away from the muscle</Text>
                            <Text style={styles.instruction}>3. With your opposing hand,{"\n"} measure the thickness of the {"\n"}skinfold with the caliper</Text>
                            <Text style={styles.instruction}>4. Note caliper reading, then{"\n"} release caliper and skinfold</Text>
                        </View>
                    </View>
                    
                </View>

                <TouchableOpacity
                    // onPress={}
                    style={styles.startBtn}
                >
                    <Text style={{color:'#fff', fontSize: 18, fontWeight:'bold'}}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    
    body: {
        marginTop: 30,
        // left: 10,
        flexDirection:'row',
        width: width
    },
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#7C9DFDaa',
    },
    description: {
        color:'#fff',
        fontSize: 16,
        fontFamily:'Avenir',
        marginTop: 10,
        lineHeight: 20
    },
    form: {
        flex: 1,
        top: height*0.08,
        position:'absolute',
        // justifyContent: 'center',
        // alignItems: 'center',
        margin: 10,
    },  
    header: {
        color: '#2653D3',
        fontFamily:'Avenir',
        fontSize: 20,
    },
    instruction: {
        color:'#fff',
        fontSize: 14,
        fontFamily:'Avenir',
        marginTop: 5,
    },
    nameInput: {
        marginTop: 30,
        padding: 5,
        backgroundColor: '#97A8D5' ,
        borderRadius: 20,
        color: '#fff',
        fontWeight: "100",
        width:width*.9,
        fontSize: 20
    },
    startBtn: {
        marginTop: 30,
        marginLeft: 100,
        height: 45,
        width: width*.4,
        backgroundColor: "#2653D3",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 50,
        padding: 10,
        shadowColor:'#000',
        shadowOffset: {
            width:200,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
        elevation: 5
    },
});

//make this component available to the app
export default SkinTestMale;
