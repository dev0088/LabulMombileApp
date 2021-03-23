import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FriendsNavigator from './friends/FriendsNavigator';
import CalendarHomeScreen from './calendar/CalendarHomeScreen';
import MyActivityHomeScreen from './activity/MyActivityHomeScreen';
import ProfileHomeScreen from './profile/ProfileHomeScreen';
import ProProfileHomeScreen from './profile/proProfile/ProProfileHomeScreen';

import MabulHomeScreeen from './mabul/MabulHomeScreen';
import { em, WIDTH, HEIGHT } from 'view/common/const';
import { navigationRef } from './RootNavigation';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';
import MyNotificationsScreen from './activity/MyNotificationsScreen';
import {
  TabPlus,
  TabCalendarOff,
  TabCalendarOn,
  TabCardOff,
  TabCardOn,
  TabMessageOff,
  TabMessageOn,
} from 'assets/svg/icons';
const Tab = createBottomTabNavigator();

export default function MainScreen(props) {
  const [selectedTab, setSelectedTab] = React.useState(0);
  const [mabulVisible, setMabulVisible] = React.useState(false);

  let mapImage = TabCardOff(styles.TapImage);
  if (selectedTab === 0) {
    mapImage = TabCardOn(styles.TapImage);
  }
  let calendarImage = TabCalendarOff(styles.TapImage);
  if (selectedTab === 1) {
    calendarImage = TabCalendarOn(styles.TapImage);
  }
  let addImage = TabPlus(styles.AddImage);
  let chatImage = TabMessageOff(styles.TapImage);
  if (selectedTab === 3) {
    chatImage = TabMessageOn(styles.TapImage);
  }
  let profileImage = require('assets/images/tab_profile_off.png');
  if (selectedTab === 4) {
    profileImage = require('assets/images/tab_profile_on.png');
  }

  return (
    <View style={styles.TabBarMainContainer}>
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator initialRouteName={props.tabNav ? props.tabNav : 'Friends'}>
          <Tab.Screen name="Friends" component={FriendsNavigator} options={{ tabBarVisible: false }} />
          <Tab.Screen name="Calendar" component={CalendarHomeScreen} options={{ tabBarVisible: false }} />
          <Tab.Screen name="Activity" component={MyActivityHomeScreen} options={{ tabBarVisible: false }} />
          <Tab.Screen name="MyNotifictions" component={MyNotificationsScreen} options={{ tabBarVisible: false }} />
          <Tab.Screen
            name="Profile"
            component={ProfileHomeScreen}
            options={{ tabBarVisible: false }}
            initialParams={{ userProfile: props.userProfile }}
          />
          <Tab.Screen
            name="ProProfile"
            component={ProProfileHomeScreen}
            options={{ tabBarVisible: false }}
            initialParams={{ userProfile: props.userProfile }}
          />
        </Tab.Navigator>
      </NavigationContainer>
      <ImageBackground style={styles.VirtualTabButtons} source={require('assets/images/bg_bottom_tab.png')}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigationRef.current.navigate('Friends');
            setSelectedTab(0);
          }}
          style={styles.TapImageWrapper}>
          {mapImage}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigationRef.current.navigate('Calendar');
            setSelectedTab(1);
          }}
          style={styles.TapImageWrapper}>
          {calendarImage}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            setMabulVisible(true);
            setSelectedTab(2);
          }}
          style={styles.AddImageWrapper}>
          {addImage}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigationRef.current.navigate('Activity');
            setSelectedTab(3);
          }}
          style={styles.TapImageWrapper}>
          {chatImage}
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigationRef.current.navigate('Profile');
            setSelectedTab(4);
          }}
          style={styles.TapImageWrapper}>
          <Image source={profileImage} style={styles.TapImage} />
        </TouchableOpacity>
      </ImageBackground>
      <Modal
        backdropColor={'transparent'}
        statusBarTranslucent={true}
        style={styles.modalStyle}
        isVisible={mabulVisible}>
        <MabulHomeScreeen
          onClosePress={() => {
            setMabulVisible(false);
          }}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  TabBarMainContainer: {
    flex: 1,
  },
  modalStyle: { margin: 0, height: HEIGHT },
  VirtualTabButtons: {
    flex: 1,
    width: '100%',
    height: 70 * em,
    position: 'absolute',
    left: 0,
    bottom: 0,
    flexDirection: 'row',
  },
  TabBackground: {
    flex: 1,
    width: '100%',
    resizeMode: 'contain',
  },
  AddImageWrapper: {
    flex: 1,
    marginTop: 2 * em,
    alignItems: 'center',
  },
  AddImage: {
    width: 46 * em,
    height: 46 * em,
  },
  TapImageWrapper: {
    flex: 1,
    width: 22 * em,
    height: 22 * em,
    resizeMode: 'contain',
    marginTop: 18 * em,
    alignItems: 'center',
  },
  TapImage: { width: 22 * em, height: 22 * em },
});
