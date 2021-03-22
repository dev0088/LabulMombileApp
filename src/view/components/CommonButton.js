import React from 'react';
import { Text } from 'react-native';
import { em, WIDTH } from 'view/common/const';
import { TouchableOpacity, View } from 'react-native';
import CommonText from './CommentText';

const CommonButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonStyle, props.style]}>
      {props.rightIcon && <View style={[styles.iconStyle, props.iconStyle]}>{props.rightIcon}</View>}
      <CommonText text={props.text} style={[styles.textStyle, props.textStyle]} color={props.color} />
      {props.leftIcon && <View style={[styles.iconStyle, props.iconStyle]}>{props.leftIcon}</View>}
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: '#40CDDE',
    paddingVertical: 19 * em,
    width: WIDTH * 0.8,
    textAlign: 'center',
    borderRadius: 12 * em,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: { textAlign: 'center', color: '#FFFFFF', fontFamily: 'Lato-Bold' },
  iconStyle: {},
};

export default CommonButton;
