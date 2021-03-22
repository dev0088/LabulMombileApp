import { View, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { em } from 'view/common/const';
import TitleText from './TitleText';
import InviteButton from './InviteButton';
import CommonListItem from './CommonListItem';
import CheckBox from './CheckBox';

const SearchCommonListItem = (props) => {
  var inviteBtn = props.inviteBtn && <InviteButton invited={props.invited} />;
  const [checked, setChecked] = useState(false);
  var option = props.option && (
    <CheckBox
      shape="oval"
      isChecked={checked}
      color={props.color}
      onClick={() => setChecked(!checked)}
      style={{ alignSelf: 'center' }}
    />
  );
  var icon = props.icon && <Image source={props.icon} style={styles.icon} />;
  if (props.iconSize) {
    icon = (
      <Image source={[props.icon, { width: props.iconSize * em, height: props.iconSize * em }]} style={styles.icon} />
    );
  }
  return (
    <CommonListItem
      title={props.text}
      titleStyle={styles.textTitle}
      subTitle={props.subText}
      subTitleStyle={styles.subTextTitle}
      icon={icon}
      rightView={inviteBtn || option}
      style={props.style}
    />
  );
};
export default SearchCommonListItem;
const styles = {
  icon: {
    width: 40 * em,
    height: 40 * em,
    resizeMode: 'contain',
    marginRight: 15 * em,
  },

  textTitle: {
    fontSize: 16 * em,
    textAlignVertical: 'center',
    fontWeight: '200',
    color: '#1E2D60',
    lineHeight: 19 * em,
  },
  subTextTitle: { color: '#A0AEB8', fontSize: 16 * em, lineHeight: 18 * em },
  arrowIcon: {
    backgroundColor: 'white',
    width: 11 * em,
    height: 18 * em,
  },
  btnView: {},
};
