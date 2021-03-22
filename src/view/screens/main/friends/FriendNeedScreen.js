import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, hexToRGB } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import CommentText from 'view/components/CommentText';
import CommonButton from 'view/components/CommonButton';
import { Actions } from 'react-native-router-flux';
import FriendInvitePopupScreen from './FriendInvitePopupScreen';
import ServiceType from 'model/service/ServiceType';
import NeedService from 'model/service/NeedService';
import NeedServiceType from 'model/service/NeedServiceType';
import GiveService from 'model/service/GiveService';
import SellService from 'model/service/SellService';
import SellServiceType from 'model/service/SellServiceType';
import OrganizeService from 'model/service/OrganizeService';
import User from 'model/User';
import OrganizeServiceType from 'model/service/OrganizeServiceType';
import MabulDetailView from '../../../components/MabulDetailView';
import { Send, Option } from 'assets/svg/icons';
import FriendCancelParticipatePopupScreen from './FriendCancelParticipatePopupScreen';
const needData = Object.assign(
  new NeedService(
    new User('Amandine Bernard', require('assets/images/sample_user_1.png'), 'anton@gmail.com'),
    'J’ai besoin coup de main bricolage',
    'Réparer une chaise',
    new Date(),
    require('assets/images/sample_cover_2.png'),
    3,
    NeedServiceType.REPAIR
  ),
  { status: 'participated', relationship: 'Mon ami/ma familie' }
);
const FriendNeedScreen = (props) => {
  console.log(props.data);
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const [cancelParticipatePopupVisible, setcancelParticipatePopupVisible] = useState(false);

  const [data] = useState(props.data ? props.data : needData);
  const [status, setStatus] = useState(data.status);
  const RequestButton = (
    <CommonButton text={'Participer'} style={styles.partBtn} onPress={() => setStatus('waiting')} />
  );
  const ParticipationButton = (
    <CommonButton
      onPress={() => setcancelParticipatePopupVisible(true)}
      rightIcon={<View />}
      leftIcon={Option({ width: 4 * em, height: 18 * em })}
      iconStyle={{ marginRight: 20 * em }}
      text={'Je participe'}
      textStyle={{ color: '#1BD39A' }}
      style={[styles.partBtn, { backgroundColor: '#D0F5EA', justifyContent: 'space-between' }]}
    />
  );
  const OpinionButton = (
    <CommonButton style={styles.partBtn} text="Donner mon avis" onPress={() => Actions.friendGiveBadge()} />
  );
  const WaitingButton = (
    <CommonButton
      onPress={() => setStatus('inProgress')}
      rightIcon={Send({ width: 13 * em, height: 13 * em })}
      iconStyle={{ marginRight: 10 * em }}
      text={'Demande de participation envoyé'}
      textStyle={{ color: '#22D39A' }}
      style={[styles.partBtn, { backgroundColor: '#F0F5F7' }]}
    />
  );
  var mainButton;
  switch (status) {
    case 'inProgress':
      mainButton = ParticipationButton;
      break;
    case 'canceled':
      mainButton = OpinionButton;
      break;
    case 'waiting':
      mainButton = WaitingButton;
      break;
    default:
      mainButton = RequestButton;
      break;
  }
  return (
    <View style={styles.container}>
      <MabulDetailView data={data} />
      <View style={styles.btnBox}>{mainButton}</View>
      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
      <FriendCancelParticipatePopupScreen
        visible={cancelParticipatePopupVisible}
        onPress={() => setcancelParticipatePopupVisible(false)}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backBtnView: {
    zIndex: 1,
    width: 44 * em,
    height: 44 * em,
    position: 'absolute',
    left: 15 * em,
    top: 27 * em,
  },
  backBtn: { width: 44 * em, height: 44 * em, resizeMode: 'contain', zIndex: 1 },
  cover: {
    width: '100%',
    height: 312 * em,
  },
  body: {
    marginTop: -41 * em,
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    width: '100%',
  },
  timeTxt: {
    lineHeight: 19 * em,
    paddingLeft: 30 * em,
    paddingRight: 30 * em,
    paddingTop: 11 * em,
    paddingBottom: 11 * em,
    marginTop: -17 * em,
    backgroundColor: '#ffffff',
    width: 167 * em,
    borderTopRightRadius: 15 * em,
    borderBottomRightRadius: 15 * em,
  },
  userInfo: {
    marginTop: 14 * em,
    height: 39 * em,
    marginLeft: 30 * em,
    flexDirection: 'row',
  },
  avatarBox: { width: 42 * em, flexDirection: 'row' },
  avatar: { width: 35.82 * em, height: 35.82 * em },
  badge: {
    borderRadius: 20 * em,
    width: 21 * em,
    height: 21 * em,
    marginLeft: -14.82 * em,
    alignSelf: 'flex-end',
    borderWidth: 2 * em,
    borderColor: '#ffffff',
  },
  userName: {
    marginLeft: 15 * em,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  comment: { lineHeight: 15 * em, fontSize: 13 * em, textAlign: 'left', marginLeft: 30 * em, marginTop: 21 * em },
  title: {
    height: 28 * em,
    lineHeight: 30 * em,
    fontSize: 24 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 5 * em,
    fontWeight: 'bold',
  },
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  content: { lineHeight: 25 * em, textAlign: 'left', marginTop: 3 * em },
  quizBtn: { color: '#41D0E2', marginLeft: 30 * em, marginTop: 25 * em, backgroundColor: hexToRGB('#41D0E2', 0.2) },
  inviteBtn: { marginLeft: 30 * em, marginTop: 15 * em, backgroundColor: 'transparent', color: '#41D0E2' },

  btnBox: {
    paddingLeft: 26 * em,
    paddingRight: 26 * em,
    paddingTop: 15 * em,
    paddingBottom: 22 * em,
    backgroundColor: '#ffffff',
  },
};

export default FriendNeedScreen;