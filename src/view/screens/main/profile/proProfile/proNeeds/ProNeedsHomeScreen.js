import React from 'react';
import { View, TouchableOpacity, Image, ScrollView } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em } from 'view/common/const';
import SwitchButton from 'view/components/SwitchButton';
import CommonText from 'view/components/CommonText';
import CommentText from 'view/components/CommentText';
import CommonTabBar from 'view/components/CommonTabBar';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { navigationRef } from 'view/screens/main/RootNavigation';
import { NavigationContainer } from '@react-navigation/native';
import CommonBackButton from 'view/components/CommonBackButton';
import ProTipsTabScreen from './ProTipsTabScreen';
import ProPromotionsTabScreen from './ProPromotionsTabScreen';
import ProEventsTabScreen from './ProEventsTabScreen';

const Tab = createMaterialTopTabNavigator();

const ProNeedsHomeScreen = (props) => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CommonBackButton dark style={{ marginLeft: 15 * em }} />
        <TitleText text={'Mes demandes'} style={styles.title} />
        <Tab.Navigator tabBar={(props) => <CommonTabBar {...props} />} swipeEnabled={false} initialRouteName="tips">
          <Tab.Screen name="tips" options={{ title: 'Bons plans', tabColor: '#40CDDE' }} component={ProTipsTabScreen} />
          <Tab.Screen
            name="promotions"
            options={{ title: 'Promotions', tabColor: '#40CDDE' }}
            component={ProPromotionsTabScreen}
          />
          <Tab.Screen
            name="events"
            options={{ title: 'Évènements', tabColor: '#40CDDE' }}
            component={ProEventsTabScreen}
          />
        </Tab.Navigator>
      </View>
    </NavigationContainer>
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
  notificationBtn: {
    width: 19 * em,
    height: 22 * em,
    alignSelf: 'flex-end',
    marginRight: 30 * em,
    marginTop: 39 * em,
  },
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    height: 40 * em,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 10 * em,
    marginBottom: 14 * em,
  },
};

export default ProNeedsHomeScreen;