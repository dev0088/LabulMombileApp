import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { em } from 'view/common/const';
import TitleText from './TitleText';
import CommentText from './CommentText';
import CommonText from './CommonText';

const ProfileInformationListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <View style={styles.leftView}>
          <View style={styles.txtContainer}>
            <CommentText style={styles.textTitle} color={'#A0AEB8'} text={props.text} />
            <CommonText color={'#1E2D60'} text={props.subText} />
          </View>
        </View>
        <View style={styles.rightView}>
          <Image style={styles.arrowIcon} source={require('assets/images/btn_arrow_ltr.png')} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProfileInformationListItem;
const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  leftView: {
    flexDirection: 'row',
  },
  rightView: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  txtContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  textTitle: {
    lineHeight: 16 * em,
    textAlignVertical: 'center',
    marginBottom: 10 * em,
  },
  arrowIcon: {
    backgroundColor: '#ffffff',
    width: 11 * em,
    height: 18 * em,
  },
};
