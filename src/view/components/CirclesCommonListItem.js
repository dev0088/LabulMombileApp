import { View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import { em } from 'view/common/const';
import CommonListItem from './CommonListItem';
import UserType from 'model/user/UserType';
import CommonBackButton from './CommonBackButton';

const CirclesCommonListItem = (props) => {
  var optionBtn = <Image style={styles.optionBtn} source={require('assets/images/ic_option_white.png')} />;
  var icon = <Image source={props.icon} style={styles.icon} />;
  if (props.iconSize) {
    icon = (
      <Image source={[props.icon, { width: props.iconSize * em, height: props.iconSize * em }]} style={styles.icon} />
    );
  }
  console.log(props.type)
  if (props.type === UserType.GROUP) {
    console.log('here')
    return (
      <View style={[styles.container, props.style]}>
        <CommonListItem
          title={props.name}
          subTitle={props.subName}
          titleStyle={styles.userNameStyle}
          icon={icon}
          subTitleStyle={styles.number}
          style={{flex:1}}
          onPress={props.onLeftPress}
        />
        <TouchableOpacity onPress={() => props.onRightPress()}>{optionBtn}</TouchableOpacity>
      </View>
    );
  }
  return (
    <CommonListItem
      title={props.name}
      subTitle={props.subName}
      titleStyle={styles.userNameStyle}
      icon={icon}
      subTitleStyle={styles.relationshipStyle}
      rightView={optionBtn}
      style={props.style}
      onPress={props.onPress}
    />
  );
};
export default CirclesCommonListItem;
const styles = {
  icon: {
    width: 40 * em,
    height: 40 * em,
    resizeMode: 'contain',
    marginRight: 15 * em,
  },
  userNameStyle: {
    fontSize: 16 * em,
    color: '#1E2D60',
    textAlign: 'left',
    height: 19 * em,
  },
  relationshipStyle: {
    fontSize: 16 * em,
    color: '#A0AEB8',
    textAlign: 'left',
    height: 18 * em,
  },
  optionBtn: {
    backgroundColor: 'transparent',
    tintColor: '#84848442',
    width: 30 * em,
    height: 30 * em,
    marginTop: 5 * em,
  },
  container: { flexDirection: 'row', justifyContent: 'space-between' },
};
