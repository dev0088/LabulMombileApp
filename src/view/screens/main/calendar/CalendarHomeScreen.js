import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em } from 'view/common/const';

const CalendarHomeScreen = () => {
  return (
    <View style={styles.container}>
      <TitleText text="Mon calendrier" />
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

export default CalendarHomeScreen;