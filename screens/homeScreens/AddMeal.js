//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Modal, FlatList, TouchableOpacity, Dimensions } from 'react-native';


const {width, height} = Dimensions.get('window');


// create a component
const AddMeal = ({ navigation }) => {
    return (

        // <Modal
        //     animationType="slide"
        //     transparent={true}
        //     visible={true}
        // >
            <View style={{ flex: 1, backgroundColor:'#384C86' }}>
                <View style={styles.modalStyle}>
                <FlatList
                    data={[{"name":'Breakfast'}, 
                            {"name":'Lunch'},
                            {"name":'Dinner'}]}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={
                    ({ item }) =>
                        <TouchableOpacity 
                            onPress={() => {
                                // setLifeStyle(item.name);
                                // hideModal();
                                navigation.navigate('Extra')
                            }}
                            style={styles.lifeStyleBtn}
                        >
                            <Text style={{color: '#97A8D5', fontWeight:'bold', fontSize:25}}>
                            {item.name}
                            </Text>
                        </TouchableOpacity>
                    }
                />
                </View>
            </View>
        // </Modal>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
    lifeStyleBtn: {
        marginTop: 30,
        height: 60,
        width: width*0.7,
        backgroundColor: "#6178B8",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        padding:20,
        shadowColor:'#000',
        shadowOffset: {
            width:200,
            height: 10,
        },
        shadowOpacity:0.5,
        shadowRadius: 10,
        elevation: 5
    },
    modalStyle: {
        flex: 1, 
        paddingTop: 40, 
        backgroundColor:'#384C86', 
        borderRadius: 20, 
        width: width*.84, 
        marginLeft: width*0.08,
        marginRight: width*0.08,
        marginTop: height*0.2,
        marginBottom: height*0.1,
        alignItems:'center',
        justifyContent:'center'
    },
});

//make this component available to the app
export default AddMeal;
