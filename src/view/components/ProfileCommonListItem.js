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

  return (
    <TouchableOpacity>
      <View style={[styles.container, props.style, { height: display === 'flex' ? 38 * em : 19 * em }]}>
        <View style={styles.leftView}>
          <Image source={props.icon} style={[styles.icon, { display: display }]} />
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
    resizeMode: 'contain',
    marginRight: 15 * em,
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
    fontWeight: 'medium',
  },
  arrowIcon: {
    backgroundColor: 'white',
    width: 11 * em,
    height: 18 * em,
  },
};
