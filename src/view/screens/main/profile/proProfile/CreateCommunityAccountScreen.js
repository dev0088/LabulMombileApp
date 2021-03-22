import React from 'react';
import { em } from 'view/common/const';
import { View } from 'react-native';
import CommonHeader from 'view/components/CommonHeader';
import PopupHeader from 'view/components/PopupHeader';
import TitleText from 'view/components/TitleText';
import CommonTextInput from 'view/components/CommonTextInput';
import CommonButton from 'view/components/CommonButton';
import { Actions } from 'react-native-router-flux';
import AccountCommonHeader from 'view/components/AccountCommonHeader';

const CreateCommunityAccountScreen = () => {
  return (
    <View style={styles.container}>
      <AccountCommonHeader style={styles.header} rightTxt="Annuler" />
      <View style={styles.popupView}>
        <View style={styles.popupTopView}>
          <PopupHeader hideBack={true} icon={require('assets/images/ic_institution.png')} />
          <TitleText text={'Identité'} style={styles.titleText} />
          <CommonTextInput
            text={'Quel est le nom de ton collectivité/ institution ?'}
            isPasswordInput={false}
            style={styles.commonInput}
          />
        </View>
        <View style={styles.popupBottomView}>
          <CommonButton text={'Suivant'} onPress={() => Actions.proRegisterMobile()} style={styles.btnNext} />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#7398FC',
    alignItems: 'center',
  },
  header: {
    height: '12%',
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
  btnNext: {
    marginBottom: 30 * em,
    backgroundColor: '#7398FC',
  },
  commonInput: {
    width: '100%',
    height: 52 * em,
  },
};

export default CreateCommunityAccountScreen;
