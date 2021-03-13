import React from 'react';
import { View, ImageBackground, DeviceEventEmitter } from 'react-native';

const FriendsMenuScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.TabControlContainer} source={require('assets/images/bg_map.png')} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F5F7',
  },
  TabControlContainer: { position: 'absolute', flex: 1, width: '100%', height: '100%', backgroundColor: '#ff0000' },
};

export default FriendsMenuScreen;
