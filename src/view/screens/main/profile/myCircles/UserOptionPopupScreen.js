import React from 'react';
import { View, Image } from 'react-native';
import { em } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import Modal from 'react-native-modal';
import CommonListItem from 'view/components/CommonListItem';
import CommonButton from 'view/components/CommonButton';

const UserOptionPopupScreen = (props) => {
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <View style={styles.body}>
        <Image source={require('assets/images/avatar.png')} style={styles.avatar} />
        <CommonText text="Amandine Bernard" style={styles.userName} />
        <CommonListItem
          style={styles.listItem}
          title="Ajouter à ma famille"
          titleStyle={{ color: '#6A8596' }}
          rightView={
            <Image
              style={{ width: 18 * em, height: 20 * em, resizeMode: 'contain' }}
              source={require('assets/images/img_close.png')}
            />
          }
        />
        <CommonListItem
          style={styles.listItem}
          title="Retirer de mes amis"
          titleStyle={{ color: '#F9547B' }}
          rightView={
            <Image
              style={{ width: 20 * em, height: 20 * em, resizeMode: 'contain' }}
              source={require('assets/images/img_close.png')}
            />
          }
        />
        <CommonListItem
          style={styles.listItem}
          title="Retirer de mes voisins"
          titleStyle={{ color: '#F9547B' }}
          rightView={
            <Image
              style={{ width: 20 * em, height: 20 * em, resizeMode: 'contain' }}
              source={require('assets/images/img_close.png')}
            />
          }
        />
      </View>
      <CommonButton text="Annuler" style={styles.cancelBtn} onPress={() => props.onPress()} />
    </Modal>
  );
};
const styles = {
  container: {
    margin: 0,
    flex: 1,
    justifyContent: 'flex-end',
  },
  avatar: {
    width: 54 * em,
    height: 54 * em,
    marginTop: 29 * em,
  },
  userName: {
    color: '#1E2D60',
    marginBottom: 23 * em,
    marginTop: 10 * em,
  },

  body: {
    paddingHorizontal: 25 * em,
    alignItems: 'center',
    marginRight: 30 * em,
    marginLeft: 30 * em,
    marginBottom: 0,
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
  },
  listItem: {
    height: 70 * em,
    justifyContent: 'center',
    borderTopWidth: 1 * em,
    borderColor: '#B3C6CF33',
    width: '100%',
  },
  cancelBtn: {
    marginTop: 35 * em,
    backgroundColor: '#ffffff',
    color: '#1E2D60',
    alignSelf: 'center',
    width: 315 * em,
    marginBottom: 23 * em,
  },
};
export default UserOptionPopupScreen;
