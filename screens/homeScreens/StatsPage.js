import React, { Component, useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet,Button, TouchableOpacity,SafeAreaView, Dimensions, FlatList, Modal, Image, ScrollView } from 'react-native';

import { List, ListItem, SearchBar } from 'react-native-elements'
import { ProgressChart,} from "react-native-chart-kit";
import { LineChart} from "react-native-chart-kit";
import { Feather } from '@expo/vector-icons';
import * as firebase from 'firebase'


import { AuthContext } from '../../navigation/AuthProvider'
import Firebase from '../../config/Firebase';

const {width, height} = Dimensions.get('window');
const screenWidth = Dimensions.get("window").width;


const labels = [
    'Label 1',
    'Label 2',
    'Label 3',
    'Label 4',
    'Label 5',
    'Label 6',
];
const data = [
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
    Math.random() * 100,
];

class StatsPage extends Component {
    constructor(props) {
        super(props);
   
        this.state = {
          loading: false,
          data: [],
          page: 1,
          seed: 1,
          error: null,
          refreshing: false,
        };
      }

   

    componentDidMount() {

        this.listenForTasks();
    }

    listenForTasks() {
        const user = firebase.auth().currentUser;

        console.log(user.uid)
        this.setState({ loading: true });
        firebase.database()
        .ref('users/' + user.uid)
        .once('value', snapshot => {
            var tasks = []

            this.setState({ data: snapshot.val()})
            // console.log("Data set", this.state.data)
            // console.log(this.state.data["age"])
            // snapshot.val().forEach(child => {
            //     tasks.push({
            //         name: child.val().name,
            //         key: child.key
            //     });
            // });
            // tasks = Object.values(this.state.data)
            // console.log(tasks)
        });
    }

    render() {
        return (
            <View style={styles.fullContainer}>
                <View>
                    <ScrollView style={styles.mainview}>
                        <SafeAreaView style={{backgroundColor:'skyblue'}}>
                            <View style={styles.oval}>
                                <Text style={styles.ovaltext}> Statistics </Text>
                            </View>

                            <View style={styles.middle}>
                                <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                    <View>
                                        <Text style= {{color:'blue',marginHorizontal:10,fontSize:20}}> Daily Progress </Text>
                                    </View>
                                    <View style= {{flexDirection:'row',justifyContent:'space-between',}}>
                                        <Text style= {{backgroundColor:'white',marginRight:5,padding:5,borderRadius:10}}> 1W </Text>
                                        <Text style= {{backgroundColor:'white',marginRight:15,padding:5,borderRadius:10}}> 1M </Text>
                                    </View>
                                </View>
                                <View style={{alignItems:'center',margin:10,}}>
                                    <LineChart
                                    data={{ labels: labels,
                                    datasets: [{ data: data }],}}
                                    width={Dimensions.get('window').width -20}
                                    height={220}
                                    chartConfig={{
                                    backgroundColor: 'white',
                                    backgroundGradientFrom: 'white',
                                    backgroundGradientTo: '#FFF',
                                    decimalPlaces: 2, // optional, defaults to 2dp
                                    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                                    style: { borderRadius: 16, },
                                    //alignSelf:'center',
                                    propsForDots: { r: '6', strokeWidth: '2', stroke: '#ffa726', }, }}
                                    bezier
                                    style={{ marginVertical: 5, borderRadius: 15, }}
                                    />
                                </View>
                            </View>
                            <View style={styles.last}>
                                <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'white',borderRadius:10,borderColor:'blue',borderWidth:1,margin:10}}>
                                    <View style={{marginRight:Dimensions.get('window').width -230}}>
                                        <Text style={{color:'blue',paddingLeft:20,paddingTop:10}}>Total Calories : 200</Text>
                                        <Text style={{color:'blue',paddingLeft:20}}>No. of meals : 10</Text>
                                        <Text style={{color:'blue',paddingLeft:20,paddingBottom:10}}>Calories Burnt : 180</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:'blue',paddingRight:10,fontSize:17,margin:10}}>10.6.20 </Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'white',borderRadius:10,borderColor:'blue',borderWidth:1,margin:10}}>
                                    <View style={{marginRight:Dimensions.get('window').width -230}}>
                                        <Text style={{color:'blue',paddingLeft:20,paddingTop:10}}>Total Calories : 200</Text>
                                        <Text style={{color:'blue',paddingLeft:20}}>No. of meals : 10</Text>
                                        <Text style={{color:'blue',paddingLeft:20,paddingBottom:10}}>Calories Burnt : 180</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:'blue',paddingRight:10,fontSize:17,margin:10}}>10.6.20 </Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'white',borderRadius:10,borderColor:'blue',borderWidth:1,margin:10}}>
                                    <View style={{marginRight:Dimensions.get('window').width -230}}>
                                        <Text style={{color:'blue',paddingLeft:20,paddingTop:10}}>Total Calories : 200</Text>
                                        <Text style={{color:'blue',paddingLeft:20}}>No. of meals : 10</Text>
                                        <Text style={{color:'blue',paddingLeft:20,paddingBottom:10}}>Calories Burnt : 180</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:'blue',paddingRight:10,fontSize:17,margin:10}}>10.6.20 </Text>
                                    </View>
                                </View>
                                <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'white',borderRadius:10,borderColor:'blue',borderWidth:1,margin:10}}>
                                    <View style={{marginRight:Dimensions.get('window').width -230}}>
                                        <Text style={{color:'blue',paddingLeft:20,paddingTop:10}}>Total Calories : 200</Text>
                                        <Text style={{color:'blue',paddingLeft:20}}>No. of meals : 10</Text>
                                        <Text style={{color:'blue',paddingLeft:20 ,paddingBottom:10}}>Calories Burnt : 180</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:'blue',paddingRight:10,fontSize:17,margin:10}}>10.6.20 </Text>
                                    </View>
                                </View>

                                <View style={{flexDirection:'row',justifyContent:'center',backgroundColor:'white',borderRadius:10,borderColor:'blue',borderWidth:1,margin:10}}>
                                    <View style={{marginRight:Dimensions.get('window').width -230}}>
                                        <Text style={{color:'blue',paddingLeft:20,paddingTop:10}}>Total Calories : 200</Text>
                                        <Text style={{color:'blue',paddingLeft:20}}>No. of meals : 10</Text>
                                        <Text style={{color:'blue',paddingLeft:20,paddingBottom:10}}>Calories Burnt : 180</Text>
                                    </View>
                                    <View>
                                        <Text style={{color:'blue',paddingRight:10,fontSize:17,margin:10}}>10.6.20 </Text>
                                    </View>
                                </View>

                            </View>
                        </SafeAreaView>
                    </ScrollView>
                </View>
            </View>

        );
    }
}

// define your styles
const styles = StyleSheet.create({

    background: { // this shape is a circle
        borderRadius: width,
        width: width * 2,
        height: width * 2,
        marginLeft: -(width / 2),
        position: 'absolute',
        bottom: 0,
        overflow: 'hidden',
        backgroundColor:'#E4EBFF'
    },
    burntCalorie: {
        top:height*0.15,
        left: width*0.35,
        alignItems:'center',
        justifyContent:'center'
    },
    chart: {
        position:"absolute",
        // top: height*0.06,
        left:width*0.1,
       
    },
    container: {
        alignSelf: 'center',
        width: width,
        overflow: 'hidden',
        height: width / 1
    },
    compositionTab: {
        position:'absolute',
        top: height*0.36,
        flexDirection:'row',
        justifyContent:'center',
        margin: 32
    },
    composition: {
        flex: 1,
        alignItems:'center'
    },
    fullContainer: {
        backgroundColor:'#E4EBFF',
        flex:1,
        alignItems:'center',
        // justifyContent:'center'
    },
    glasses: {
        flexDirection:'row',
        backgroundColor:'#eeea',
        marginTop: 10
    },
    image: {
        height: width / 1,
        width: width,
        position: 'absolute',
        bottom: 0,
        marginLeft: width / 2,
        backgroundColor: '#4B6AFC',
        alignItems:'center',
        justifyContent:'center'
    },
    leftCalorie: {
        top:height*0.2,
        left: width*0.02,
        // alignItems:'center',
        justifyContent:'center'
    },
    plus: {
        top:-height*0.05,
        shadowColor:'#000',
        shadowOffset: {
            width:200,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
        elevation: 5
    },
    trackWater: {
        marginTop: -15,
        marginLeft: -20,
        // backgroundColor: '#336699aa',
        width: width*0.8,
        height: height*0.18,
        padding: 10
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
    mainview:{
        flex:1,
        //alignItems:'center',
        //justifyContent:'center',
        backgroundColor:'skyblue',

    },

    oval:{
        flex:1,
        margin:30,
        width:200,
        height:90,
        alignSelf:'center',
        justifyContent:'center',
        backgroundColor:'blue',
        borderBottomLeftRadius:100,
        borderBottomRightRadius:100,
        transform: [
            {scaleX: 2}
        ]
    },
    ovaltext:{
        fontSize:45,
        color:'white',
        //fontWeight:'bold',
        transform: [
            {scaleX: 0.5}
        ]

    },

    middle:{
        flex:3,


    },

    last:{
        flex:2,
    //alignItems:'center',

    },


});

//make this component available to the app
export default StatsPage;