import { View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { em } from 'view/common/const';
import TitleText from './TitleText';
import InviteButton from './InviteButton';

const SearchCommonListItem = (props) => {
  var display = 'flex';
  if (props.icon == null || props.icon === undefined) {
    display = 'none';
  }
  var subTextDisplay = 'flex';
  if (props.subText == null || props.subText === undefined || props.subText === '') {
    subTextDisplay = 'none';
  }
  var inviteBtn = <></>;
  console.log(props.addBtn);
  if (props.addBtn !== undefined) {
    inviteBtn = <InviteButton invited={props.addBtn} />;
  }
  if (props.onPress) {
    return (
      <TouchableOpacity onPress={() => props.onPress()}>
        <View style={[styles.container, props.style, { height: display === 'flex' ? 40 * em : 19 * em }]}>
          <View style={styles.leftView}>
            <Image source={props.icon} style={[styles.icon, { display: display }]} />
            <View style={styles.txtContainer}>
              <TitleText style={styles.textTitle} text={props.text} />
              <TitleText
                style={[styles.textTitle, { display: subTextDisplay }]}
                color={'#A0AEB8'}
                text={props.subText}
              />
            </View>
          </View>
          <View style={styles.btnView}>{inviteBtn}</View>
        </View>
      </TouchableOpacity>
    );
  } else {
    return (
      <View style={[styles.container, props.style, { height: display === 'flex' ? 40 * em : 19 * em }]}>
        <View style={styles.leftView}>
          <Image source={props.icon} style={[styles.icon, { display: display }]} />
          <View style={styles.txtContainer}>
            <TitleText style={styles.textTitle} text={props.text} />
            <TitleText style={[styles.textTitle, { display: subTextDisplay }]} color={'#A0AEB8'} text={props.subText} />
          </View>
        </View>
        <View style={styles.btnView}>{inviteBtn}</View>
      </View>
    );
  }
};
export default SearchCommonListItem;
const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftView: {
    flexDirection: 'row',
  },
  icon: {
    width: 40 * em,
    height: 40 * em,
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
    fontWeight: '200',
  },
  arrowIcon: {
    backgroundColor: 'white',
    width: 11 * em,
    height: 18 * em,
  },
  btnView: {},
};
