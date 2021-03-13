import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { em } from 'view/common/const';
import { Actions } from 'react-native-router-flux';

const CommonBackButton = (props) => {
  let backButtonImage = require('assets/images/btn_back_white.png');
  if (props.dark) {
    backButtonImage = require('assets/images/btn_back.png');
  }
  let onPress = () => {
    Actions.pop();
  };
  if (props.onPress) {
    onPress = props.onPress;
  }
  return (
    <TouchableOpacity style={[styles.backBtnWrapper, props.style]} onPress={() => onPress()}>
      <Image style={styles.backButton} source={backButtonImage} />
    </TouchableOpacity>
  );
};

const styles = {
  backBtnWrapper: {
    width: 44 * em,
    height: 44 * em,
    borderRadius: 14 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: 20 * em,
    height: 18 * em,
    resizeMode: 'contain',
  },
};

export default CommonBackButton;
