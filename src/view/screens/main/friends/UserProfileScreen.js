import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, WIDTH } from 'view/common/const';
import ProfileCommonLabel from 'view/components/ProfileCommonLabel';
import CommonBackButton from 'view/components/button/CommonBackButton';
import ProfileCommonSpecView from 'view/components/ProfileCommonSpecView';

import ProfileCommonAvatar from 'view/components/ProfileCommonAvatar';
import CommentText from 'view/components/text/CommentText';
import CommonButton from 'view/components/button/CommonButton';
import {
  Family,
  Friend,
  Neighbor,
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
const UserProfileScreen = () => {
  const badgeView = (
    <ScrollView horizontal={true} style={{ marginLeft: 30 * em }}>
      <View style={styles.badgeIcon}>{feedbackIcons[0].icon}</View>
      <View style={styles.badgeIcon}>{feedbackIcons[1].icon}</View>
      <View style={styles.badgeIcon}>{feedbackIcons[2].icon}</View>
      <View style={styles.badgeIcon}>{feedbackIcons[3].icon}</View>
      <View style={styles.badgeIcon}>{feedbackIcons[4].icon}</View>
      <View style={styles.badgeIcon}>{feedbackIcons[5].icon}</View>
      <View style={styles.badgeIcon}>{feedbackIcons[6].icon}</View>
      <View style={styles.badgeIcon}>{feedbackIcons[7].icon}</View>
      <View style={styles.badgeIcon}>{feedbackIcons[8].icon}</View>
    </ScrollView>
  );
  return (
    <View style={styles.container}>
      <CommonBackButton dark={true} style={styles.backBtn} />
      <ScrollView style={styles.scrollView}>
        <View style={styles.firstPopView}>
          <ProfileCommonAvatar
            borderWidth={0}
            icon={require('assets/images/avatar.png')}
            style={styles.avatar}
            logoVisible={false}
          />
          <TitleText text={'Amandine Bernard'} style={styles.fullNameText} />
          <CommentText
            text="Je suis disponible le soir et le week-end"
            color="#1E2D60"
            style={{ marginBottom: 20 * em }}
          />
          <CommentText
            text="En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage et dans tout le type de petits tr… Continuer à lire"
            color="#6A8596"
            style={{ lineHeight: 24 * em }}
          />
          <View style={{ flexDirection: 'row', marginTop: 10 * em, marginBottom: 20 * em }}>
            <ProfileCommonSpecView text={'Bricolage'} />
            <ProfileCommonSpecView text={'Jardinage'} />
          </View>
          <CommonButton
            text="Ajouter à mon cercle"
            style={styles.addBtn}
            textStyle={{ fontSize: 12 * em, fontFamily: 'Lato-Black' }}
          />
          <TitleText text={'Mes cercles'} style={styles.title} />
          <View style={styles.circlesView}>
            <View style={styles.labelView}>
              <ProfileCommonLabel icon={Family({ width: 48 * em, height: 48 * em })} number={17} name={'Mes voisins'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel icon={Friend({ width: 48 * em, height: 48 * em })} number={23} name={'Mes amis'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel
                icon={Neighbor({ width: 48 * em, height: 48 * em })}
                number={56}
                name={'Ma famille'}
              />
            </View>
          </View>
        </View>
        <View style={styles.secondPopView}>
          <TitleText text={'Mes demandes'} style={styles.title} />
          <View style={styles.circlesView}>
            <View style={styles.labelView}>
              <ProfileCommonLabel number={24} name={'Coup de main'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel number={6} name={'Dons'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel number={2} name={'Évènements'} />
            </View>
          </View>
          <TitleText text={'Mes badges'} style={styles.title} />
          {badgeView}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: 'transparent' },
  backBtn: { position: 'absolute', zIndex: 1, backgroundColor: '#ffffff', top: 27 * em, left: 15 * em },
  scrollView: { backgroundColor: '#40CDDE', paddingBottom: 16 * em },
  header: { marginTop: 27 * em },
  firstPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
    marginTop: 76 * em,
    paddingHorizontal: 30 * em,
    paddingBottom: 35 * em,
  },
  avatar: { marginTop: -54 * em, width: 108 * em, height: 108 * em },
  fullNameText: { marginTop: 15 * em, marginBottom: 10 * em },
  title: { marginTop: 35 * em, marginBottom: 11 * em, fontSize: 21 * em },
  circlesView: { flexDirection: 'row', marginLeft: 0.072 * WIDTH, marginRight: 0.072 * WIDTH },
  labelView: { width: WIDTH * 0.285 },
  secondPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 20 * em,
    borderTopRightRadius: 20 * em,
    marginTop: 15 * em,
    height: 321 * em,
  },
  noticeText: { marginBottom: 60 * em },
  keywordTab: {
    paddingVertical: 5 * em,
    paddingHorizontal: 10 * em,
    fontSize: 12 * em,
    lineHeight: 14 * em,
    backgroundColor: '#F0F5F7',
    borderRadius: 19 * em,
    color: '#6A8596',
  },
  keywordTabView: { paddingVertical: 5 * em, paddingHorizontal: 10 * em },
  addBtn: {
    paddingVertical: 10 * em,
    paddingHorizontal: 20 * em,
    width: 'auto',
    fontSize: 12 * em,
    lineHeight: 15 * em,
  },
  badgeIcon: {
    width: 60 * em,
    height: 60 * em,
    borderRadius: 30 * em,
    elevation: 1,
    marginRight: 18 * em,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

export default UserProfileScreen;
