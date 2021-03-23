import { View, Image } from 'react-native';
import React from 'react';
import { em } from 'view/common/const';
import CommonListItem from './CommonListItem';
import ProfileCommonSpecView from '../ProfileCommonSpecView';

const ProfileInformationListItem = (props) => {
  console.log(props.options);
  const optionView = props.options && (
    <>
      {props.options.map((option, index) => (
        <ProfileCommonSpecView text={option} key={index} />
      ))}
    </>
  );
  return (
    <CommonListItem
      style={[styles.container, props.style]}
      onPress={props.onPress}
      title={props.caption}
      titleStyle={styles.textTitle}
      subTitle={props.value}
      subTitleStyle={
        props.placeholder
          ? { color: '#6A8596', lineHeight: 20 * em, marginRight: 30 * em }
          : { color: '#1E2D60', fontSize: 16 * em, lineHeight: 19 * em, marginRight: 30 * em ,fontFamily:'Lato-Bold'}
      }
      comment={props.commentText}
      commentStyle={styles.commentStyle}
      rightView={
        <View style={styles.rightView}>
          <Image style={styles.arrowIcon} source={require('assets/images/btn_arrow_ltr.png')} />
        </View>
      }
      commentView={optionView}
    />
  );
};
export default ProfileInformationListItem;
const styles = {
  container: {
    backgroundColor: '#ffffff',
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
  rightView: { justifyContent: 'center' },
  commentStyle: { textAlign: 'left', fontSize: 12 * em, color: '#A0AEB8', marginTop: 10 * em, marginRight: 30 * em },
};
