import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';
import CommentText from './CommentText';

const InviteButton = (props) => {
  var caption;
  props.invited ? (caption = 'Inviter') : (caption = 'Invité(e)');
  var bgColor;
  !props.invited ? (bgColor = '#F2F5F8') : (bgColor = '#40CDDE');
  var fontColor;
  !props.invited ? (fontColor = '#A0AEB8') : (fontColor = '#FFFFFF');
  var width;
  !props.invited ? (width = 79 * em) : (width = 68 * em);

  return (
    <TouchableOpacity onPress={props.onPress} disabled={!props.invited}>
      <CommentText
        style={[styles.buttonStyle, props.style, { backgroundColor: bgColor, width: width }]}
        text={caption}
        color={fontColor}
      />
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    padding: 7 * em,
    textAlign: 'center',
    borderRadius: 10 * em,
  },
};

export default InviteButton;
