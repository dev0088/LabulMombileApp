import React, { useState } from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { em, hexToRGB } from 'view/common/const';
import Modal from 'react-native-modal';
import CommonListItem from 'view/components/adapter/CommonListItem';
import CommonText from 'view/components/text/CommonText';
import { Actions } from 'react-native-router-flux';

const profileTypes = {
  my: { avatar: require('assets/images/tab_profile_off.png'), name: 'Mathieu Torin' },
  pro: { avatar: require('assets/images/avatar_curology.png'), name: 'Curology' },
};

const AccountChangeMenu = (props) => {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
    <View style={{ display: props.visible ? 'flex' : 'none' }}>
      <DropDownButton style={props.style} icon={props.type} onPress={() => setMenuVisible(true)} />
      <Modal
        isVisible={menuVisible}
        backdropOpacity={0.9}
        style={styles.modal}
        backdropColor={'#1E2D60'}
        swipeDirection={'up'}>
        <DropDownButton style={props.style} icon={props.type} onPress={() => setMenuVisible(true)} modal />
        <View style={styles.menu}>
          <CommonListItem
            onPress={() => setMenuVisible(false)}
            title="Leaves"
            titleStyle={styles.menuCaption}
            style={{ marginBottom: 25 * em }}
            icon={<Image style={styles.menuIcon} />}
          />
          <CommonListItem
            title={props.type !== 'my' ? profileTypes.my.name : profileTypes.pro.name}
            titleStyle={styles.menuCaption}
            icon={
              <Image
                style={styles.menuIcon}
                source={props.type !== 'my' ? profileTypes.my.avatar : profileTypes.pro.avatar}
              />
            }
            onPress={() => {
              setMenuVisible(false);
              props.type !== 'my' ? Actions.main({ tabNav: 'Profile' }) : Actions.main({ tabNav: 'ProProfile' });
            }}
          />
        </View>
      </Modal>
    </View>
  );
};
const styles = {
  dropdownBtn: {
    width: 68 * em,
    height: 38 * em,
    borderRadius: 23 * em,
    padding: 9 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconView: { flexDirection: 'row' },
  leaveIcon: {
    borderWidth: 1 * em,
    borderColor: '#FFFFFF80',
    width: 20 * em,
    height: 20 * em,
    borderRadius: 10 * em,
  },
  accountIcon: {
    borderWidth: 1 * em,
    borderColor: '#FFFFFF66',
    width: 20 * em,
    height: 20 * em,
    borderRadius: 10 * em,
    marginLeft: -10 * em,
  },
  arrowDown: {
    height: 6.4 * em,
    width: 8.8 * em,
    backgroundColor: 'black',
    marginRight: 2.1 * em,
    alignSelf: 'center',
  },
  modal: { margin: 0 },
  menuCaption: { fontSize: 15 * em, lineHeight: 18 * em, color: '#1E2D60', fontFamily: 'Lato-Bold' },
  menuIcon: {
    width: 28 * em,
    height: 28 * em,
    backgroundColor: 'green',
    marginRight: 10 * em,
    borderRadius: 14 * em,
  },
  menu: {
    paddingHorizontal: 15 * em,
    paddingVertical: 25 * em,
    borderRadius: 20 * em,
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: 95 * em,
    left: 175 * em,
    width: 170 * em,
  },
};

const DropDownButton = (props) => (
  <TouchableOpacity
    style={[
      styles.dropdownBtn,
      props.style,
      {
        borderWidth: 1 * em,
        borderColor: '#FFFFFF',
        backgroundColor: props.modal ? 'transparent' : hexToRGB('#FFFFFF', 0.5),
      },
    ]}
    onPress={() => props.onPress()}>
    <View style={styles.iconView}>
      <Image style={styles.leaveIcon} />
      <Image style={styles.accountIcon} source={profileTypes[props.icon].avatar} />
    </View>
    <Image style={styles.arrowDown} />
  </TouchableOpacity>
);
export default AccountChangeMenu;
