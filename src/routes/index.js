import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import LoadingScreen from 'view/screens/LoadingScreen';
import HomeScreen from 'view/screens/HomeScreen';
import LoginMenuScreen from 'view/screens/account/LoginMenuScreen';
import SignupMenuScreen from 'view/screens/account/SignupMenuScreen';
import MainScreen from 'view/screens/main/MainScreen';
import LoginScreen from 'view/screens/account/LoginScreen';
import ForgotPasswordScreen from 'view/screens/account/ForgotPasswordScreen';
import SignupScreen from 'view/screens/account/SignupScreen';
import RegisterEmailScreen from 'view/screens/account/RegisterEmailScreen';
import RegisterNameScreen from 'view/screens/account/RegisterNameScreen';
import RegisterFamilyNameScreen from 'view/screens/account/RegisterFamilyNameScreen';
import RegisterMobileScreen from 'view/screens/account/RegisterMobileScreen';
import RegisterAddressScreen from 'view/screens/account/RegisterAddressScreen';
import ActivateLocationScreen from 'view/screens/account/ActivateLocationScreen';
import ActivateNotificationScreen from 'view/screens/account/ActivateNotificationScreen';
import MabulHomeScreen from 'view/screens/main/mabul/MabulHomeScreen';
import MabulOrganizeScreen from 'view/screens/main/mabul/organize/MabulOrganizeScreen';
import MabulSellScreen from 'view/screens/main/mabul/sell/MabulSellScreen';
import MabulNeedScreen from 'view/screens/main/mabul/need/MabulNeedScreen';
import MabulHelpNeedScreen from 'view/screens/main/mabul/need/MabulHelpNeedScreen';
import MabulServiceNeedScreen from 'view/screens/main/mabul/need/MabulServiceNeedScreen';
import MabulToolNeedScreen from 'view/screens/main/mabul/need/MabulToolNeedScreen';
import MabulDailyNeedScreen from 'view/screens/main/mabul/need/MabulDailyNeedScreen';

import MabulGiveScreen from 'view/screens/main/mabul/give/MabulGiveScreen';
import MabulSearchScreen from 'view/screens/main/mabul/search/MabulSearchScreen';
import ProfileOverviewScreen from 'view/screens/main/profile/ProfileOverviewScreen';
import MabulSellServiceScreen from 'view/screens/main/mabul/sell/MabulSellServiceScreen';
import FriendsSearchScreen from 'view/screens/main/friends/FriendSearchScreen';
import FriendsFilterScreen from 'view/screens/main/friends/FriendsFilterScreen';
import MyInformationScreen from 'view/screens/main/profile/MyInformationScreen';
import MySettingScreen from '../view/screens/main/profile/MySettingScreen';
import PremiumSubscriptionScreen from '../view/screens/main/profile/PremiumSubscriptionScreen';
import PremiumPurchasedScreen from '../view/screens/main/profile/PremiumPurchasedScreen';
import FriendOrganizeScreen from '../view/screens/main/friends/FriendOrganizeScreen';
import CreateAccountMenuScreen from '../view/screens/main/profile/CreateAccountMenuScreen';
import CreateProfessionalAccountScreen from '../view/screens/main/profile/CreateProfessionalAccountScreen';
import CreateCommunityAccountScreen from '../view/screens/main/profile/CreateCommunityAccountScreen';
import CreateAssociationAccountScreen from '../view/screens/main/profile/CreateAssociationAccountScreen';
import FriendSellScreen from '../view/screens/main/friends/FriendSellScreen';
import MabulFamilyNeedScreen from '../view/screens/main/mabul/need/MabulFamilyNeedScreen';
import MabulSellObjectScreen from '../view/screens/main/mabul/sell/MabulSellObjectScreen';
import MabulSellEnvironmentScreen from '../view/screens/main/mabul/sell/MabulSellEnvironmentScreen';
import MabulOrganizeTitleScreen from '../view/screens/main/mabul/organize/MabulOrganizeTitleScreen';
import MabulOrganizeUploadPhotoScreen from '../view/screens/main/mabul/organize/MabulOrganizeUploadPhotoScreen';
import InputLocationScreen from '../view/screens/main/friends/InputLocationScreen';
import MyCirclesScreen from '../view/screens/main/friends/MyCirclesScreen';
import MyRequestProfileTabScreen from '../view/screens/main/profile/MyRequestProfileTabScreen';
import PrivacyPolicyScreen from '../view/screens/main/profile/PrivacyPolicyScreen';
import TermsOfServiceScreen from '../view/screens/main/profile/TermsOfServiceScreen';
import ProRegisterMobilScreen from '../view/screens/main/profile/ProRegisterMobilScreen';
import ProRegisterAddressScreen from '../view/screens/main/profile/ProRegisterAddressScreen';
import ProRegisterEmailScreen from '../view/screens/main/profile/ProRegisterEmailScreen';

class Routes extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">

          <Scene key="loading" hideNavBar component={LoadingScreen} />
          <Scene key="home" hideNavBar component={HomeScreen} />
          <Scene key="friendOrganize" hideNavBar component={FriendOrganizeScreen} />
          <Scene key="friendSell" hideNavBar component={FriendSellScreen} />
          <Scene key="loginMenu" hideNavBar component={LoginMenuScreen} />
          <Scene key="signupMenu" hideNavBar component={SignupMenuScreen} />
          <Scene key="main" hideNavBar component={MainScreen} />
          <Scene key="login" hideNavBar component={LoginScreen} />
          <Scene key="forgotPassword" hideNavBar component={ForgotPasswordScreen} />
          <Scene key="signup" hideNavBar component={SignupScreen} />
          <Scene key="registerEmail" hideNavBar component={RegisterEmailScreen} />
          <Scene key="registerName" hideNavBar component={RegisterNameScreen} />
          <Scene key="registerFamilyName" hideNavBar component={RegisterFamilyNameScreen} />
          <Scene key="registerMobile" hideNavBar component={RegisterMobileScreen} />
          <Scene key="registerAddress" hideNavBar component={RegisterAddressScreen} />
          <Scene key="activateLocation" hideNavBar component={ActivateLocationScreen} />
          <Scene key="activateNotification" hideNavBar component={ActivateNotificationScreen} />
          <Scene key="friendsSearch" hideNavBar component={FriendsSearchScreen} />
          <Scene key="friendsFilter" hideNavBar component={FriendsFilterScreen} />

          <Scene key="inputLocation" hideNavBar component={InputLocationScreen} />
          <Scene key="mabulOrganize" hideNavBar component={MabulOrganizeScreen} />
          <Scene key="mabulOrganizeUploadPhoto" hideNavBar component={MabulOrganizeUploadPhotoScreen} />

          <Scene key="mabulSell" hideNavBar component={MabulSellScreen} />
          <Scene key="mabulSellService" hideNavBar component={MabulSellServiceScreen} />
          <Scene key="mabulSellObject" hideNavBar component={MabulSellObjectScreen} />
          <Scene key="mabulSellEnvironment" hideNavBar component={MabulSellEnvironmentScreen} />

          <Scene key="mabulNeed" hideNavBar component={MabulNeedScreen} />
          <Scene key="mabulHelpNeed" hideNavBar component={MabulHelpNeedScreen} />
          <Scene key="mabulServiceNeed" hideNavBar component={MabulServiceNeedScreen} />
          <Scene key="mabulToolNeed" hideNavBar component={MabulToolNeedScreen} />
          <Scene key="mabulFamilyNeed" hideNavBar component={MabulFamilyNeedScreen} />
          <Scene key="mabulDailyNeed" hideNavBar component={MabulDailyNeedScreen} />
          <Scene key="mabulOrganizeTitle" hideNavBar component={MabulOrganizeTitleScreen} />

          <Scene key="mabulSearch" hideNavBar component={MabulSearchScreen} />
          <Scene key="mabulGive" hideNavBar component={MabulGiveScreen} />
          <Scene key="profileOverview" hideNavBar component={ProfileOverviewScreen} />
          <Scene key="myCircles" hideNavBar component={MyCirclesScreen} />
          <Scene key="myInformation" hideNavBar component={MyInformationScreen} />
          <Scene key="createAccountMenu" hideNavBar component={CreateAccountMenuScreen} />
          <Scene key="createProfessionalAccount" hideNavBar component={CreateProfessionalAccountScreen} />
          <Scene key="createAssociationAccount" hideNavBar component={CreateAssociationAccountScreen} />
          <Scene key="createCommunityAccount" hideNavBar component={CreateCommunityAccountScreen} />
          <Scene key="proRegisterMobile" hideNavBar component={ProRegisterMobilScreen} />
          <Scene key="proRegisterAddress" hideNavBar component={ProRegisterAddressScreen} />
          <Scene key="proRegisterEmail" hideNavBar component={ProRegisterEmailScreen} />

          <Scene key="mySetting" hideNavBar component={MySettingScreen} />
          <Scene key="premiumSubscription" hideNavBar component={PremiumSubscriptionScreen} />
          <Scene key="premiumPurchased" hideNavBar component={PremiumPurchasedScreen} />
          <Scene key="mabulHome" hideNavBar component={MabulHomeScreen} />
          <Scene key="myRequestProfileTab" hideNavBar component={MyRequestProfileTabScreen} />
          <Scene key="privacyPolicy" hideNavBar component={PrivacyPolicyScreen} />
          <Scene key="termsOfService" hideNavBar component={TermsOfServiceScreen} />
        </Scene>
      </Router>
    );
  }

}

export default Routes;
