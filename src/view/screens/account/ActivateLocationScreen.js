import React from 'react';
import { View, Text, Image } from 'react-native';
import { em } from 'view/common/const';
import CommonButton from 'view/components/button/CommonButton';
import CommonText from 'view/components/text/CommonText';
import TitleText from 'view/components/text/TitleText';
import { Actions } from 'react-native-router-flux';
import CommentText from 'view/components/text/CommentText';

const ActivateLocationScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.behindImage} source={require('assets/images/bg_active_location.png')} />
      <View style={styles.popupView}>
        <TitleText text="Activer ma localisation" style={{ marginTop: 24 * em }} />
        <CommentText text="Labul a besoin de ta localisation pour te mettre en" style={{ marginTop: 12 * em }} />
        <CommentText text="contact avec tes proches." />
        <View style={styles.buttonsContainer}>
          <View style={styles.fakeContainer} />
          <CommonButton
            text="Activer"
            onPress={() => {
              Actions.activateNotification();
            }}
          />
          <View style={styles.bottomButtonContainer}>
            <CommonText
              text="Activer plus tard"
              onPress={() => {
                Actions.activateNotification();
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F5F7',
  },
  behindImage: { flex: 0.45, resizeMode: 'contain' },
  popupView: {
    flex: 0.55,
    backgroundColor: '#ffffff',
    borderTopStartRadius: 28 * em,
    borderTopEndRadius: 28 * em,
    marginTop: 10 * em,
    width: '100%',
    alignItems: 'center',
  },
  buttonsContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12 * em,
  },
  fakeContainer: { flex: 1 },
  bottomButtonContainer: { flex: 1, justifyContent: 'center' },
};

export default ActivateLocationScreen;
