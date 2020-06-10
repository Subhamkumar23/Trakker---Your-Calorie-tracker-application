//import liraries
import React, { Component, useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, FlatList, Modal } from 'react-native';

// import {RootStackScreen } from '../navigation/RootStackNavigator'
// import firebase from '@firebase/app'
import firebase from '../config/Firebase'

import { AuthContext } from '../navigation/AuthProvider'

const {width, height} = Dimensions.get('window');



const HomeScreen = () =>  {

    const { user } = useContext(AuthContext)

    let items = []
    // let data;
    const [data, setData ] = useState(null)
    const [modalVisible , setModalVisible] = useState(false)
    const [what , setWhat] = useState([])


    const retrieveUserData = () => {

        const userData = firebase.database()
            .ref('users/'+user.uid)
            .on('value', snapshot => {
                setData(snapshot.val())

                snapshot.forEach(doc => {
                    console.log("Hi", doc)
                    items.push(doc)
                })

                setWhat(items);
                console.log(items);
                console.log(items[0]);
            });  
        // console.log(data);
    }

    useEffect(() => {
        const unsubscribe = retrieveUserData();
        // initializeFirebase();
        return unsubscribe;
    }, [user.uid]);

    const displayData = () => {
        

        // setModalVisible(true);
    }

    const userProperties = () => {
        return(
            what.map(function( news, i) {
                return(
                    <View key={i}>
                        <Text>{news}</Text>
                    </View>
                )
            })
        )
    };


    const random = ["hello", "ahhh", "assa", "addws"]
    console.log(random)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome user!</Text>
            <Text style={{alignItems:"center"}}>{user.email}</Text>

            <TouchableOpacity
                onPress={displayData}
                style={styles.button}
            >
                <Text style={{color:"#fff"}}>Show User Data</Text>
            </TouchableOpacity>

            <Text>{what.length}</Text>
            
            <View>
                {random.map((item, key) => (
                    <Text key={key}>{item}</Text>
                ))}
            </View>
            {/* <View style={styles.itemsList}>
                {items.map((item, index) => {
                return (
                    <View key={index}>
                        <Text style={styles.itemtext}>Hello {item.name}</Text>
                    </View>
                );
                })}
            </View> */}
        
        </View>


    );
}



// class HomeScreen extends Component {
//     state = {
//         items: []
//     };

    

//     componentDidMount() {

//         this.listenForTasks();
//     }

//     listenForTasks() {
//         let { user } = useContext(AuthContext)

//         firebase.database()
//         .ref('users/' + user.uid)
//         .on('value', snapshot => {
//             var tasks = []

//             snapshot.foeEach(child => {
//                 tasks.push({
//                     name: child.val().name,
//                     key: child.key
//                 });
//             });

//             this.setState({
                                
//             })
//         });
//     }

//     render() {
//         return (
//             <View style={styles.itemsList}>
//                 {this.state.items.map((item, index) => {
//                 return (
//                   <View key={index}>
//                     <Text style={styles.itemtext}>{item.name}</Text>
//                   </View>
//                 );
//                 })}
//             </View>
//         )
//     }
// }

// define your styles
const styles = StyleSheet.create({
    button:{
        marginTop: 40,
        height: 42,
        width: width* .7,
        backgroundColor: "#384C86",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,        
    },
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
    },
    itemsList: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    itemtext: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color:'red'
    }
});

//make this component available to the app
export default HomeScreen;
