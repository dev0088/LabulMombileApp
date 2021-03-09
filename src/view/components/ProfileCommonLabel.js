import React from 'react';
import { View, Image, Text } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em } from 'view/common/const';
import CommonText from 'view/components/CommonText';

const ProfileCommonLabel = (props) => {
  var icDisplay = 'flex';
  if (props.icon == null || props.icon === undefined) {
    icDisplay = 'none';
  }
  return (
    <View style={styles.container}>
      <Image source={props.icon} style={[styles.icon, { display: icDisplay }]} />
      <TitleText text={props.number} style={styles.numberTxt} />
      <Text style={styles.nameTxt}>{props.name}</Text>
    </View>
  );
};
const styles = {
  container: {
    alignItems: 'center',
  },
  icon: {
    width: 48 * em,
    height: 48 * em,
    resizeMode: 'contain',
    marginBottom: 9 * em,
  },
  numberTxt: {
    marginBottom: 6 * em,
    fontSize: 20 * em,
    lineWeight: 25 * em,
    fontWeight: 'bold',
  },
  nameTxt: {
    fontSize: 13 * em,
    color: '#A0AEB8',
    lineWeight: 16 * em,
    fontWeight: 'medium',
  },
};
export default ProfileCommonLabel;
