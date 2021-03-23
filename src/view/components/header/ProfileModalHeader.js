import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { em } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import TitleText from 'view/components/text/TitleText';

const ProfileModalHeader = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <CommonText text={'Annuler'} style={styles.btn} onPress={() => props.onCancelPress()} />
      <CommonText text={props.title} style={styles.title} color="#1E2D60" />
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
  title: { fontFamily: 'Lato-Bold' },
};

export default ProfileModalHeader;
