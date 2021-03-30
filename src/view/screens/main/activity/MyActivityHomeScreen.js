import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm } from 'view/common/const';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ActivityInviationsTabScreen from './ActivityInviationsTabScreen';
import { navigationRef } from 'view/screens/main/RootNavigation';
import ActivityNeedsTabScreen from './ActivityNeedsTabScreen';
import { NotificationOutline } from 'assets/svg/icons';
import CommonTabBar from 'view/components/other/CommonTabBar';
const Tab = createMaterialTopTabNavigator();

const MyActivityHomeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigationRef.current.navigate('MyNotifictions')}>
        <View style={styles.notificationBtn}>
          <NotificationOutline width={19 * hm} height={22 * hm} />
        </View>
      </TouchableOpacity>
      <TitleText text={'Mon activité'} style={styles.title} />
      <Tab.Navigator tabBar={(props) => <CommonTabBar {...props} />} swipeEnabled={false} initialRouteName="families">
        <Tab.Screen
          name="needs"
          options={{ title: 'Mes demandes', tabColor: '#40CDDE' }}
          component={ActivityNeedsTabScreen}
        />
        <Tab.Screen
          name="invitations"
          options={{ title: 'Mes invitations', tabColor: '#40CDDE' }}
          component={ActivityInviationsTabScreen}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    height: 181 * hm,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 0,
    marginBottom: 10 * hm,
  },
  title: {
    fontSize: 34 * hm,
    lineHeight: 38 * hm,
    height: 40 * hm,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 20 * hm,
    marginBottom: 14 * hm,
  },

  notificationBtn: { alignSelf: 'flex-end', marginRight: 30 * em, marginTop: 39 * hm },
};

export default MyActivityHomeScreen;
