import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em } from 'view/common/const';
import CommonText from '../../../components/CommonText';
import CommentText from '../../../components/CommentText';
import CommonButton from '../../../components/CommonButton';
import { Actions } from 'react-native-router-flux';
import FriendParticipatePopupScreen from './FriendParticipatePopupScreen';
import FriendInvitePopupScreen from './FriendInvitePopupScreen';

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

const FriendOrganizeScreen = () => {
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const [participatePopupVisible, setParticipatePopupVisible] = useState(false);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={require('assets/images/sample_cover_1.png')} style={styles.cover} />

        <View style={styles.body}>
          <CommonText text={'04 Fév · 08h00'} style={styles.timeTxt} />
          <View style={styles.userInfo}>
            <View style={styles.avatarBox}>
              <Image style={styles.avatar} source={require('assets/images/sample_user_1.png')} />
              <Image style={styles.badge} />
            </View>
            <CommentText style={styles.userName} text="Philippe Durand" color={'#1E2D60'} />
          </View>
          <CommentText style={styles.comment} text="J’organise Atelier" color={'#1E2D60'} />
          <TitleText text={'Photographie vintage'} style={styles.title} />
          <View style={{ marginLeft: 30 * em }}>
            <CommentText text={'Lorem ipsum dolor sit amet, consetetur '} style={styles.content} />
            <CommentText text={'sadipscing elitr, sed diam nonumy eirmod tempor '} style={styles.content} />
            <CommentText text={'invidunt ut labore et dolore magna aliquyam erat, '} style={styles.content} />
            <View style={styles.contentBox}>
              <CommentText text={'ssed diam voluptua. At vero eos… '} style={styles.content} />
              <CommentText text={'Continuer à lire'} color={'#40CDDE'} style={styles.content} />
            </View>
          </View>
          <CommonButton style={styles.quizBtn} text="Poser une question" />
          <CommonButton
            style={styles.inviteBtn}
            text="Inviter à participer"
            onPress={() => setInvitePopupVisible(true)}
          />
          <View style={{ height: 130 * em }} />
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => Actions.pop()} style={styles.backBtnView}>
        <Image style={styles.backBtn} source={require('assets/images/btn_back_wrap.png')} />
      </TouchableOpacity>
      <View style={styles.btnBox}>
        <CommonButton text={'Participer'} style={styles.partBtn} onPress={() => setParticipatePopupVisible(true)} />
      </View>
      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
      <FriendParticipatePopupScreen
        visible={participatePopupVisible}
        onPress={() => setParticipatePopupVisible(false)}
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
    backgroundColor: '#FFF4D9',
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
  },
};

export default FriendOrganizeScreen;
