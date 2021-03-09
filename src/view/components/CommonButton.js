import React from 'react';
import { Text } from 'react-native';
import { em, WIDTH } from 'view/common/const';
import { TouchableOpacity } from 'react-native';

const CommonButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Text style={[styles.buttonStyle, props.style]}>{props.text}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    fontSize: 16 * em,
    backgroundColor: '#40CDDE',
    color: '#FFFFFF',
    padding: 12 * em,
    width: WIDTH * 0.8,
    textAlign: 'center',
    borderRadius: 12 * em,
  },
};

export default CommonButton;
