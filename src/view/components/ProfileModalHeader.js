import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { em } from 'view/common/const';
import CommonText from './CommonText';
import TitleText from './TitleText';

const ProfileModalHeader = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <CommonText text={'Annuler'} style={styles.btn} onPress={() => props.onCancelPress()} />
      <TitleText text={props.title} style={styles.title} />
      <CommonText text={'Terminer'} color={'#40CDDE'} style={styles.btn} onPress={() => props.onFinishPress()} />
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    backgroundColor: '#ffffff',
  },
  btn: {
    lineHeight: 18 * em,
  },
  title: {
    fontSize: 16 * em,
    fontWeight: 'bold',
    lineHeight: 19 * em,
  },
};

export default ProfileModalHeader;
