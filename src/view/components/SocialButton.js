import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { em, WIDTH } from 'view/common/const';

const SocialButton = (props) => {
  let image = require('assets/images/ic_facebook.png');
  if (props.type === 'google') {
    image = require('assets/images/ic_google.png');
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.buttonStyle, props.style]}>
        <Image source={image} style={styles.imageStyle} />
        <Text style={styles.textStyle}>{props.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: {
    flexDirection: 'row',
    fontSize: 16 * em,
    backgroundColor: '#F0F5F7',
    padding: 12 * em,
    width: WIDTH * 0.8,
    borderRadius: 12 * em,
    alignItems: 'center',
  },
  textStyle: {
    color: '#1E2D60',
    fontSize: 14 * em,
  },
  imageStyle: { width: 20 * em, height: 20 * em, marginRight: 8 * em },
};

export default SocialButton;
