import { Image, View } from 'react-native';
import React, { useState } from 'react';
import { em } from 'view/common/const';
import InviteButton from 'view/components/button/InviteButton';
import CommonListItem from './CommonListItem';
import CheckBox from 'view/components/checkbox/CheckBox';
import { LocationGray } from 'assets/svg/icons';
const SearchCommonListItem = (props) => {
  var inviteBtn = props.inviteBtn && <InviteButton invited={props.invited} />;
  const [checked, setChecked] = useState(false);
  var option = props.option && (
    <CheckBox oval red isChecked={checked} onClick={() => setChecked(!checked)} style={{ alignSelf: 'center' }} />
  );
  var icon = props.icon && <Image source={props.icon} style={styles.icon} />;
  if (props.iconSize) {
    icon = (
      <Image source={[props.icon, { width: props.iconSize * em, height: props.iconSize * em }]} style={styles.icon} />
    );
  }
  console.log(props.location);
  if (props.location) {
    icon = (
      <View
        style={{
          width: 38 * em,
          justifyContent: 'center',
          alignItems: 'center',
          height: 38 * em,
          borderRadius: 19 * em,
          borderWidth: 1 * em,
          borderColor: '#D1E2ED',
          marginRight: 15 * em,
        }}>
        <LocationGray width={16 * em} height={19 * em} />
      </View>
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
  icon: { width: 40 * em, height: 40 * em, resizeMode: 'contain', marginRight: 15 * em },

  textTitle: {
    fontFamily: 'Lato-Black',
    fontSize: 16 * em,
    textAlignVertical: 'center',
    fontWeight: '200',
    color: '#1E2D60',
    lineHeight: 19 * em,
  },
  subTextTitle: { color: '#A0AEB8', fontSize: 16 * em, lineHeight: 18 * em },
  arrowIcon: { backgroundColor: 'white', width: 11 * em, height: 18 * em },
};
