import React from 'react';
import { em } from 'view/common/const';
import { View, Image } from 'react-native';
import TitleText from 'view/components/TitleText';
import CommonTextInput from 'view/components/CommonTextInput';
import CommonButton from 'view/components/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from 'view/components/AccountCommonHeader';

const ProRegisterEmailScreen = () => {
  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <Image source={require('assets/images/ic_email_blue.png')} style={styles.icon} />
          <TitleText text={'Mon Email'} style={styles.titleText} />
          <CommonTextInput text={'Saisis to email'} isPasswordInput={false} style={styles.commonInput} />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton text={'Suivant'} style={styles.btnNext} />
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

export default ProRegisterEmailScreen;
