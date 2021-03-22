import { View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import { em } from 'view/common/const';
import CommentText from './CommentText';
import CommonText from './CommonText';

const CommonListItem = (props) => {
  var textView;
  if (props.title) {
    if (props.subTitle) {
      textView = (
        <View style={styles.txtView}>
          <CommonText text={props.title} style={[styles.title, props.titleStyle]} />
          {props.subTitle && <CommentText text={props.subTitle} style={[styles.subTitle, props.subTitleStyle]} />}
        </View>
      );
    } else {
      textView = (
        <View style={[styles.txtView, { justifyContent: 'center' }]}>
          <CommonText text={props.title} style={[styles.title, props.titleStyle]} />
        </View>
      );
    }
  }
  if (props.onPress) {
    return (
      <TouchableOpacity onPress={()=>props.onPress()} style={[styles.container, props.style]}>
        <View style={styles.topView}>
          <View style={styles.leftView}>
            {props.icon && (
              <View source={props.icon} style={styles.iconView}>
                {props.icon}
              </View>
            )}
            {textView}
          </View>
          <View style={styles.rightView}>{props.rightView}</View>
        </View>
        <View style={styles.bottomView}>
          {props.comment && <CommentText text={props.comment} style={props.commentStyle} />}
          {props.commentView}
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[styles.container, props.style]}>
        <View style={styles.topView}>
          <View style={styles.leftView}>
            {props.icon && (
              <View source={props.icon} style={styles.iconView}>
                {props.icon}
              </View>
            )}
            {textView}
          </View>
          <View style={styles.rightView}>{props.rightView}</View>
        </View>
        <View style={styles.bottomView}>
          {props.comment && <CommentText text={props.comment} style={props.commentStyle} />}
          {props.commentView}
        </View>
      </View>
    );
  }
};
export default CommonListItem;
const styles = {
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftView: {
    flexDirection: 'row',
    flex: 1,
  },
  txtView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  title: { textAlign: 'left' },
  subTitle: { textAlign: 'left' },
  rightView: {
    flexDirection: 'row-reverse',
  },
  bottomView: { flexDirection: 'row' },
};
