import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em } from 'view/common/const';

const CreateAccountMenuScreen = () => {
  return (
    <View style={styles.container}>
      <TitleText text="Qui je suis?" />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#78f3f3',
  },
};

export default CreateAccountMenuScreen;
