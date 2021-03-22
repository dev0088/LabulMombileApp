import React from 'react';
import { Text } from 'react-native';
import { em, WIDTH } from 'view/common/const';
import { TouchableOpacity, View } from 'react-native';
import CommonText from './CommonText';

const CommonButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonStyle, props.style]}>
      {props.rightIcon && <View style={[styles.iconStyle, props.iconStyle]}>{props.rightIcon}</View>}
      <CommonText text={props.text} style={[styles.textStyle, props.textStyle]} color={props.color}/>
      {props.leftIcon && <View style={[styles.iconStyle, props.iconStyle]}>{props.leftIcon}</View>}
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: '#40CDDE',
    paddingVertical: 20 * em,
    width: 315 * em,
    textAlign: 'center',
    borderRadius: 20 * em,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: { textAlign: 'center', color: '#FFFFFF' },
  iconStyle: {},
};

export default CommonButton;
