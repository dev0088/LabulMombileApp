import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';
import CommonButton from 'view/components/CommonButton';
import { Actions } from 'react-native-router-flux';
import CommonHeader from 'view/components/CommonHeader';
import PopupHeader from 'view/components/PopupHeader';
import TitleText from 'view/components/TitleText';
import CommonTextInput from 'view/components/CommonTextInput';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <CommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <PopupHeader hideBack={true} icon={require('assets/images/ic_profile.png')} />
          <TitleText text={'Je me connecte'} style={styles.titleText} />
          <CommonTextInput text={'Saisis to email'} isPasswordInput={false} style={styles.commonInput} />
          <CommonTextInput text={'Saisis ton mot de passe'} isPasswordInput={true} style={styles.commonInput} />
          <View style={styles.viewForgetPsswd}>
            <TouchableOpacity onPress={() => Actions.forgotPassword()}>
              <Text style={styles.textForgetPsswd}>Mot de passe oublié ?</Text>
            </TouchableOpacity>
          </View>
          <CommonButton text={'Suivant'} onPress={() => Actions.main()} style={styles.btnNext} />
        </View>
        <View style={styles.popupBottomView}>
          <TouchableOpacity style={styles.btnEmailSignUp} onPress={()=>Actions.signupMenu()}>
            <Text style={styles.btnTextLeft}>Je n’ai pas de compte ?</Text>
            <Text style={styles.btnTextRight}> Je m’inscris</Text>
          </TouchableOpacity>
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
  viewForgetPsswd: {
    width: '100%',
    flexDirection: 'row-reverse',
    marginTop: 10 * em,
    marginBottom: 15 * em,
  },
  textForgetPsswd: {
    fontSize: 12 * em,
    color: '#1E2D60',
  },
  btnNext: {
    marginBottom: 30 * em,
  },
  commonInput: {
    marginTop: 26 * em,
    width: '100%',
    height: 52 * em,
  },
  btnTextLeft: {
    color: '#6A8596',
    fontSize: 16 * em,
  },
  btnEmailSignUp: {
    flexDirection: 'row',
    marginBottom: 50 * em,
  },
  btnTextRight: {
    color: '#40CDDE',
    fontSize: 16 * em,
  },
};
export default LoginScreen;
