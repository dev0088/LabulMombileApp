import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { em } from '../common/const';
import LinearGradient from 'react-native-linear-gradient';

const LoadingScreen = (props) => {
  useEffect(() => {
    setTimeout(() => {}, 500);
  }, []);

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0.5, y: 0.0 }}
        end={{ x: 0.5, y: 1.0 }}
        useAngle={true}
        angle={180}
        colors={['#64E4F4', '#4BD8E9']}
        style={styles.linearGradient}>
        <Text>HABUL</Text>
      </LinearGradient>
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
  linearGradient: {
    flex: 1,
    width: '100%',
  },
};

export default LoadingScreen;
