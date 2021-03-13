import React from 'react';
import { em } from 'view/common/const';
import { View, Image } from 'react-native';
import TitleText from 'view/components/TitleText';
import CommonTextInput from 'view/components/CommonTextInput';
import CommonButton from 'view/components/CommonButton';
import { Actions } from 'react-native-router-flux';
import CommonText from 'view/components/CommonText';
import AccountCommonHeader from 'view/components/AccountCommonHeader';

const RegisterAddressScreen = () => {
  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <Image source={require('assets/images/ic_location_green.png')} style={styles.icon} />
          <TitleText text={'Mon adresse'} style={styles.titleText} />
          <CommonTextInput text={'Saisis ton adresse complète'} isPasswordInput={false} style={styles.commonInput} />
          <View style={styles.viewText}>
            <CommonText color={'#40CDDE'} text={'Me géolocalisers'} />
          </View>
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton text={'Contiuer'} onPress={() => Actions.activateLocation()} style={styles.btnNext} />
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
    width: 21 * em,
    height: 30 * em,
    marginTop: 39 * em,
    marginBottom: 11 * em,
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
  viewText: {
    marginTop: 25 * em,
  },
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default RegisterAddressScreen;
