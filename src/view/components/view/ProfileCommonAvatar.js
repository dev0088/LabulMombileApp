import React from 'react';
import { Image, View } from 'react-native';
import { em } from 'view/common/const';
import { AvatarBg, ProAvatarBg } from 'assets/svg/icons';
import TitleText from 'view/components/text/TitleText';

var getInitials = function (string) {
  var names = string.split(' '),
    initials = names[0].substring(0, 1).toUpperCase();
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials;
};
const ProfileCommonAvatar = (props) => {
  if (!props.icon) {
    return (
      <View
        style={[
          props.style,
          styles.imgWrapper,
          {
            width: props.style.width + 6 * em,
            height: props.style.width + 6 * em,
            borderRadius: (props.style.width + 6 * em) / 2,
          },
        ]}>
        {props.pro
          ? ProAvatarBg({
              width: props.style.width + 6 * em,
              height: props.style.width + 6 * em,
            })
          : AvatarBg({
              width: props.style.width + 6 * em,
              height: props.style.width + 6 * em,
            })}
        {/* <AvatarBg width={props.style.width+ 10* em} height={props.style.width+ 10 * em} /> */}
        <TitleText
          style={[styles.txtInitial, { color: !props.pro ? '#40CDDE' : '#6784DA' }]}
          text={getInitials(props.fullName)}
        />
      </View>
    );
  } else {
    return (
      <View
        style={[
          props.style,
          styles.imgWrapper,
          {
            width: props.style.width + 6 * em,
            height: props.style.width + 6 * em,
            borderRadius: (props.style.width + 6 * em) / 2,
            borderWidth: 3 * em,
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
    backgroundColor: 'red',
  },
  avatarImg: {
    resizeMode: 'contain',
  },
  txtInitial: {
    fontSize: 28 * em,

    lineHeight: 31 * em,
    fontWeight: 'bold',
    position: 'absolute',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  imgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff33',
    borderColor:'#ffffff33'
  },
};
export default ProfileCommonAvatar;
