import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';

const TitleText = (props) => {
  let color = '#1E2D60';
  if (props.color) {
    color = props.color;
  }
  let textAlign = 'center';
  if (props.textAlign) {
    textAlign = props.textAlign;
  }
  if (props.onPress) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <Text style={[{ fontSize: 28 * em, color: color, textAlign: textAlign, fontWeight: 'bold' }, props.style]}>
          {props.text}
        </Text>
      </TouchableOpacity>
    );
  }
  return <Text style={[{ fontSize: 28 * em, color: color, textAlign: textAlign }, props.style]}>{props.text}</Text>;
};

export default TitleText;
