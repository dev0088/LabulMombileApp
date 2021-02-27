import React from 'react';
import { View } from 'react-native';
import { em } from '../../common/const';
import CommonButton from '../../components/CommonButton';
import CommonText from '../../components/CommonText';
import TitleText from '../../components/TitleText';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.registerWrapper}>
        <CommonText text="Je n'ai pas de compte ? " />
        <CommonText
          text="Je m'inscris"
          color="#40CDDE"
          onPress={() => {
            console.log('Register clicked');
          }}
        />
      </View>
      <CommonButton text="Je me connecte" style={styles.wideMargin} />
      <CommonText text="ma famille" textAlign="center" />
      <CommonText text="Je vis avec mon voisinage, mes amis," textAlign="center" />
      <TitleText text="Bienvenue" style={styles.narrowMargin} />
      <View style={styles.topImage} />
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
  topImage: { width: '100%', flex: 1, backgroundColor: '#40CDDE', marginBottom: 16 * em },
};

export default HomeScreen;
