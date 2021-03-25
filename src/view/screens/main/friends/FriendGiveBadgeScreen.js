import React, { useState } from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { em, WIDTH } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import TitleText from 'view/components/text/TitleText';
import ProfileCommonAvatar from 'view/components/view/ProfileCommonAvatar';
import CommentText from 'view/components/text/CommentText';
import CommonButton from 'view/components/button/CommonButton';
import FriendBadgeNoticePopupScreen from './FriendBadgeNoticePopupScreen';
import {
  Ambianceur,
  Aperitif,
  Benevolent,
  Bricologe,
  Confidence,
  Discret,
  Dishes,
  Helpful,
  GoodNeighbor,
  GoodHost,
  HandHeart,
  Hypersociable,
  Resourceful,
  WellLiving,
  SwissKnife,
  CheckBlue,
} from 'assets/svg/icons';
import { Actions } from 'react-native-router-flux';

const iconSize = { width: 33 * em, height: 33 * em };
const feedbackIcons = [
  { id: 0, name: 'Le discret/ pas intrusif', icon: Discret(iconSize) },
  { id: 1, name: 'Le pro du bricolage', icon: Bricologe(iconSize) },
  { id: 2, name: 'Le pro des p’tits plats', icon: Dishes(iconSize) },
  { id: 3, name: 'Dingue de confiance', icon: Confidence(iconSize) },
  { id: 4, name: 'Hypersociable', icon: Hypersociable(iconSize) },
  { id: 5, name: 'Bon hôte', icon: GoodHost(iconSize) },
  { id: 6, name: 'Pro des Apèros', icon: Aperitif(iconSize) },
  { id: 7, name: 'La main sur le coeur', icon: HandHeart(iconSize) },
  { id: 8, name: 'Le débrouillard', icon: Resourceful(iconSize) },
  { id: 9, name: 'Le bon vivant', icon: WellLiving(iconSize) },
  { id: 10, name: 'Le bon voisin', icon: GoodNeighbor(iconSize) },
  { id: 11, name: 'Le serviable', icon: Helpful(iconSize) },
  { id: 12, name: 'L’ambianceur', icon: Ambianceur(iconSize) },
  { id: 13, name: 'Le couteau suisse', icon: SwissKnife(iconSize) },
  { id: 14, name: 'Le bienveillant­­­', icon: Benevolent(iconSize) },
];
const BadgeCard = ({ icon, name }) => {
  const [clicked, setClicked] = useState(false);
  return (
    <View style={styles.badgeCard}>
      <TouchableOpacity
        onPress={() => setClicked(!clicked)}
        style={[styles.circleContainer, { elevation: clicked ? 1 : 0 }]}>
        {clicked ? <CheckBlue /> : icon}
      </TouchableOpacity>
      <CommentText text={name} style={{ width: 81 * em }} />
    </View>
  );
};

const FriendGiveBadgeScreen = () => {
  const [badgeNoticeVisible, setBadgeNoticeVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CommentText text="Annuler" color="#ffffff" onPress={() => Actions.pop()} />
      </View>
      <ScrollView>
        <View style={styles.firstPopView}>
          <ProfileCommonAvatar
            borderWidth={0}
            icon={require('assets/images/avatar.png')}
            style={styles.avatar}
            logoVisible={false}
          />
          <CommonText text={'Amandine Bernard'} style={styles.title} color="#1E2D60" />
          <TitleText text="Quel badge tu lui attribues ?" color="#1E2D60" style={styles.comment} />
          <CommentText text="3 maximum" color="#A0AEB8" style={styles.notice} />
          <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-between' }}>
            {feedbackIcons.map((feedback) => (
              <BadgeCard icon={feedback.icon} name={feedback.name} key={feedback.id} />
            ))}
          </View>
          <View />
        </View>
      </ScrollView>
      <View style={styles.btnBox}>
        <CommonButton text={'Continuer'} onPress={() => setBadgeNoticeVisible(true)} />
      </View>
      <FriendBadgeNoticePopupScreen
        visible={badgeNoticeVisible}
        selected={[feedbackIcons[0], feedbackIcons[1], feedbackIcons[2]]}
        onPress={() => setBadgeNoticeVisible(false)}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#40CDDE',
  },
  backBtn: { position: 'absolute', zIndex: 1, backgroundColor: '#ffffff', top: 27 * em, left: 15 * em },
  scrollView: {
    backgroundColor: '#40CDDE',
  },
  badgeCard: {
    marginBottom: 35 * em,
  },
  circleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1 * em,
    borderColor: '#F0F5F7',
    backgroundColor: '#ffffff',
    width: 81 * em,
    height: 81 * em,
    borderRadius: 40.5 * em,
  },

  header: { height: 82 * em, flexDirection: 'row-reverse', alignItems: 'center', paddingHorizontal: 29 * em },
  btnBox: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: 23 * em,
    backgroundColor: 'transparent',
  },
  firstPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopRightRadius: 20 * em,
    borderTopLeftRadius: 20 * em,
    marginTop: 47 * em,
    flex: 1,
    paddingHorizontal: 30 * em,
  },
  avatar: {
    marginTop: (-97 / 2) * em,
    width: 97 * em,
    height: 97 * em,
  },
  title: { marginTop: 10 * em, marginBottom: 10 * em, fontFamily: 'Lato-Bold' },
  comment: { fontSize: 22 * em, marginTop: 10 * em, marginBottom: 5 * em },
  notice: { marginTop: 5 * em, marginBottom: 35 * em },
  circlesView: {
    flexDirection: 'row',
    marginLeft: 0.072 * WIDTH,
    marginRight: 0.072 * WIDTH,
  },
  labelView: {
    width: WIDTH * 0.285,
  },
  secondPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20 * em,
    borderTopRightRadius: 20 * em,
    marginTop: 15 * em,
    height: 321 * em,
  },
  noticeText: {
    marginBottom: 60 * em,
    fontWeight: 'bold',
  },
  keywordTab: {
    paddingVertical: 5 * em,
    paddingHorizontal: 10 * em,
    fontSize: 12 * em,
    lineHeight: 14 * em,
    backgroundColor: '#F0F5F7',
    borderRadius: 19 * em,
    color: '#6A8596',
  },
  keywordTabView: {
    paddingVertical: 5 * em,
    paddingHorizontal: 10 * em,
  },
  addBtn: {
    paddingVertical: 10 * em,
    paddingHorizontal: 20 * em,
    width: 160 * em,
    fontSize: 12 * em,
    lineHeight: 15 * em,
  },
  badgeIcon: {
    width: 60 * em,
    height: 60 * em,
    marginRight: 18 * em,
    backgroundColor: 'yellow',
  },
};

export default FriendGiveBadgeScreen;
