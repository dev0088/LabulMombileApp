import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';
import CircularButton from 'view/components/CircularButton';
import { Actions } from 'react-native-router-flux';

const MabulHomeScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('assets/images/img_mabul_logo.png')} style={styles.logoImage} />
        <Image source={require('assets/images/img_mabul_label.png')} style={styles.logoLabel} />
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonFirstRow}>
          <CircularButton
            onPress={() => {
              Actions.mabulOrganize();
            }}
          />
          <CircularButton
            type="sell"
            onPress={() => {
              Actions.mabulSell();
            }}
          />
        </View>
        <View style={styles.buttonSecondRow}>
          <CircularButton
            type="need"
            onPress={() => {
              Actions.mabulNeed();
            }}
          />
          <CircularButton
            type="search"
            onPress={() => {
              Actions.mabulSearch();
            }}
          />
          <CircularButton
            type="give"
            onPress={() => {
              Actions.mabulGive();
            }}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            Actions.pop();
          }}>
          <Image source={require('assets/images/btn_mabul_close.png')} style={styles.closeButton} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#40cdde',
    paddingBottom: 16 * em,
  },
  logoContainer: { flex: 0.5, width: '100%', alignItems: 'center', justifyContent: 'center' },
  logoImage: { width: 84 * em, resizeMode: 'contain' },
  logoLabel: { width: 125 * em, resizeMode: 'contain', marginTop: 18 * em },
  buttonsContainer: {
    flex: 0.5,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16 * em,
  },
  buttonFirstRow: { width: '52%', flexDirection: 'row', justifyContent: 'space-between' },
  buttonSecondRow: { width: '80%', flexDirection: 'row', justifyContent: 'space-between' },
  closeButton: { width: 48 * em, resizeMode: 'contain', marginTop: 18 * em },
};

export default MabulHomeScreen;