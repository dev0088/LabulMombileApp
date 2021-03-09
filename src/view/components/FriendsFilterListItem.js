import { View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import { em } from 'view/common/const';

const FriendsFilterListItem = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <View style={styles.leftView}>
          <Image source={props.icon} style={styles.icon} />
          <View style={styles.txtView}>
            <Text style={styles.textTitle}>{props.title}</Text>
            <Text style={styles.defaultSetting}>{props.defaultSetting}</Text>
          </View>
        </View>
        <View style={styles.rightView}>
          <Image style={styles.arrowIcon} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default FriendsFilterListItem;
const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftView: {
    flexDirection: 'row',
    flex: 1,
  },
  txtView: {
    flex: 1,
    marginLeft: 15 * em,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  icon: {
    width: 20 * em,
    height: 20 * em,
    resizeMode: 'contain',
  },
  rightView: {
    flexDirection: 'row-reverse',
    height: '100%',
    borderBottomWidth: 0.5 * em,
    borderBottomColor: '#B3C6CF33',
  },
  textTitle: {
    fontSize: 18 * em,
    color: '#1E2D60',
    textAlign: 'left',
    height: 22 * em,
  },
  defaultSetting: {
    fontSize: 16 * em,
    color: '#A0AEB8',
    textAlign: 'left',
    height: 18 * em,
  },
  arrowIcon: {
    backgroundColor: 'white',
    width: 11 * em,
    height: 18 * em,
    marginTop: 2 * em,
  },
};
