import React from 'react';
import { View, Text } from 'react-native';
import { em } from 'view/common/const';
import PopupHeader from 'view/components/PopupHeader';
import CommonHeader from 'view/components/CommonHeader';
import TitleText from 'view/components/TitleText';
import CommonTextInput from 'view/components/CommonTextInput';
import CommonButton from 'view/components/CommonButton';
import CommentText from 'view/components/CommentText';

const ForgotPasswordScreen = () => {
  return (
    <View style={styles.container}>
      <CommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <PopupHeader hideBack={true} icon={require('assets/images/ic_password.png')} />
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
  container: {
    flex: 1,
    backgroundColor: '#40CDDE',
    alignItems: 'center',
  },
  header: {
    height: '8%',
  },
  popupView: {
    height: '74%',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 28 * em,
    justifyContent: 'space-between',
  },
  popupTopView: {
    alignItems: 'center',
    width: '80%',
  },
  titleText: {
    marginBottom: 10 * em,
  },
  btnNext: {
    marginTop: 15 * em,
  },
  commonInput: {
    width: '100%',
    height: 59 * em,
  },
};

export default ForgotPasswordScreen;
