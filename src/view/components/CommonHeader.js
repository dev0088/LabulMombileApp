import React from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import { em, WIDTH } from 'view/common/const';
import CommentText from './CommentText';
import CommonBackButton from './CommonBackButton';
import CommonText from './CommonText';

const CommonHeader = (props) => {
  var leftButton = props.leftTxt ? (
    <TouchableOpacity>
      <CommentText text={props.leftTxt} color={'#FFFFFF'} style={styles.leftTxt} />
    </TouchableOpacity>
  ) : (
    <CommonBackButton dark={props.dark} />
  );
  var centerIcon = require('assets/images/txt_logo_white.png');
  if (props.blueLogo) {
    centerIcon = require('assets/images/txt_logo.png');
  }
  var logoVisible = 'flex';
  if (!props.logo) {
    logoVisible = 'none';
  }
  var centerView = props.centerTxt ? (
    <CommonText text={props.centerTxt} color={'#1E2D60'} style={styles.centerTxt} />
  ) : (
    <Image style={styles.icon} source={centerIcon} />
  );
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.left}>{leftButton}</View>
      <View style={[styles.center, { display: logoVisible }]}>{centerView}</View>
      <View style={styles.right}>
        <TouchableOpacity onPress={() => props.psAction}>
          <CommentText text={props.rightTxt} color={'#FFFFFF'} style={styles.rightTxt} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = {
  container: {
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
    height: 44 * em,
  },
  left: { marginLeft: 15 * em, flex: 1, justifyContent: 'flex-start' },
  leftTxt: { marginLeft: 15 * em, fontSize: 16 * em, color: '#6A8596', lineHeight: 18 * em, textAlign: 'left' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  centerTxt: { lineHeight: 18 * em, textAlign: 'center' },
  icon: { width: 80 * em, height: 20 * em, resizeMode: 'contain' },
  right: { marginRight: 15 * em, flex: 1, justifyContent: 'flex-end' },
  rightTxt: { marginRight: 15 * em, lineHeight: 17 * em, textAlign: 'right' },
};

export default CommonHeader;
