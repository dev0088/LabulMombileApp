import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { em } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import TitleText from 'view/components/text/TitleText';
import CommonHeader from './CommonHeader';

const ProfileModalHeader = (props) => {
  return (
    <CommonHeader
      style={[styles.container, props.style]}
      leftTxt={'Annuler'}
      centerTxt={props.title}
      rightTxt={'Terminer'}
      onLeftPress={() => props.onCancelPress()}
      onRightPress={() => props.onFinishPress()}
    />
  );
  // return (
  //   <View style={[styles.container, props.style]}>
  //     <CommonText text={'Annuler'} style={styles.btn}  />
  //     <CommonText text={props.title} style={styles.title} color="#1E2D60" />
  //     <CommonText text={'Terminer'} color={'#40CDDE'} style={styles.btn}  />
  //   </View>
  // );
};

const styles = {
  container: { marginHorizontal: -30 * em },
  btn: {
    lineHeight: 18 * em,
  },
  title: { fontFamily: 'Lato-Bold' },
};

export default ProfileModalHeader;
