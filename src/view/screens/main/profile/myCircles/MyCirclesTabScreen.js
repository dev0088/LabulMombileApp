import { View, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { em, hm } from 'view/common/const';
import CirclesCommonListItem from 'view/components/adapter/CirclesCommonListItem';
import { FlatList } from 'react-native-gesture-handler';
import CommonCircularButton from 'view/components/button/CommonCircularButton';
import { Actions } from 'react-native-router-flux';
import UserType from 'model/user/UserType';
import UserOptionPopupScreen from './UserOptionPopupScreen';
import GroupOptionPopupScreen from './GroupOptionPopupScreen';
import { AddFamily, AddFriend, AddNeighbor } from 'assets/svg/icons';
const usersData = [
  {
    sort: 'families',
    userName: 'Cousins',
    type: UserType.GROUP,
    number: '8 membres',
    avatar: require('assets/images/avatar.png'),
  },
  {
    sort: 'families',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('assets/images/avatar.png'),
  },
  {
    sort: 'families',
    userName: 'Repas de Dimanche',
    type: UserType.GROUP,
    number: '7 membres',
    avatar: require('assets/images/avatar.png'),
  },
  {
    sort: 'families',
    userName: 'Robert Richard',
    relationship: 'Ma famille',
    avatar: require('assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Aide aux travaux de Robert',
    type: UserType.GROUP,
    number: '5 amis',
    avatar: require('assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Amélie Petit',
    relationship: 'Mon voisin/ mon ami',
    avatar: require('assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Amélie Petit',
    relationship: 'Mon voisin/ mon ami',
    avatar: require('assets/images/avatar.png'),
  },

  {
    sort: 'neighbours',
    userName: 'Amélie',
    relationship: 'Mon voisin/ mon ami',
    avatar: require('assets/images/avatar.png'),
  },
  {
    sort: 'neighbours',
    userName: 'Sport',
    type: UserType.GROUP,
    number: '3 voisins',
    avatar: require('assets/images/avatar.png'),
  },
  {
    sort: 'neighbours',
    userName: 'Antoine Durand',
    relationship: 'Mon voisin',
    avatar: require('assets/images/avatar.png'),
  },
];
const themeColors = {
  families: '#EF88B9',
  friends: '#6784DA',
  neighbours: '#40CDDE',
};
const addIconSize = { width: 59 * em, height: 59 * em };
const themeButton = {
  families: AddFamily(addIconSize),
  friends: AddFriend(addIconSize),
  neighbours: AddNeighbor(addIconSize),
};
const MyCirclesTabScreen = (props) => {
  const sort = props.route.params.sort;
  const [groupOptionVisible, setGroupOptionVisible] = useState(false);
  const [userOptionVisible, setUserOptionVisible] = useState(false);
  console.log(themeButton[sort]);
  const renderFlatList = ({ item }) => {
    if (item.sort === sort) {
      if (item.type === UserType.GROUP) {
        return (
          <CirclesCommonListItem
            sort={item.sort}
            type={item.type}
            name={item.userName}
            subName={item.number}
            icon={item.avatar}
            style={styles.listItem}
            onLeftPress={() => {
              Actions.groupDetail({ groupName: item.userName });
            }}
            onRightPress={() => setGroupOptionVisible(true)}
          />
        );
      }
      return (
        <CirclesCommonListItem
          name={item.userName}
          subName={item.relationship}
          icon={item.avatar}
          style={styles.listItem}
          onPress={() => setUserOptionVisible(true)}
        />
      );
    } else {
      <></>;
    }
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={usersData}
        renderItem={renderFlatList}
        style={{
          backgroundColor: '#ffffff',
          flex: 1,
          width: '100%',
          paddingTop: 25 * em,
          paddingHorizontal: 30 * em,
          // backgroundColor: '#ffffff',
        }}
        keyExtractor={(i) => i.id}
      />
      <TouchableOpacity
        style={{ position: 'absolute', bottom: 30 * em, right: 30 * em }}
        onPress={() => Actions.createGroup({ themeColor: themeColors[sort] })}>
        {themeButton[sort]}
      </TouchableOpacity>
      <UserOptionPopupScreen visible={userOptionVisible} onPress={() => setUserOptionVisible(false)} />
      <GroupOptionPopupScreen visible={groupOptionVisible} onPress={() => setGroupOptionVisible(false)} />
    </View>
  );
};
export default MyCirclesTabScreen;
const styles = {
  container: { flex: 1, backgroundColor: '#F0F5F7', paddingTop: 10 * hm },
  listItem: {
    height: 42 * hm,
    marginBottom: 35 * hm,

    width: 315 * em,
  },
  icon: { width: 25 * em, height: 18 * em, tintColor: '#ffffff' },
};
