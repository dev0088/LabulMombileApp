import React from 'react';
import { View } from 'react-native';
import { em, WIDTH, HEIGHT } from 'view/common/const';
import ProfileModalHeader from 'view/components/ProfileModalHeader';
import Modal from 'react-native-modal';
import ProfileCommonTextInput from './ProfileCommonTextInput';
import CommonText from './CommonText';

const ProfileCommonModal = (props) => {
  const insertInformation = [
    { title: 'Mon email', commentInput: 'Mon email', placeholder: 'mathieu@labul.com' },
    { title: 'Mon mobile', commentInput: 'Mon mobile', placeholder: '+590 6 90 874 258' },
    { title: 'Ma localisation', commentInput: 'Mon dresse', placeholder: 'ABYMES 97139 Guadeloupe' },
  ];
  if (props.itemKey === 4) {
    return (
      <Modal
        isVisible={props.visible}
        backdropOpacity={0.8}
        style={styles.container}
        backdropColor={'#1E2D60'}
        swipeDirection={'up'}
        deviceWidth={WIDTH}
        deviceHeight={HEIGHT}
        onBackButtonPress={() => props.onPress()}>
        <ProfileModalHeader
          title={'Mon mot de passe'}
          style={styles.header}
          onCancelPress={() => props.onPress()}
          onFinishPress={() => props.onPress()}
        />
        <ProfileCommonTextInput text={'Mot de passe actuel'} onFocus={true} style={styles.input} />
        <ProfileCommonTextInput text={'Nouveau mot de passe'} onFocus={true} style={styles.input} />
        <ProfileCommonTextInput text={'Confirmation de nouveau mot de passe'} onFocus={true} style={styles.input} />
        <CommonText color={'#40CDDE'} text={'Mot de passe oublié?'} style={styles.forgotPsswd} />
      </Modal>
    );
  } else {
    return (
      <Modal
        isVisible={props.visible}
        backdropOpacity={0.8}
        style={styles.container}
        backdropColor={'#1E2D60'}
        swipeDirection={'up'}
        deviceWidth={WIDTH}
        deviceHeight={HEIGHT}
        onBackButtonPress={() => props.onPress()}>
        <ProfileModalHeader
          title={insertInformation[props.itemKey - 1].title}
          style={styles.header}
          onCancelPress={() => props.onPress()}
          onFinishPress={() => props.onPress()}
        />
        <ProfileCommonTextInput
          style={styles.input}
          text={insertInformation[props.itemKey - 1].commentInput}
          placeholder={insertInformation[props.itemKey - 1].placeholder}
          onFocus={
            insertInformation[props.itemKey - 1].placeholder === undefined ||
            insertInformation[props.itemKey - 1].placeholder == null ||
            insertInformation[props.itemKey - 1].placeholder === ''
          }
        />
      </Modal>
    );
  }
};
const styles = {
  container: {
    backgroundColor: 'white',
    marginTop: 20.5 * em,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    borderTopRightRadius: 10 * em,
    borderTopLeftRadius: 10 * em,
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    marginLeft: 30 * em,
    marginRight: 30 * em,
    marginBottom: 10 * em,
    marginTop: 27 * em,
  },
  input: {
    marginTop: 25 * em,
    marginLeft: 30 * em,
    marginRight: 30 * em,
  },
  forgotPsswd: {
    lineHeight: 18 * em,
    marginTop: 78 * em,
    textAlign: 'center',
  },
};
export default ProfileCommonModal;
