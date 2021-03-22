import React from 'react';
import { Image, View, TouchableOpacity } from 'react-native';
import { em, WIDTH } from 'view/common/const';

const AvatarWithBadge = (props) => {
  console.log(typeof props.badge);
  const BadgeIcon =
    typeof props.badge === 'number' ? (
      <Image
        source={props.badge}
        style={[
          styles.badge,
          {
            width: props.badgeDiameter + 5 * em,
            height: props.badgeDiameter + 5 * em,
            borderRadius: (props.badgeDiameter + 5 * em) / 2,
          },
        ]}
      />
    ) : (
      <View
        style={[
          styles.badge,
          {
            width: props.badgeDiameter + 5 * em,
            height: props.badgeDiameter + 5 * em,
            borderRadius: (props.badgeDiameter + 5 * em) / 2,
            alignItems: 'center',
            justifyContent: 'center',
          },
        ]}>
        {props.badge}
      </View>
    );
  if (props.onPress) {
    return (
      <TouchableOpacity style={[{ width: props.avatarDiameter }, props.style]} onPress={() => props.onPress()}>
        <Image source={props.avatar} style={{ width: props.avatarDiameter, height: props.avatarDiameter }} />
        {props.badge && BadgeIcon}
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[{ width: props.avatarDiameter }, props.style]}>
        <Image source={props.avatar} style={{ width: props.avatarDiameter, height: props.avatarDiameter }} />
        {props.badge && BadgeIcon}
      </View>
    );
  }
};

const styles = {
  badge: {
    position: 'absolute',
    right: -8 * em,
    bottom: -3 * em,
    zIndex: 1,
    backgroundColor: '#ffffff',
  },
};

export default AvatarWithBadge;
