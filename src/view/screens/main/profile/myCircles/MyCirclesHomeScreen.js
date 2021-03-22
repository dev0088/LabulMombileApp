import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em } from 'view/common/const';
import CommonTabBar from 'view/components/CommonTabBar';
import { navigationRef } from 'view/screens/main/RootNavigation';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MyCirclesTabScreen from './MyCirclesTabScreen';
import CommonBackButton from '../../../../components/CommonBackButton';

const Tab = createMaterialTopTabNavigator();

const MyCirclesHomeScreen = () => {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <CommonBackButton dark style={{ marginLeft: 15 * em }} />
        <TitleText text={'Mes Circles'} style={styles.title} />
        <Tab.Navigator tabBar={(props) => <CommonTabBar {...props} />} swipeEnabled={false} initialRouteName="families">
          <Tab.Screen
            name="families"
            options={{ title: 'Ma famille', tabColor: '#EF88B9' }}
            component={MyCirclesTabScreen}
            initialParams={{ sort: 'families' }}
          />
          <Tab.Screen
            name="friends"
            options={{ title: 'Mes amis', tabColor: '#6784DA' }}
            component={MyCirclesTabScreen}
            initialParams={{ sort: 'friends' }}
          />
          <Tab.Screen
            name="neighbours"
            options={{ title: 'Mes voisins', tabColor: '#40CDDE' }}
            component={MyCirclesTabScreen}
            initialParams={{ sort: 'neighbours' }}
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
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    height: 40 * em,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 20 * em,
    marginBottom: 14 * em,
  },
};

export default MyCirclesHomeScreen;