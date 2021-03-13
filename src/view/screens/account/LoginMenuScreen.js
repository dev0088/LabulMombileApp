import React from 'react';
import { View, Image } from 'react-native';
import { em } from 'view/common/const';
import CommonButton from 'view/components/CommonButton';
import TitleText from 'view/components/TitleText';
import CommonText from 'view/components/CommonText';
import { Actions } from 'react-native-router-flux';
import SocialButton from 'view/components/SocialButton';
import PopupHeader from 'view/components/PopupHeader';

const LoginMenuScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.behindImage} source={require('assets/images/img_sample_profiles.png')} />
      <View style={styles.popupView}>
        <PopupHeader />
        <TitleText text="Je me connecte" style={styles.buttonMargin} />
        <CommonText text="Ravis de te revoir :)" />
        <View style={styles.buttonGroup}>
          <CommonButton
            text="Je me connecte avec mon email"
            style={styles.commonButtonMargin}
            onPress={() => {
              Actions.login();
            }}
          />
          <SocialButton
            text="Je me connecte Facebook"
            type="facebook"
            style={styles.commonButtonMargin}
            onPress={() => {
              Actions.main();
            }}
          />
          <SocialButton
            text="Je me connecte avec Google"
            type="google"
            onPress={() => {
              Actions.main();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fafaff',
  },
  buttonMargin: {
    marginTop: 16 * em,
  },
  behindImage: { flex: 0.52, resizeMode: 'contain' },
  popupView: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopStartRadius: 25 * em,
    borderTopEndRadius: 25 * em,
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  commonButtonMargin: { marginTop: 12 * em },
  buttonGroup: { flex: 1, flexDirection: 'column-reverse', marginBottom: 36 * em, marginTop: 36 * em },
};

export default LoginMenuScreen;
