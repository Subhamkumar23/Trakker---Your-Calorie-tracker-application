import React, { Component } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Dimensions, ActivityIndicator } from "react-native";
import { List, ListItem, SearchBar } from 'react-native-elements'

import firebase from '../../config/Firebase'

const {width, height} = Dimensions.get('window');

import foodData from './FoodData'

export default class FlatListDemo extends Component {
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
    // this.makeRemoteRequest();
    this.listenForTasks();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });
    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
        console.log(this.state.data);
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  listenForTasks() {
    const user = firebase.auth().currentUser;

    console.log(user.uid)
    this.setState({ loading: true });
    firebase.database()
    .ref('users/' + user.uid)
    .on('value', snapshot => {
        // var tasks = []

        this.setState({ data: snapshot.val()})
        // console.log("Data set", this.state.data)
        // console.log(this.state.data["age"])

        // tasks = Object.values(this.state.data)
        // console.log(tasks)
        // this.setState({data: tasks})
        console.log("Here",this.state.data)
    });
  }

  updateDatabase(calorie) {
    const user = firebase.auth().currentUser;


    console.log(calorie)
    console.log(this.state.data["calorieConsumed"])
    const updatedCalorie = calorie + parseInt(this.state.data["calorieConsumed"])
    firebase.database().ref('users/' + user.uid)
    .update({
      calorieConsumed: updatedCalorie,
      calorieRequired: parseInt(this.state.data["calorieRequired"]) - updatedCalorie
    })
    // .then(() => alert('success'));
  }

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: "86%",
          backgroundColor: "#CED0CE",
          marginLeft: "14%"
        }}
      />
    );
  };

  renderHeader = () => {
    return <SearchBar placeholder="Type Here..." lightTheme round />;
  };

  renderFooter = () => {
    if (!this.state.loading) return null;

    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  render() {
    return (
        <View style={styles.container}>
            <FlatList
                data={foodData}
                keyExtractor={item => item.ID}
                ItemSeparatorComponent={this.renderSeparator}
                ListHeaderComponent={this.renderHeader}
                ListFooterComponent={this.renderFooter}
                renderItem={
                    ({ item }) => 
                    // <ListItem
                    //     // roundAvatar
                    //     // title={`${item.name.first} ${item.name.last}`}
                    //     // subtitle={item.email}
                    //     // avatar={{ uri: item.picture.thumbnail }}
                    //     title={item.Food}
                    //     subtitle={item.size}
                    //     onPress={this.updateDatabase(item.calorie)}
                    // />
                    <TouchableOpacity
                      style={{padding: 10}}
                      onPress={this.updateDatabase(item.calorie)}
                    >
                      <Text>{item.Food}</Text>
                      <Text>{item.size}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 30,
        backgroundColor: '#fff',
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
// export default FlatListDemo;