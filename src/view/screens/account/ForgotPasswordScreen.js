import React from 'react';
import { View } from 'react-native';
import { em } from 'view/common/const';
import TitleText from 'view/components/text/TitleText';
import CommonTextInput from 'view/components/CommonTextInput';
import CommonButton from 'view/components/button/CommonButton';
import CommentText from 'view/components/text/CommentText';
import AccountCommonHeader from 'view/components/header/AccountCommonHeader';
import { Key } from 'assets/svg/icons';
const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <View style={styles.icon}>
            <Key width={30 * em} heigh={30 * em} />
          </View>
          <TitleText text={'Demander un nouveau mot de passe'} style={styles.titleText} />
          <CommentText text="Entrez votre adresse e-mail pour réinitialiser votre mot de passe" />
          <CommonTextInput text={'Saisis ton email'} isPasswordInput={false} style={styles.commonInput} />
          <CommonButton text={'Demander'} style={styles.btnNext} />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#40CDDE', alignItems: 'center' },
  header: {
    height: '12%',
  },
  icon: {
    width: 30 * em,
    height: 30 * em,
    marginTop: 40 * em,
    marginBottom: 10 * em,
  },
  popupView: {
    height: '74%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 28 * em,
    justifyContent: 'space-between',
  },
  popupTopView: { alignItems: 'center', width: '80%' },
  titleText: { marginBottom: 10 * em },
  btnNext: { marginTop: 15 * em },
  commonInput: { width: '100%', marginTop: 26 * em, height: 52 * em },
};

export default ForgotPasswordScreen;
