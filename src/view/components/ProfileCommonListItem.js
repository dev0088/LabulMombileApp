import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { em } from 'view/common/const';
import TitleText from './TitleText';
import CommentText from './CommentText';

const ProfileCommonListItem = (props) => {
  var display = 'flex';
  if (props.icon == null || props.icon === undefined) {
    display = 'none';
  }
  var subTextDisplay = 'flex';
  if (props.subText == null || props.subText === undefined || props.subText === '') {
    subTextDisplay = 'none';
  }
  var icon = props.iconColor ? (
    <View style={[styles.icon, { backgroundColor: props.iconColor }]}>
      <Image source={props.icon} style={{ width: 18 * em, height: 16 * em, resizeMode: 'contain' }} />
    </View>
  ) : (
    <Image source={props.icon} style={styles.icon} />
  );
  if (props.icon == null || props.icon === undefined) {
    icon = <></>;
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style, { height: display === 'flex' ? 38 * em : 19 * em }]}>
        <View style={styles.leftView}>
          {icon}
          <View style={styles.txtContainer}>
            <TitleText style={styles.textTitle} text={props.text} />
            <CommentText style={{ display: subTextDisplay }} text={props.subText} />
          </View>
        </View>
        <View style={styles.rightView}>
          <Image style={styles.arrowIcon} source={require('assets/images/btn_arrow_ltr.png')} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ProfileCommonListItem;
const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftView: {
    flexDirection: 'row',
  },
  icon: {
    width: 38 * em,
    height: 38 * em,
    borderRadius: 20 * em,
    resizeMode: 'contain',
    marginRight: 15 * em,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightView: {
    flexDirection: 'row-reverse',
    alignItems: 'center',
  },
  txtContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  textTitle: {
    fontSize: 16 * em,
    textAlignVertical: 'center',
    fontWeight: '200',
  },
  arrowIcon: {
    backgroundColor: 'white',
    width: 11 * em,
    height: 18 * em,
  },
};
