import * as React from 'react';
import { View, StyleSheet, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FriendsNavigator from './friends/FriendsNavigator';
import CalendarHomeScreen from './calendar/CalendarHomeScreen';
import MyActivityHomeScreen from './activity/MyActivityHomeScreen';
import ProfileHomeScreen from './profile/ProfileHomeScreen';
import { em } from 'view/common/const';
import { navigationRef } from './RootNavigation';
import { Actions } from 'react-native-router-flux';

const Tab = createBottomTabNavigator();

export default function MainScreen() {
  const [selectedTab, setSelectedTab] = React.useState(0);

  let mapImage = require('assets/images/tab_map_off.png');
  if (selectedTab === 0) {
    mapImage = require('assets/images/tab_map_on.png');
  }
  let calendarImage = require('assets/images/tab_calendar_off.png');
  if (selectedTab === 1) {
    calendarImage = require('assets/images/tab_calendar_on.png');
  }
  let addImage = require('assets/images/tab_add.png');
  let chatImage = require('assets/images/tab_chat_off.png');
  if (selectedTab === 3) {
    chatImage = require('assets/images/tab_chat_on.png');
  }
  let profileImage = require('assets/images/tab_profile_off.png');
  if (selectedTab === 4) {
    profileImage = require('assets/images/tab_profile_on.png');
  }
  return (
    <View style={styles.TabBarMainContainer}>
      <NavigationContainer ref={navigationRef}>
        <Tab.Navigator>
          <Tab.Screen name="Friends" component={FriendsNavigator} options={{ tabBarVisible: false }} />
          <Tab.Screen name="Calendar" component={CalendarHomeScreen} options={{ tabBarVisible: false }} />
          <Tab.Screen name="Activity" component={MyActivityHomeScreen} options={{ tabBarVisible: false }} />
          <Tab.Screen name="Profile" component={ProfileHomeScreen} options={{ tabBarVisible: false }} />
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
          <Image source={mapImage} style={styles.TapImage} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigationRef.current.navigate('Calendar');
            setSelectedTab(1);
          }}
          style={styles.TapImageWrapper}>
          <Image source={calendarImage} style={styles.TapImage} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            Actions.mabulHome();
            setSelectedTab(2);
          }}
          style={styles.AddImageWrapper}>
          <Image source={addImage} style={styles.AddImage} />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            navigationRef.current.navigate('Activity');
            setSelectedTab(3);
          }}
          style={styles.TapImageWrapper}>
          <Image source={chatImage} style={styles.TapImage} />
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
    </View>
  );
}

const styles = StyleSheet.create({
  TabBarMainContainer: {
    flex: 1,
  },
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
    resizeMode: 'contain',
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
  TapImage: {
    width: 22 * em,
    height: 22 * em,
    resizeMode: 'contain',
  },
});
