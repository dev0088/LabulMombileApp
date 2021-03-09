import React from 'react';
import { View, Text } from 'react-native';
import { em } from 'view/common/const';

const SignupScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Forgot Password Screen</Text>
      <Text>Je m’inscris</Text>
      <Text>Rejoigns la communauté Labul</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 16 * em,
  },
};

export default SignupScreen;
