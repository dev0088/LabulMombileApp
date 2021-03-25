import React, { useState } from 'react';
import { View, TouchableOpacity, ScrollView, Text, Image, ActionSheetIOS } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import CommentText from 'view/components/text/CommentText';
import { em, WIDTH, HEIGHT } from 'view/common/const';
import { Actions } from 'react-native-router-flux';
import ProfileCommonAvatar from 'view/components/view/ProfileCommonAvatar';
import ProfileCommonCard from 'view/components/adapter/ProfileCommonCard';
import ProfileCommonListItem from 'view/components/adapter/ProfileCommonListItem';
import CommonButton from 'view/components/button/CommonButton';
import AccountChangeMenu from './AccountChangeMenu';
import { MyNeeds, Circles, Information, Setting, AddressBlue } from 'assets/svg/icons';
const originalMyProfile = {
  avatar: '',
  fullName: 'Mathieu Torin',
  circles: { families: 0, friends: 0, neighbours: 0 },
  needs: { helps: 0, donations: 0, events: 0 },
};
const iconSize = { width: 38 * em, height: 38 * em };
const ProfileHomeScreen = (props) => {
  const [userProfile] = useState(props.userProfile ? props.userProfile : originalMyProfile);
  return (
    <ScrollView style={styles.scrollView}>
      <AccountChangeMenu
        style={styles.dropDown}
        type="my"
        visible={props.route.params.userProfile || props.userProfile ? true : false}
      />
      <View style={styles.topView}>
        <ProfileCommonAvatar style={styles.avatar} fullName={userProfile.fullName} />
        <TouchableOpacity onPress={() => Actions.profileOverview({ userProfile: userProfile })}>
          <TitleText style={styles.txtFullName} text={userProfile.fullName} />
          <CommentText style={styles.txtGoToProfile} text="Aller sur mon profil" />
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.cardContainer}>
          <ProfileCommonCard
            caption={'Mes demandes'}
            style={styles.cardStyle}
            icon={MyNeeds(iconSize)}
            onPress={() => {
              Actions.myNeedsHome();
            }}
          />
          <ProfileCommonCard
            caption={'Mes cercles'}
            style={styles.cardStyle}
            icon={Circles(iconSize)}
            onPress={() => {
              Actions.myCirclesHome();
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
              Actions.myInformation();
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
            }
            style={styles.listItem}
            onPress={() => {
              Actions.premiumSubscription({ profileType: 'my' });
            }}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.imgBg}>
            <TitleText text={'Créer un compte'} style={styles.imageTextMain} />
            <TitleText text={'Pro/ Association/ institutionnel'} style={styles.imageTextSub} />
            <CommonButton
              style={styles.proBtn}
              textStyle={{ fontSize: 12 * em }}
              text={'Créer maintenant'}
              onPress={() => Actions.createAccountMenu()}
            />
          </View>
          <View>
            <Image style={styles.imgBg} source={require('assets/images/profie_banner.png')} />
          </View>
        </View>

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
        </View>
        <CommentText text={'Version 1.0'} style={styles.txtVersion} color={'#BFCDDB'} />
        <View style={styles.emptyView} />
      </View>
    </ScrollView>
  );
};

const styles = {
  rowContainer: { flexDirection: 'row' },
  dropDown: { right: 30 * em, top: 33 * em, position: 'absolute', zIndex: 1 },

  topView: { height: HEIGHT * 0.45, backgroundColor: '#40CDDE', alignItems: 'center' },
  avatar: { marginTop: 89 * em, height: 70 * em, width: 70 * em },
  txtFullName: { marginTop: 15 * em, fontSize: 20 * em, color: '#FFFFFF', textAlign: 'center' },
  txtGoToProfile: { marginTop: 5 * em, fontSize: 14 * em, color: '#FFFFFF', textAlign: 'center' },
  scrollView: { width: WIDTH, backgroundColor: '#ffffff' },
  bottomView: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#254D5612',
    shadowOffset: { width: 0, height: 12 * em },
    shadowRadius: 25 * em,
  },
  cardContainer: {
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: -HEIGHT * 0.07,
    marginBottom: 30 * em,
  },
  cardStyle: { width: 150 * em },
  listBox: { marginTop: 15 * em },
  caption: {
    width: '100%',
    textAlign: 'left',
    marginLeft: 30 * em,
    fontWeight: '300',
    marginBottom: 20 * em,
  },
  listItem: { marginLeft: 30 * em, marginRight: 30 * em },
  line1: { marginLeft: 83 * em, marginBottom: 25 * em, marginTop: 15 * em, height: 0.5, backgroundColor: '#F0F5F7' },
  line2: { marginBottom: 19 * em, marginTop: 16 * em, height: 0.5, backgroundColor: '#F0F5F7' },
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
  proBtn: {
    borderRadius: 9 * em,
    width: 126 * em,
    height: 33 * em,
    paddingVertical: 9 * em,
    marginLeft: 15 * em,
  },
  line3: { marginLeft: 30 * em, marginBottom: 25 * em, marginTop: 25 * em, height: 0.5, backgroundColor: '#F0F5F7' },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50 * em,
    marginBottom: 15 * em,
  },
  imgLogo: { height: 26 * em, width: 20 * em, resizeMode: 'contain', marginRight: 10 * em },
  txtLogo: { height: 23 * em, width: 80 * em, resizeMode: 'contain' },
  txtVersion: { marginBottom: 110 * em },
};

export default ProfileHomeScreen;
