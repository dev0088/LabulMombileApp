import React from 'react';
import { em } from 'view/common/const';
import { View } from 'react-native';
import CommonHeader from 'view/components/CommonHeader';
import PopupHeader from 'view/components/PopupHeader';
import TitleText from 'view/components/TitleText';
import CommonTextInput from 'view/components/CommonTextInput';
import CommonButton from 'view/components/CommonButton';
import { Actions } from 'react-native-router-flux';

const RegisterNameScreen = () => {
  return (
    <View style={styles.container}>
      <CommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <PopupHeader hideBack={true} icon={require('assets/images/ic_profile.png')} />
          <TitleText text={'Mon prénom'} style={styles.titleText} />
          <CommonTextInput text={'Quel est ton prénom ?'} isPasswordInput={false} style={styles.commonInput} />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton text={'Continuer'} onPress={() => Actions.registerFamilyName()} style={styles.btnNext} />
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
    height: '8%',
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

export default RegisterNameScreen;
