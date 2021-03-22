import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, WIDTH, HEIGHT } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import ProfileCommonLabel from 'view/components/ProfileCommonLabel';
import CommonHeader from 'view/components/CommonHeader';
import CommonBackButton from 'view/components/CommonBackButton';

import ProfileCommonAvatar from 'view/components/ProfileCommonAvatar';
import CommentText from 'view/components/CommentText';
import CommonButton from 'view/components/CommonButton';

const UserProfileScreen = () => {
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
          <CommentText text="Je suis disponible le soir et le week-end" color="#1E2D60" />
          <CommentText
            text="En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage et dans tout le type de petits tr… Continuer à lire"
            color="#6A8596"
          />
          <View style={{ flexDirection: 'row',marginTop:10*em, marginBottom:5*em }}>
            <View style={styles.keywordTabView}>
              <Text style={styles.keywordTab}>Bricolage</Text>
            </View>
            <View style={styles.keywordTabView}>
              <Text style={styles.keywordTab}>Jardinage</Text>
            </View>
          </View>
          <CommonButton text="Ajouter à mon cercle" style={styles.addBtn} />
          <TitleText text={'Mes cercles'} style={styles.title} />
          <View style={styles.circlesView}>
            <View style={styles.labelView}>
              <ProfileCommonLabel icon={require('assets/images/ic_neighbour.png')} number={17} name={'Mes voisins'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel icon={require('assets/images/ic_friends.png')} number={23} name={'Mes amis'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel icon={require('assets/images/ic_family.png')} number={56} name={'Ma famille'} />
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
          <ScrollView horizontal={true} style={{ marginLeft: 30 * em }}>
            <Image style={styles.badgeIcon} />
            <Image style={styles.badgeIcon} />
            <Image style={styles.badgeIcon} />

            <Image style={styles.badgeIcon} />

            <Image style={styles.badgeIcon} />
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backBtn: { position: 'absolute', zIndex: 1, backgroundColor: '#ffffff', top: 27 * em, left: 15 * em },
  scrollView: {
    backgroundColor: '#40CDDE',
    paddingBottom: 16 * em,
  },
  header: { marginTop: 27 * em },
  firstPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
    marginTop: 76 * em,
    height: 555 * em,
    paddingHorizontal: 30 * em,
  },
  avatar: {
    marginTop: -54 * em,
    width: 108 * em,
    height: 108 * em,
  },
  fullNameText: {
    marginTop: 15 * em,
    marginBottom: 10 * em,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 35 * em,
    marginBottom: 20 * em,
    fontSize: 21 * em,
    fontWeight: 'bold',
  },
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

export default UserProfileScreen;
