import { View, TouchableOpacity, Image, Text } from 'react-native';
import React from 'react';
import { em } from 'view/common/const';

const MabulCommonListItem = (props) => {
  var display = 'flex';
  if (props.icon == null || props.icon === undefined) {
    display = 'none';
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <View style={styles.leftView}>
          {props.icon}
          <View style={styles.txtView}>
            <Text style={styles.textTitle}>{props.text}</Text>
            <Text style={styles.textSubTitle}>{props.subText}</Text>
          </View>
        </View>
        <View style={styles.rightView}>
          <Image style={styles.arrowIcon} source={require('assets/images/btn_arrow_ltr.png')} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default MabulCommonListItem;
const styles = {
  container: {
    flexDirection: 'row',
    marginBottom: 25 * em,
    justifyContent: 'space-between',
  },
  leftView: {
    flexDirection: 'row',
    flex: 1,
  },
  txtView: {
    flex: 1,
    marginLeft: 15 * em,
    height: '100%',
    borderBottomWidth: 0.5 * em,
    borderBottomColor: '#B3C6CF33',
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
    textAlignVertical: 'center',
  },textSubTitle:{
    fontSize:12*em,
    color:'#A0AEB8',
    lineHeight:17*em,
    width:205*em,
  },
  arrowIcon: {
    backgroundColor: 'white',
    width: 11 * em,
    height: 18 * em,
    marginTop: 10 * em,
    marginRight: 30 * em,
  },
};
