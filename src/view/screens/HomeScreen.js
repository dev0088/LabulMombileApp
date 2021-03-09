import React from 'react';
import { View, Image } from 'react-native';
import { em } from 'view/common/const';
import CommonButton from 'view/components/CommonButton';
import CommonText from 'view/components/CommonText';
import TitleText from 'view/components/TitleText';
import { Actions } from 'react-native-router-flux';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.registerWrapper}>
        <CommonText text="Je n'ai pas de compte ? " />
        <CommonText
          text="Je m'inscris"
          color="#40CDDE"
          onPress={() => {
            Actions.signupMenu();
          }}
        />
      </View>
      <CommonButton
        text="Je me connecte"
        style={styles.wideMargin}
        onPress={() => {
          Actions.loginMenu();
        }}
      />
      <CommonText text="ma famille" textAlign="center" />
      <CommonText text="Je vis avec mon voisinage, mes amis," textAlign="center" />
      <TitleText text="Bienvenue" style={styles.narrowMargin} />
      <Image style={styles.topImage} source={require('assets/images/img_sample_profiles.png')} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'column-reverse',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingBottom: 16 * em,
  },
  registerWrapper: { flexDirection: 'row', alignItems: 'center', paddingVertical: 36 * em },
  wideMargin: { marginTop: 24 * em },
  narrowMargin: { marginBottom: 6 * em },
  topImage: { resizeMode: 'contain', flex: 1, marginBottom: 18 * em },
};

export default HomeScreen;