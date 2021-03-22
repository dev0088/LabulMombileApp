import React, { useState } from 'react';
import { View, ScrollView, Image, ImageBackground } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, WIDTH } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import ProfileCommonLabel from 'view/components/ProfileCommonLabel';
import CommonHeader from 'view/components/CommonHeader';
import ProfileCommonAvatar from 'view/components/ProfileCommonAvatar';
import { Actions } from 'react-native-router-flux';
import CommentText from 'view/components/CommentText';
import ProfileCommonSpecView from 'view/components/ProfileCommonSpecView';

const ProProfileOverviewScreen = (props) => {
  const [] = useState(false);
  const [userProfile] = useState(props.userProfile);
  const servicesView = userProfile.services ? (
    userProfile.services && (
      <View style={{ flexDirection: 'row' }}>
        {userProfile.services.map((service) => (
          <ProfileCommonSpecView text={service} />
        ))}
      </View>
    )
  ) : (
    <>
      <CommonText text={'Ajoute tes services'} style={styles.noticeText} />
      <CommonText text={'Aide les utilisateurs à mieux comprendre ton établissement.'} style={styles.requestText} />
    </>
  );
  const badgesView = userProfile.badges ? (
    <ScrollView horizontal={true} style={{ marginLeft: 30 * em }}>
      {userProfile.badges.map((badge, index) => {
        <Image style={styles.badgeIcon} source={badge} />;
      })}
    </ScrollView>
  ) : (
    <>
      <CommonText text={'Tu n’as pas de badges'} style={styles.noticeText} />
      <CommonText text={'Crée des demandes pour avoir des badges'} style={styles.requestText} />
    </>
  );
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <CommonHeader
          rightTxt={'Modifier mon profil'}
          style={styles.header}
          onLeftPress={() => Actions.proProfileHome({ userProfile: userProfile })}
          onRightPress={() => Actions.editProProfile({ userProfile: userProfile })}
        />
        {userProfile.cover && (
          <ImageBackground source={userProfile.cover} style={styles.cover} blurRadius={8}>
            <View style={{ backgroundColor: 'rgba(30, 45, 96, 0.64)',flex:1 }} />
          </ImageBackground>
        )}
        <View style={styles.firstPopView}>
          <ProfileCommonAvatar
            icon={require('assets/images/avatar_curology.png')}
            style={styles.avatar}
            logoVisible={false}
          />
          <TitleText text={userProfile.name} style={styles.fullNameText} />
          <CommentText text={userProfile.type} color="#1E2D60" />

          {userProfile.presentation && <CommentText text={userProfile.presentation} color="#6A8596" />}

          <TitleText text={'Mes publications'} style={styles.title} />
          <View style={styles.circlesView}>
            <View style={styles.labelView}>
              <ProfileCommonLabel
                icon={require('assets/images/ic_neighbour.png')}
                number={userProfile.publications.tips}
                name={'Bons plans'}
              />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel
                icon={require('assets/images/ic_friends.png')}
                number={userProfile.publications.promotions}
                name={'Promotions'}
              />
            </View>
            <View style={styles.labelView}>
              <ProfileCommonLabel
                icon={require('assets/images/ic_family.png')}
                number={userProfile.publications.events}
                name={'Évènements'}
              />
            </View>
          </View>
          <TitleText text={'Mes services'} style={styles.title} />
          {servicesView}
        </View>
        <View style={styles.secondPopView}>
          <TitleText text={'Mes badges'} style={styles.title} />
          {badgesView}
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
  scrollView: {
    backgroundColor: '#7398FD',
    paddingBottom: 16 * em,
  },
  cover: { zIndex: -1, resizeMode: 'contain', width: '100%', height: 200 * em,position:'absolute' },
  header: { marginTop: 27 * em },
  firstPopView: {
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 20 * em,
    marginTop: 76 * em,
    paddingHorizontal: 30 * em,
    paddingBottom: 35 * em,
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
    marginTop: 17 * em,
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
    paddingBottom: 47 * em,
  },
  noticeText: {
    marginBottom: 10 * em,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  requestText: {
    fontSize: 14 * em,
    textAlign: 'center',
  },
  badgeIcon: {
    width: 60 * em,
    height: 60 * em,
    marginRight: 18 * em,
    backgroundColor: 'yellow',
  },
};

export default ProProfileOverviewScreen;
