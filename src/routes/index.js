import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoadingScreen from '../view/screens/LoadingScreen';
import HomeScreen from '../view/screens/main/HomeScreen';
import LoginScreen from '../view/screens/main/account/LoginScreen';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="loading" hideNavBar component={LoadingScreen} />
          <Scene key="home" hideNavBar component={HomeScreen} />
          <Scene key="login" hideNavBar component={LoginScreen} />
        </Scene>
      </Router>
    );
  }
}

export default Routes;
