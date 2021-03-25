import React, { useState } from 'react';
import { View, Image, ScrollView } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hexToRGB } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import CommentText from 'view/components/text/CommentText';
import CommonButton from 'view/components/button/CommonButton';
import CommonBackButton from 'view/components/button/CommonBackButton';

import { Actions } from 'react-native-router-flux';
import AvatarWithBadge from 'view/components/view/AvatarWithBadge';
import FriendInvitePopupScreen from 'view/screens/main/friends/FriendInvitePopupScreen';
import { getUserBadge } from 'view/common/icons';
import CommonListItem from 'view/components/adapter/CommonListItem';
import NeedStatusType from '../../../model/service/NeedStatusType';

const MabulDetailView = (props) => {
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const [data] = useState(props.data);
  const userBadge = getUserBadge(data.type, data.subType);
  const colorStyles = { button: { color: '#41D0E2' }, label: { color: '#A0AEB8' } };
  const InviteButton = (
    <CommonButton
      style={styles.inviteBtn}
      text="Inviter à participer"
      textStyle={colorStyles.button}
      onPress={() => setInvitePopupVisible(true)}
    />
  );
  const ModifyButton = (
    <CommonButton
      style={styles.quizBtn}
      textStyle={colorStyles.button}
      text="Modifier"
      onPress={() => Actions.editNeed()}
    />
  );
  const AskButton = <CommonButton style={styles.quizBtn} textStyle={{ color: '#41D0E2' }} text="Poser une question" />;
  return (
    <>
      <ScrollView style={styles.scrollView}>
        <Image source={data.coverImage} style={styles.cover} />
        <View style={styles.body}>
          <CommonText
            text={data.status === NeedStatusType.CANCELED ? 'Terminé' : '04 Fév · 08h00'}
            style={styles.timeTxt}
            color="#6A8596"
          />
          <CommonListItem
            style={styles.userInfo}
            icon={
              <AvatarWithBadge
                style={{ marginRight: 21 * em }}
                avatar={data.user.photo}
                badge={userBadge}
                avatarDiameter={35 * em}
                badgeDiameter={21 * em}
                onPress={() => props.onAvatarPress()}
              />
            }
            title={data.user.name}
            titleStyle={styles.userName}
            subTitle={data.relationship && 'Mon ami/ ma famille'}
            subTitleStyle={colorStyles.label}
          />

          <CommentText style={styles.comment} text={data.title} color={'#1E2D60'} />
          <TitleText text={data.organName} style={styles.title} />
          <View style={{ marginLeft: 30 * em }}>
            <CommentText
              text={
                'Lorem ipsum dolor sit amet, consetetur \nsadipscing elitr, sed diam nonumy eirmod tempor\ninvidunt ut labore et dolore magna aliquyam erat, '
              }
              style={styles.content}
            />
            <View style={styles.contentBox}>
              <CommentText text={'ssed diam voluptua. At vero eos… '} style={styles.content} />
              <CommentText text={'Continuer à lire'} color={'#40CDDE'} style={styles.content} />
            </View>
          </View>
          {data.status === 'canceled' ? <></> : data.relationship ? AskButton : ModifyButton}
          {data.status !== 'canceled' && InviteButton}
          <View style={{ height: 130 * em }} />
        </View>
      </ScrollView>
      <CommonBackButton dark style={styles.backBtnView} />

      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
    </>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backBtnView: { backgroundColor: '#ffffff', position: 'absolute', left: 15 * em, top: 27 * em },
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
    fontFamily: 'Lato-Bold',
    lineHeight: 19 * em,
    paddingLeft: 30 * em,
    paddingRight: 30 * em,
    paddingTop: 11 * em,
    paddingBottom: 11 * em,
    marginTop: -17 * em,
    backgroundColor: '#ffffff',
    alignSelf: 'baseline',
    borderTopRightRadius: 15 * em,
    borderBottomRightRadius: 15 * em,
  },
  userInfo: {
    marginTop: 14 * em,
    height: 39 * em,
    marginLeft: 30 * em,
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
    fontFamily: 'Lato-Bold',

    textAlign: 'left',
    textAlignVertical: 'center',
    color: '#1E2D60',
  },
  comment: { lineHeight: 15 * em, fontSize: 13 * em, textAlign: 'left', marginLeft: 30 * em, marginTop: 21 * em },
  title: {
    lineHeight: 30 * em,
    fontSize: 24 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 5 * em,
    fontFamily: 'Lato-Black',
  },
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  content: { lineHeight: 25 * em, textAlign: 'left', marginTop: 3 * em },
  quizBtn: { marginLeft: 30 * em, marginTop: 25 * em, backgroundColor: hexToRGB('#41D0E2', 0.2) },
  inviteBtn: { marginLeft: 30 * em, marginTop: 15 * em, backgroundColor: 'transparent' },

  btnBox: {
    paddingLeft: 26 * em,
    paddingRight: 26 * em,
    paddingTop: 15 * em,
    paddingBottom: 22 * em,
    backgroundColor: '#ffffff',
  },
};

export default MabulDetailView;
