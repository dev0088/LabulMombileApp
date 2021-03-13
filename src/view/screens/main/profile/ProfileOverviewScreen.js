import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, WIDTH, HEIGHT } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import ProfileCommonLabel from 'view/components/ProfileCommonLabel';
import CommonHeader from 'view/components/CommonHeader';
import CommonBackButton from 'view/components/CommonBackButton';

import ProfileCommonAvatar from 'view/components/ProfileCommonAvatar';

const ProfileOverviewScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CommonHeader rightTxt={'Modifier mon profil'} style={styles.header} />
        <View style={styles.firstPopView}>
          <ProfileCommonAvatar icon={require('assets/images/avatar.png')} style={styles.avatar} logoVisible={false} />
          <TitleText text={'Mathieu Torin'} style={styles.fullNameText} />
          <TitleText text={'Mes cercles'} style={styles.title} />
          <View style={styles.circlesView}>
            <View style={styles.labelView}>
              <ProfileCommonLabel icon={require('assets/images/ic_neighbour.png')} number={0} name={'Mes voisins'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel icon={require('assets/images/ic_friends.png')} number={0} name={'Mes amis'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel icon={require('assets/images/ic_family.png')} number={0} name={'Ma famille'} />
            </View>
          </View>
        </View>
        <View style={styles.secondPopView}>
          <TitleText text={'Mes demandes'} style={styles.title} />
          <View style={styles.circlesView}>
            <View style={styles.labelView}>
              <ProfileCommonLabel number={0} name={'Mes voisins'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel number={0} name={'Mes amis'} />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel number={0} name={'Ma famille'} />
            </View>
          </View>
          <TitleText text={'Mes badges'} style={styles.title} />

          <CommonText text={'Tu n’as pas de badges'} style={styles.noticeText} />
          <CommonText text={'Crée des demandes pour avoir des badges'} style={styles.requestText} />
        </View>
      </ScrollView>
      <CommonBackButton />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
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
    height: 325 * em,
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
  requestText: {
    fontSize: 14 * em,
    marginBottom: 65 * em,
  },
};

export default ProfileOverviewScreen;
