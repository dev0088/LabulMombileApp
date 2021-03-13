import React from 'react';
import { View, Text, Image } from 'react-native';
import { em } from 'view/common/const';
import CommonButton from 'view/components/CommonButton';
import CommonText from 'view/components/CommonText';
import TitleText from 'view/components/TitleText';
import { Actions } from 'react-native-router-flux';
import CommentText from 'view/components/CommentText';

const ActivateNotificationScreen = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.behindImage} source={require('assets/images/bg_active_notification.png')} />
      <View style={styles.popupView}>
        <TitleText text="Activer" style={{ marginTop: 24 * em }} />
        <TitleText text="les notifications" />

        <CommentText text="Active les notifications pour recevoir l’activité de" style={{ marginTop: 12 * em }} />
        <CommentText text=" tes amis, ta famille et tes voisins." />
        <View style={styles.buttonsContainer}>
          <View style={styles.fakeContainer} />
          <CommonButton
            text="Activer"
            onPress={() => {
              Actions.main();
            }}
          />
          <View style={styles.bottomButtonContainer}>
            <CommonText
              text="Activer plus tard"
              onPress={() => {
                Actions.main();
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
    backgroundColor: '#fafaff',
  },
  behindImage: { flex: 0.45, resizeMode: 'contain' },
  popupView: {
    flex: 0.55,
    backgroundColor: '#ffffff',
    borderTopStartRadius: 25 * em,
    borderTopEndRadius: 25 * em,
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

export default ActivateNotificationScreen;
