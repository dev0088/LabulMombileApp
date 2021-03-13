import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, Image, ActionSheetIOS } from 'react-native';
import TitleText from 'view/components/TitleText';
import CommentText from 'view/components/CommentText';
import { em, WIDTH, HEIGHT } from 'view/common/const';
import { Actions } from 'react-native-router-flux';
import ProfileCommonAvatar from 'view/components/ProfileCommonAvatar';
import ProfileCommonCard from 'view/components/ProfileCommonCard';
import ProfileCommonListItem from 'view/components/ProfileCommonListItem';
import CommonButton from 'view/components/CommonButton';
const user = {
  fullName: 'Dathieu Torin',
};
const ProfileHomeScreen = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.topView}>
        <ProfileCommonAvatar style={styles.avatar} fullName={user.fullName} />
        <TouchableOpacity onPress={() => Actions.profileOverview()}>
          <Text style={styles.txtFullName}>{user.fullName}</Text>
          <Text style={styles.txtGoToProfile}>Aller sur mon profil</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.cardContainer}>
          <ProfileCommonCard
            caption={'Mes demandes'}
            style={styles.cardStyle}
            icon={require('assets/images/ic_profile_request.png')}
            onPress={() => {
              Actions.myRequestProfileTab();
            }}
          />
          <ProfileCommonCard
            caption={'Mes cercles'}
            style={styles.cardStyle}
            icon={require('assets/images/ic_circles.png')}
            onPress={() => {
              Actions.myCircles();
            }}
          />
        </View>
        <View style={styles.listBox}>
          <CommentText text={'Mon compte'} style={styles.caption} />
          <ProfileCommonListItem
            text={'Mes informations'}
            style={styles.listItem}
            icon={require('assets/images/ic_info.png')}
            onPress={() => {
              Actions.myInformation();
            }}
          />
          <View style={styles.line1} />
          <ProfileCommonListItem
            text={'Mes réglages'}
            style={styles.listItem}
            icon={require('assets/images/ic_settings.png')}
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
            icon={require('assets/images/ic_location.png')}
            style={styles.listItem}
            onPress={() => {
              Actions.premiumSubscription();
            }}
          />
        </View>
        <View style={styles.rowContainer}>
          <View style={styles.imgBg}>
            <TitleText text={'Créer un compte'} style={styles.imageTextMain} />
            <TitleText text={'Pro/ Association/ institutionnel'} style={styles.imageTextSub} />
            <CommonButton style={styles.button} text={'Créer maintenant'} onPress={() => Actions.createAccountMenu()} />
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
  rowContainer: {
    flexDirection: 'row',
  },
  topView: {
    height: HEIGHT * 0.45,
    backgroundColor: '#40CDDE',
    alignItems: 'center',
  },
  avatar: {
    marginTop: 89 * em,
  },
  txtFullName: {
    marginTop: 15 * em,
    fontSize: 20 * em,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  txtGoToProfile: {
    marginTop: 5 * em,
    fontSize: 14 * em,
    color: '#FFFFFF',
  },
  scrollView: {
    width: WIDTH,
    backgroundColor: '#ffffff',
  },
  bottomView: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#254D5612',
    shadowOffset: {
      width: 0,
      height: 12 * em,
    },
    shadowRadius: 25 * em,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: -HEIGHT * 0.07,
    marginBottom: 30 * em,
  },
  cardStyle: {
    marginLeft: 7.5 * em,
    marginRight: 7.5 * em,
  },
  listBox: {
    marginTop: 15 * em,
  },
  caption: {
    width: '100%',
    textAlign: 'left',
    marginLeft: 30 * em,
    fontWeight: '300',
    marginBottom: 20 * em,
  },
  listItem: {
    marginLeft: 30 * em,
    marginRight: 30 * em,
  },
  line1: {
    marginLeft: 83 * em,
    marginBottom: 25 * em,
    marginTop: 15 * em,
    height: 0.5,
    backgroundColor: '#F0F5F7',
  },
  line2: {
    marginBottom: 19 * em,
    marginTop: 16 * em,
    height: 0.5,
    backgroundColor: '#F0F5F7',
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
  imageTextMain: {
    marginTop: 25 * em,
    fontSize: 20 * em,
    marginLeft: 18 * em,
  },
  imageTextSub: {
    fontSize: 15 * em,
    marginLeft: 18 * em,
    marginRight: -58 * em,
    marginBottom: 10 * em,
  },
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
  line3: {
    marginLeft: 30 * em,
    marginBottom: 25 * em,
    marginTop: 25 * em,
    height: 0.5,
    backgroundColor: '#F0F5F7',
  },
  imgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50 * em,
    marginBottom: 15 * em,
  },
  imgLogo: {
    height: 26 * em,
    width: 20 * em,
    resizeMode: 'contain',
    marginRight: 10 * em,
  },
  txtLogo: {
    height: 23 * em,
    width: 80 * em,
    resizeMode: 'contain',
  },
  txtVersion: {
    marginBottom: 110 * em,
  },
};

export default ProfileHomeScreen;
