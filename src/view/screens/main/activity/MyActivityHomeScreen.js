import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em } from 'view/common/const';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import MyInviationsTabScreen from './MyInviationsTabScreen';
import { navigationRef } from 'view/screens/main/RootNavigation';
import MyNeedsTabScreen from './MyNeedsTabScreen';
import { NotificationOutline } from 'assets/svg/icons';
import CommonTabBar from 'view/components/other/CommonTabBar';
const Tab = createMaterialTopTabNavigator();

const MyActivityHomeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigationRef.current.navigate('MyNotifictions')}>
        <View style={styles.notificationBtn}>
          <NotificationOutline width={19 * em} height={22 * em} />
        </View>
      </TouchableOpacity>
      <TitleText text={'Mon activité'} style={styles.title} />
      <Tab.Navigator tabBar={(props) => <CommonTabBar {...props} />} swipeEnabled={false} initialRouteName="families">
        <Tab.Screen
          name="needs"
          options={{ title: 'Mes demandes', tabColor: '#40CDDE' }}
          component={MyNeedsTabScreen}
        />
        <Tab.Screen
          name="invitations"
          options={{ title: 'Mes invitations', tabColor: '#40CDDE' }}
          component={MyInviationsTabScreen}
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
    height: 181 * em,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 0,
    marginBottom: 10 * em,
  },
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    height: 40 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 20 * em,
    marginBottom: 14 * em,
  },

  notificationBtn: { alignSelf: 'flex-end', marginRight: 30 * em, marginTop: 39 * em },
};

export default MyActivityHomeScreen;
