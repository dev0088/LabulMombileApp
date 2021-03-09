import React from 'react';
import { Image, Text, ImageBackground, View } from 'react-native';
import { em } from 'view/common/const';
import { Reducer } from 'react-native-router-flux';

var getInitials = function (string) {
  var names = string.split(' '),
    initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};
const ProfileCommonAvatar = (props) => {
  if (props.icon == null || props.icon === undefined) {
    return (
      <ImageBackground style={[styles.bgImage, props.style]} source={require('assets/images/bg_avatar.png')}>
        <Text style={styles.txtInitial}>{getInitials(props.fullName)}</Text>
      </ImageBackground>
    );
  } else {
    return (
      <View
        style={[
          props.style,
          styles.imgWrapper,
          {
            width: props.style.width + 10 * em,
            height: props.style.width + 10 * em,
            borderRadius: props.style.width / 2 + 5 * em,
          },
        ]}>
        <Image style={{ width: props.style.width, height: props.style.width }} source={props.icon} />
      </View>
    );
  }
};
const styles = {
  bgImage: {
    height: 70 * em,
    width: 70 * em,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarImg: {
    resizeMode: 'contain',
  },
  txtInitial: {
    fontSize: 28 * em,
    color: '#40CDDE',
    lineHeight: 31 * em,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  imgWrapper: {
    backgroundColor: '#ffffff56',

    justifyContent: 'center',
    alignItems: 'center',
  },
};
export default ProfileCommonAvatar;
