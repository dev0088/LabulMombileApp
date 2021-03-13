import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';
import CommonText from './CommonText';

const ProfileCommonCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <Image source={props.icon} style={styles.icon} />
        <CommonText text={props.caption} style={styles.caption} color={'#1E2D60'} />
      </View>
    </TouchableOpacity>
  );
};
const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15 * em,
    width: 150 * em,
    height: 92 * em,
    fontWeight: '200',
    elevation: 1,
    alignItems: 'center',
    shadowColor: 'black',
  },
  icon: {
    marginTop: 15 * em,
    height: 38 * em,
    width: 38 * em,
  },
  caption: {
    marginTop: 5 * em,
    textAlign: 'center',
  },
};
export default ProfileCommonCard;
