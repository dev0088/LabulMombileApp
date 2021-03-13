import React from 'react';
import { Image, Text, ImageBackground, View } from 'react-native';
import { em } from 'view/common/const';
function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}
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
            width: props.style.width + 8 * em,
            height: props.style.width + 8 * em,
            borderRadius: (props.style.width + 8 * em) / 2,
            borderWidth: 4 * em,
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
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: hexToRGB('#ffffff', 0.5),
  },
};
export default ProfileCommonAvatar;
