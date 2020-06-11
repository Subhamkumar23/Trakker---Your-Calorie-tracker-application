import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { YellowBox } from 'react-native'
import _ from 'lodash'

import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import {AppLoading} from 'expo'
import {Font} from 'expo-font'
import Providers from './navigation'


const App = () => {

  const [fontLoaded, setFontLoaded ] = useState(false)


  YellowBox.ignoreWarnings(['Setting a timer']);
  const _console = _.clone(console);
  console.warn = message => {
    if (message.indexOf('Setting a timer') <= -1) {
      _console.warn(message);
    }
  };

  const loadAssetsAsync = async () => {
    await Font.loadAsync({
      Avenir: require('./assets/fonts/AvenirLTStd-Roman.otf'),
    })
    setFontLoaded(true);
  };

  // componentDidMount() {
  //   loadAssetsAsync();
  // }
  return (

    <Providers />
  );
}

// class App extends React.Component {
//     state = {
//       isLoadingComplete: false,
//     };



//     render() {

//       // YellowBox.ignoreWarnings(['Setting a timer']);
//       // const _console = _.clone(console);
//       // console.warn = message => {
//       //   if (message.indexOf('Setting a timer') <= -1) {
//       //     _console.warn(message);
//       //   }
//       // };

//       if(!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
//         return (
//           <AppLoading 
//             startAsync = {this._loadResourceAsync}
//             onError = {this._handleLoadingError}
//             onFinish = {this._handleFinishLoading}
//           />
//         );
//       } else {
//         return (
//           <Providers />
//         );
//       }
//     }

//     _loadResourceAsync = async () => {
//       return Promise.all([
//         // Asset.loadAsync([
//         //   require('./assets/icon.png'),
//         // ]),
//         Font.loadAsync({
//           'Avenir': require('./assets/fonts/AvenirLTStd-Roman.otf')
//         }),
//       ]);
//     };

//     _handleFinishLoading = () => {
//       this.setState({ isLoadingComplete: true});
//     };

//     _handleLoadingError = (error) => {
//         console.warn(error);
//     }; 
// }

export default App;