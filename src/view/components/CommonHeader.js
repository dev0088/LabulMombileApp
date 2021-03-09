import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { em, WIDTH } from 'view/common/const';
import { Actions } from 'react-native-router-flux';
import CommentText from './CommentText';

const CommonHeader = (props) => {
  let backButtonImage = require('assets/images/btn_back_white.png');
  if (props.isLightTheme) {
    backButtonImage = require('assets/images/btn_back.png');
  }
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={styles.backBtnView}
        onPress={() => {
          Actions.pop();
        }}>
        <Image style={styles.backButton} source={backButtonImage} />
      </TouchableOpacity>
      <Image style={styles.icon} source={props.icon} />
      <View style={[styles.backBtnView, { height: 16 * em, width: 120 * em }]}>
        <TouchableOpacity>
          <CommentText text={props.addBtnText} color={'#FFFFFF'} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    marginTop: 23.5 * em,
    width: '92%',
    marginLeft: 0.04 * WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backBtnView: {
    width: 44 * em,
    height: 44 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: 20 * em,
    height: 18 * em,
    resizeMode: 'contain',
  },
  iconWrapper: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  icon: {
    width: 56 * em,
    height: 19 * em,
    resizeMode: 'contain',
    marginTop: 10 * em,
  },
};

export default CommonHeader;
