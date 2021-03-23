import React, { useState } from 'react';
import { View, FlatList, Image } from 'react-native';
import { em } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import TitleText from 'view/components/text/TitleText';
import CommonButton from 'view/components/button/CommonButton';
import CheckBox from 'view/components/CheckBox';

import Modal from 'react-native-modal';
const FriendParticipatePopupScreen = (props) => {
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <CommonText text="Passer" style={styles.header} onPress={() => props.onPress()} />
      <View style={styles.body}>
        <Image source={require('assets/images/sample_cover_1.png')} style={styles.titleImg} />
        <TitleText text="À prévoir" style={styles.title} />

        <CommonText text="Dans cette demande Antoine a pévu une liste des choses à apporter" style={styles.comment} />
        <View style={styles.listItem}>
          <CommonText text="Papier de fond noir" style={styles.itemCheckedText} color="#40CDDE" />
          <CheckBox oval isChecked={true} />
        </View>
        <View style={styles.listItem}>
          <CommonText text="Trépied Professionnel" style={styles.itemText} color="#1E2D60" />
          <CheckBox oval isChecked={false} />
        </View>
        <View style={styles.listItem}>
          <CommonText text="Objectif 105mm f / 2.8 EX DG Macro OS HSM" style={styles.itemText} color="#1E2D60" />
          <CheckBox oval isChecked={false} color="#40CDDE" />
        </View>
      </View>
      <CommonButton
        text="Valider"
        onPress={() => props.onPress()}
        style={{ marginBottom: 30 * em, alignSelf: 'center' }}
      />
    </Modal>
  );
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
  header: { marginRight: 30 * em, marginBottom: 18 * em, marginTop: 25 * em, alignSelf: 'flex-end' },
  body: { marginLeft: 30 * em, marginRight: 30 * em, alignItems: 'center', flex: 1 },
  title: { marginTop: 15 * em, fontWeight: 'bold' },
  titleImg: {
    width: 58 * em,
    height: 58 * em,
    borderRadius: 29 * em,
    marginTop: 18 * em,
  },
  comment: { textAlign: 'center', lineHeight: 23 * em, width: 285 * em, marginTop: 5 * em },
  listItem: {
    marginTop: 46 * em,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  itemCheckedText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    width: 260 * em,
    textAlign: 'left',
    fontFamily: 'Lato-Bold',
  },
  itemText: { width: 260 * em, textAlign: 'left', fontFamily: 'Lato-Bold' },
};
export default FriendParticipatePopupScreen;
