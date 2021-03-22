import { View, TouchableOpacity, Image, Text } from 'react-native';
import React, { useState } from 'react';
import { em, hm } from 'view/common/const';
import CirclesCommonListItem from 'view/components/CirclesCommonListItem';
import { FlatList } from 'react-native-gesture-handler';
import CommonCircularButton from 'view/components/CommonCircularButton';
import { Actions } from 'react-native-router-flux';
import UserType from 'model/user/UserType';
import UserOptionPopupScreen from './UserOptionPopupScreen';
import GroupOptionPopupScreen from './GroupOptionPopupScreen';

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
const MyCirclesTabScreen = (props) => {
  const sort = props.route.params.sort;
  const [groupOptionVisible, setGroupOptionVisible] = useState(false);
  const [userOptionVisible, setUserOptionVisible] = useState(false);

  const renderFlatList = ({ item }) => {
    if (item.sort === sort) {
      if (item.type === UserType.GROUP) {
        return (
          <CirclesCommonListItem
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
      <FlatList data={usersData} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
      <CommonCircularButton
        radius={30 * em}
        src={require('assets/images/ic_add_blue.png')}
        iconStyle={styles.icon}
        bgColor={themeColors[sort]}
        style={styles.addBtn}
        onPress={() => Actions.createGroup()}
      />
      <UserOptionPopupScreen visible={userOptionVisible} onPress={() => setUserOptionVisible(false)} />
      <GroupOptionPopupScreen visible={groupOptionVisible} onPress={() => setGroupOptionVisible(false)} />
    </View>
  );
};
export default MyCirclesTabScreen;
const styles = {
  container: {
    paddingTop: 25 * em,
    flex: 1,
    backgroundColor: '#ffffff',
  },
  listItem: {
    height: 42 * hm,
    marginBottom: 35 * hm,
    marginLeft: 30 * em,
    marginRight: 30 * em,
    width: 315 * em,
  },
  addBtn: {
    position: 'absolute',
    bottom: 30 * em,
    right: 30 * em,
  },
  icon: {
    width: 25 * em,
    height: 18 * em,
    tintColor: '#ffffff',
  },
};
