import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { em } from 'view/common/const';
import CommonText from '../../../components/CommonText';
import TitleText from '../../../components/TitleText';
import SearchBox from '../../../components/SearchBox';
import SearchCommonListItem from '../../../components/SearchCommonListItem';
import Modal from 'react-native-modal';
import CommonBackButton from '../../../components/CommonBackButton';
import CommonTextInput from '../../../components/CommonTextInput';
import CommonButton from '../../../components/CommonButton';

const FriendBadgeNoticePopupScreen = (props) => {
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <View style={styles.body}>
        <CommonBackButton dark style={{ marginLeft: -15 * em }} />

        <View style={styles.iconView}>
          <View style={styles.circleContainer}>{props.selected[0].icon}</View>
          <View style={[styles.circleContainer, { marginTop: -18 * em }]}>{props.selected[1].icon}</View>
          <View style={styles.circleContainer}>{props.selected[2].icon}</View>
        </View>
        <TitleText text="Super !" style={styles.title} />
        <CommonText text="Tu veux laisser un commentaire ?" style={styles.comment} />
        <CommonTextInput text={'Écrit ici'} isPasswordInput={false} style={styles.input} />
      </View>
      <CommonButton
        style={styles.btn}
        textStyle={{ color: '#40CDDE' }}
        text="Continuer sans commentaire"
        onPress={props.onPress}
      />
    </Modal>
  );
};
const styles = {
  container: {
    backgroundColor: 'white',
    marginTop: 38 * em,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    borderTopRightRadius: 10 * em,
    borderTopLeftRadius: 10 * em,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  body: { paddingHorizontal: 30 * em, paddingTop: 15 * em },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1 * em,
    borderColor: '#F0F5F7',
    backgroundColor: '#ffffff',
    width: 66 * em,
    height: 67 * em,
    borderRadius: 40.5 * em,
  },

  btn: { backgroundColor: '#ffffff', borderWidth: 1 * em, borderColor: '#40CDDE', marginBottom: 31 * em },
  iconView: {
    marginTop: 47 * em,
    marginBottom: 35 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 43 * em,
  },
  input: { height: 52 * em },
  title: { marginBottom: 10 * em, alignSelf: 'flex-start', alignSelf: 'center' },
  comment: { marginBottom: 16 * em, alignSelf: 'center' },
  listItem: { marginBottom: 35 * em },
};
export default FriendBadgeNoticePopupScreen;
