import React from 'react';
import { em } from 'view/common/const';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import CommonTextInput from 'view/components/textInput/CommonTextInput';
import CommonButton from 'view/components/button/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from 'view/components/header/AccountCommonHeader';
import { Email } from 'assets/svg/icons';

const RegisterEmailScreen = () => {
  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <View style={styles.icon}>
            <Email width={30 * em} heigh={27 * em} />
          </View>
          <TitleText text={'Mon Email'} style={styles.titleText} />
          <CommonTextInput text={'Saisis to email'} isPasswordInput={false} style={styles.commonInput} />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton text={'Suivant'} onPress={() => Actions.registerFamilyName()} style={styles.btnNext} />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#40CDDE', alignItems: 'center' },
  header: { height: '12%' },
  icon: { marginTop: 40 * em, marginBottom: 13 * em },
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
  popupTopView: { alignItems: 'center', width: '80%' },
  titleText: { marginBottom: 35 * em },
  btnNext: { backgroundColor: 'rgba(64, 205, 222, 0.5)', marginBottom: 30 * em },
  commonInput: { width: '100%', height: 52 * em },
};

export default RegisterEmailScreen;
