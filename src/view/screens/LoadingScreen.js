import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { em } from '../common/const';
import LinearGradient from 'react-native-linear-gradient';

const LoadingScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {
    }, 500);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>HABUL</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40 * em,
  },
};

export default LoadingScreen;
