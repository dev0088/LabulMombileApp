import React from 'react';
import { em } from 'view/common/const';
import { View, Image } from 'react-native';
import PopupHeader from 'view/components/PopupHeader';
import TitleText from 'view/components/TitleText';
import CommonTextInput from 'view/components/CommonTextInput';
import CommonButton from 'view/components/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from 'view/components/AccountCommonHeader';

const RegisterMobileScreen = () => {
  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <Image source={require('assets/images/ic_phone.png')} style={styles.icon} />
          <TitleText text={'Mon mobile'} style={styles.titleText} />
          <CommonTextInput
            text={'Quel est ton numéro de téléphone ?'}
            isPasswordInput={false}
            style={styles.commonInput}
          />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton text={'Contiuer'} onPress={() => Actions.registerAddress()} style={styles.btnNext} />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#40CDDE',
  },
  header: {
    height: '12%',
  },
  icon: {
    width: 25 * em,
    height: 25 * em,
    marginTop: 41 * em,
    marginBottom: 14 * em,
  },
  popupView: {
    flex: 1,
    height: '88%',
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
  btnNext: {
    marginBottom: 30 * em,
  },
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default RegisterMobileScreen;
