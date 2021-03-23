import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Text, Image, ActionSheetIOS, ImageBackground } from 'react-native';
import CommentText from 'view/components/text/CommentText';
import { em, WIDTH, HEIGHT } from 'view/common/const';
import { Actions } from 'react-native-router-flux';
import ProfileCommonAvatar from 'view/components/ProfileCommonAvatar';
import ProfileCommonCard from 'view/components/adapter/ProfileCommonCard';
import ProfileCommonListItem from 'view/components/adapter/ProfileCommonListItem';
import AccountChangeMenu from '../AccountChangeMenu';
import { ProNeeds,MyNeeds, Circles, Information, Setting, AddressBlue } from 'assets/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };

const originalProProfile = {
  avatar: '',
  name: 'Curology',
  type: 'Professional',
  publications: { tips: 0, promotions: 0, events: 0 },
};
const ProProfileHomeScreen = (props) => {
  const [userProfile] = useState(props.userProfile ? props.userProfile : originalProProfile);

  return (
    <View>
      <AccountChangeMenu style={styles.dropDown} type="pro" visible={props.userProfile ? true : false} />
      <ScrollView style={styles.scrollView}>
        <ImageBackground style={styles.topView} source={userProfile.cover} blurRadius={8}>
          <View
            style={{
              backgroundColor: userProfile.cover ? 'rgba(30, 45, 96, 0.64)' : '#7398FD',
              flex: 1,
              width: '100%',
              alignItems: 'center',
            }}>
            <ProfileCommonAvatar style={styles.avatar} fullName={userProfile.name} icon={userProfile.avatar} pro />
            <TouchableOpacity onPress={() => Actions.proProfileOverview({ userProfile: originalProProfile })}>
              <Text style={styles.txtFullName}>{userProfile.name}</Text>
              <Text style={styles.txtGoToProfile}>Aller sur mon profil</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.bottomView}>
          <View style={styles.cardContainer}>
            <ProfileCommonCard
              caption={'Mes demandes'}
              style={styles.cardStyle}
              icon={ProNeeds({width:38*em, height:38*em,})}
              onPress={() => {
                Actions.proNeedsHome();
              }}
            />
          </View>
          <View style={styles.listBox}>
            <CommentText text={'Mon compte'} style={styles.caption} />
            <ProfileCommonListItem
              text={'Mes informations'}
              style={styles.listItem}
              icon={Information(iconSize)}
              onPress={() => {
                Actions.myProInformation();
              }}
            />
            <View style={styles.line1} />
            <ProfileCommonListItem
              text={'Mes réglages'}
              style={styles.listItem}
              icon={Setting(iconSize)}
              onPress={() => {
                Actions.mySetting();
              }}
            />
          </View>
          <View style={styles.line2} />

          <View style={styles.listBox}>
            <CommentText text={'Mon abonnement'} style={styles.caption} />
            <ProfileCommonListItem
              text={'Abonnement Premim'}
              subText={'En savoir plus'}
              icon={
                <View
                  style={{
                    width: 38 * em,
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: 38 * em,
                    borderRadius: 19 * em,
                    backgroundColor: 'rgba(115, 152, 253, 0.2)',
                  }}>
                  {AddressBlue({ width: 20 * em, height: 22 * em })}
                </View>
              }              style={styles.listItem}
              onPress={() => {
                Actions.premiumSubscription({ profileType: 'pro' });
              }}
            />
          </View>
          <View style={styles.line2} />

          <View style={styles.listBox}>
            <CommentText text={'À propos'} style={styles.caption} />
            <ProfileCommonListItem
              text={'Politique de confidentialité'}
              style={styles.listItem}
              onPress={() => {
                Actions.privacyPolicy();
              }}
            />
            <View style={styles.line3} />
            <ProfileCommonListItem
              text={'Conditions générales d’utilisation'}
              style={styles.listItem}
              onPress={() => {
                Actions.termsOfService();
              }}
            />
          </View>
          <View style={styles.imgContainer}>
            <Image source={require('assets/images/img_logo.png')} style={styles.imgLogo} />
            <Image source={require('assets/images/txt_logo.png')} style={styles.txtLogo} />
            <Text style={styles.proText}>Pro</Text>
          </View>
          <CommentText text={'Version 1.0'} style={styles.txtVersion} color={'#BFCDDB'} />
          <View style={styles.emptyView} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  rowContainer: { flexDirection: 'row' },
  topView: { height: HEIGHT * 0.45, alignItems: 'center' },
  avatar: { marginTop: 89 * em, height: 70 * em, width: 70 * em },
  txtFullName: { marginTop: 15 * em, fontSize: 20 * em, color: '#FFFFFF', fontWeight: 'bold', textAlign: 'center' },
  txtGoToProfile: { marginTop: 5 * em, fontSize: 14 * em, color: '#FFFFFF', textAlign: 'center' },
  scrollView: { width: WIDTH, backgroundColor: '#ffffff' },
  dropDown: { right: 30 * em, top: 33 * em, position: 'absolute', zIndex: 1 },
  bottomView: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#254D5612',
    shadowOffset: { width: 0, height: 12 * em },
    shadowRadius: 25 * em,
    paddingHorizontal: 30 * em,
  },
  cardContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: -HEIGHT * 0.07, marginBottom: 30 * em },
  cardStyle: { flexGrow: 1 },
  listBox: { marginTop: 15 * em },
  caption: { width: '100%', textAlign: 'left', fontWeight: '300', marginBottom: 20 * em },
  listItem: {},
  line1: { marginLeft: 53 * em, marginBottom: 25 * em, marginTop: 15 * em, height: 1 * em, backgroundColor: '#F0F5F7' },
  line2: {
    marginBottom: 30 * em,
    marginTop: 25 * em,
    height: 1 * em,
    backgroundColor: '#F0F5F7',
    marginLeft: -30 * em,
    marginRight: -30 * em,
  },
  imgBg: {
    height: HEIGHT * 0.21,
    flex: 1,
    backgroundColor: '#40CDDE0C',
    marginTop: 35 * em,
    marginBottom: 20 * em,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  imageTextMain: { marginTop: 25 * em, fontSize: 20 * em, marginLeft: 18 * em },
  imageTextSub: { fontSize: 15 * em, marginLeft: 18 * em, marginRight: -58 * em, marginBottom: 10 * em },
  button: {
    fontSize: 12 * em,
    lineHeight: 15 * em,
    borderRadius: 9 * em,
    width: 126 * em,
    height: 33 * em,
    padding: 9 * em,
    borderWidth: 1 * em,
    borderColor: '#40CDDE',
    marginLeft: 15 * em,
  },
  line3: { marginBottom: 25 * em, marginTop: 25 * em, height: 1 * em, backgroundColor: '#F0F5F7' },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50 * em,
    marginBottom: 15 * em,
  },
  imgLogo: { height: 26 * em, width: 20 * em, resizeMode: 'contain', marginRight: 10 * em, tintColor: '#7398FD' },
  txtLogo: { height: 23 * em, width: 80 * em, resizeMode: 'contain', tintColor: '#7398FD' },
  proText: { fontSize: 11 * em, lineHeight: 12 * em, alignSelf: 'flex-start', color: '#7398FD' },
  txtVersion: { marginBottom: 110 * em },
};

export default ProProfileHomeScreen;
