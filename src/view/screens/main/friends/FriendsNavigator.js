import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { em } from 'view/common/const';
import FriendsListScreen from './FriendsListScreen';
import FriendsMenuScreen from './FriendsMenuScreen';
import CommonBlueHeader from 'view/components/CommonBlueHeader';
import SwitchButton from 'view/components/SwitchButton';
import { Actions } from 'react-native-router-flux';

const Tab = createMaterialTopTabNavigator();

export default function FriendsNavigator(props) {
  const [activeTab, setActiveTab] = React.useState(1);
  return (
    <View style={styles.TabBarMainContainer}>
      <Tab.Navigator tabBar={() => null} swipeEnabled={false}>
        <Tab.Screen name="Carte" component={FriendsMenuScreen} />
        <Tab.Screen name="Liste" component={FriendsListScreen} />
      </Tab.Navigator>
      <View style={styles.TabControlContainer}>
        <CommonBlueHeader />
        <View style={styles.TabButtonContainer}>
          <TouchableOpacity
            onPress={() => {
              Actions.friendsSearch();
            }}>
            <Image source={require('assets/images/ic_search.png')} style={{ width: 84 * em, height: 84 * em }} />
          </TouchableOpacity>
          <SwitchButton
            onValueChange={(val) => {
              setActiveTab(val);
              console.log(props.navigation);
              if (val === 1) {
                props.navigation.jumpTo('Carte');
              } else {
                props.navigation.jumpTo('Liste');
              }
            }}
            text1="Carte"
            text2="Liste"
            switchWidth={140 * em}
            switchHeight={43 * em}
            switchdirection="ltr"
            switchBorderColor="#ffffff"
            switchBackgroundColor="#fff"
            btnBorderColor="#ffffff"
            btnBackgroundColor="#1E2D60"
            fontColor="#6A8596"
            activeFontColor="#fff"
            style={{ marginTop: 6 * em }}
          />
          <TouchableOpacity
            onPress={() => {
              Actions.friendsFilter();
            }}>
            <Image source={require('assets/images/ic_filter.png')} style={{ width: 84 * em, height: 84 * em }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TabBarMainContainer: {
    flex: 1,
  },
  TabControlContainer: { position: 'absolute', flex: 1, width: '100%' },
  TabButtonContainer: { width: '100%', justifyContent: 'space-between', flexDirection: 'row', marginTop: 6 * em },
});
