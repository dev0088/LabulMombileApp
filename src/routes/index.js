import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoadingScreen from '../view/screens/LoadingScreen';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="loading" hideNavBar component={LoadingScreen} />
        </Scene>
      </Router>
    );
  }
}

export default Routes;
