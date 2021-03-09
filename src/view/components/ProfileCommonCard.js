import React from 'react';
import { View, Image } from 'react-native';
import { em } from 'view/common/const';
import CommonText from './CommonText';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ProfileCommonCard = (props) => {
  return (
    <TouchableOpacity onPrss={props.onPress}>
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
    fontWeight: 'medium',
    elevation: 1,
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 12 * em,
    },
    shadowRadius: 25 * em,
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
