import React from 'react';
import { em, hexToRGB } from 'view/common/const';
import { View, Image } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import CommonTextInput from 'view/components/CommonTextInput';
import CommonButton from 'view/components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from 'view/components/header/AccountCommonHeader';
import { FamilyGroup, NeigborGroup, FriendGroup } from 'assets/svg/icons';
const addIconSize = { width: 42 * em, height: 30 * em };

const themeButton = {
  families: FamilyGroup(addIconSize),
  friends: NeigborGroup(addIconSize),
  neighbours: FriendGroup(addIconSize),
};

const NameGroupScreen = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.themeColor }]}>
      <AccountCommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <View style={styles.icon}>{themeButton.friends}</View>
          <TitleText text={'Nom du groupe'} style={styles.titleText} />
          <CommonTextInput text={'Donne un nom à ton groupe'} isPasswordInput={false} style={styles.commonInput} />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton
            text={'Créer groupe'}
            style={[styles.btnNext, { backgroundColor: hexToRGB(props.themeColor, 0.5) }]}
            onPress={() => Actions.myCirclesHome()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#7398FD',
    alignItems: 'center',
  },
  header: {
    height: '12%',
  },
  icon: {
    width: 30 * em,
    height: 27 * em,
    marginTop: 40 * em,
    marginBottom: 13 * em,
  },
  popupView: {
    flex: 1,
    height: '88%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    justifyContent: 'space-between',
  },
  popupTopView: {
    alignItems: 'center',
    width: '80%',
  },
  titleText: {
    marginBottom: 35 * em,
  },
  btnNext: { backgroundColor: '#7398FD', marginBottom: 30 * em },
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default NameGroupScreen;
