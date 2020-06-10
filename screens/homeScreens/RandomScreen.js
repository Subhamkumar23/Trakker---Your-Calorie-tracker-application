import React, { Component } from 'react';

import { StyleSheet, View ,SafeAreaView,Text ,TouchableOpacity } from 'react-native';
import { Dimensions } from "react-native";
import { ProgressChart,} from "react-native-chart-kit";
import { Feather } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;


const data = {
  labels: ["Swim"], // optional
  data: [0.4]
};

const chartConfig = {
  backgroundColor: 'white',
  backgroundGradientFrom: "white",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "white",
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false // optional
};


const RandomScreen = () => {
    return (

      <SafeAreaView style={styles.container}>
        <View style={styles.ViewUp} >
            <ProgressChart
            data={data}
            width={screenWidth}
            height={200}
            strokeWidth={18}
            radius={75}
            chartConfig={chartConfig}
            hideLegend={false}
            />
        </View>
        
        <View style={styles.CircleView}>
            <View style={{justifyContent:'center', alignItems:'center'}}>
                <Text style={styles.textcircle}> 51g </Text>
                <Text style={styles.textcircle}> CARBS </Text>
            </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.textcircle}> 55g </Text>
            <Text style={styles.textcircle}> PROTEIN </Text>
        </View>
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.textcircle}> 35g </Text>
            <Text style={styles.textcircle}> FATS </Text>
        </View>
        </View>


        <View style={styles.ViewDown} >
            <TouchableOpacity
            style={{
            borderWidth:1,
            borderColor:'rgba(0,0,0,0.2)',
            alignItems:'center',
            justifyContent:'center',
            width:80,
            height:80,
            backgroundColor:'blue',
            borderRadius:40,
            }}
            >
                <Feather name="plus" size={32} color="white" />
            </TouchableOpacity>
        </View>

      </SafeAreaView>
    );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //margin: 10,
    marginTop:30,

  },

  CircleView: {
    flex:1,
    flexDirection:'row',
    width: screenWidth/2,
        //height: 500,
    //borderRadius: 150/2,
        backgroundColor: 'red',
    alignItems: 'center',
    justifyContent:'space-between',
    borderBottomLeftRadius: screenWidth,
    borderBottomRightRadius: screenWidth,
    transform: [
        {scaleX: 2}
    ]
},

textcircle:{
    fontSize:14,
    transform: [
        {scaleX: 0.75}
    ],
    color:'white',
    margin:5,
},

ViewUp: {
    flex:2,
    // flexDirection:"row",
    // marginTop: 20,
    width: screenWidth,
    // height: 500,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent:'center',
    transform: [
        {scaleX: 1}
    ]
},

ViewDown: {
    flex:2,
    marginTop: 20,
    width: screenWidth,
    height: 500,
    // backgroundColor: '#00BCD4',
    alignItems:'center',
    transform: [
        {scaleX: 1}
    ]
    }
});

export default RandomScreen;