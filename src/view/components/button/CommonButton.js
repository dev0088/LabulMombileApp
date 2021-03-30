import React from 'react';
import { em, hm } from 'view/common/const';
import { TouchableOpacity, View } from 'react-native';
import CommonText from 'view/components/text/CommentText';

const CommonButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.buttonStyle, props.style]}>
      {props.leftIcon && <View style={[styles.iconStyle, props.iconStyle]}>{props.leftIcon}</View>}
      <CommonText text={props.text} style={[styles.textStyle, props.textStyle]} color={props.color} />
      {props.rightIcon && <View style={[styles.iconStyle, props.iconStyle]}>{props.rightIcon}</View>}
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    backgroundColor: '#40CDDE',
    paddingVertical: 20 * hm,
    width: 315 * em,
    borderRadius: 20 * em,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: { textAlign: 'center', color: '#FFFFFF', fontFamily: 'Lato-Bold', lineHeight: 19 * em },
};

export default CommonButton;
