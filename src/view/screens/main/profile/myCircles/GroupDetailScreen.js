import { View } from 'react-native';
import React, { useState } from 'react';
import { em, hm } from 'view/common/const';
import CirclesCommonListItem from 'view/components/adapter/CirclesCommonListItem';
import { FlatList } from 'react-native-gesture-handler';
import UserOptionPopupScreen from './UserOptionPopupScreen';
import CommonBackButton from 'view/components/button/CommonBackButton';
import CommonText from 'view/components/text/CommonText';

const usersData = [
  {
    sort: 'families',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
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
    userName: 'Antoine Durand',
    relationship: 'Mon voisin',
    avatar: require('assets/images/avatar.png'),
  },
];
const GroupDetailScreen = (props) => {
  const [userOptionVisible, setUserOptionVisible] = useState(false);
  const renderFlatList = ({ item, index }) => {
    return (
      <CirclesCommonListItem
        name={item.userName}
        subName={item.relationship}
        icon={item.avatar}
        style={[styles.listItem, { marginBottom: index === usersData.length - 1 ? 100 * hm : 35 * hm }]}
        onPress={() => setUserOptionVisible(true)}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CommonBackButton dark />
        <CommonText text={props.groupName} style={styles.headerTitle} />
      </View>
      <FlatList data={usersData} renderItem={renderFlatList} keyExtractor={(i) => i.id} style={styles.body} />

      <UserOptionPopupScreen visible={userOptionVisible} onPress={() => setUserOptionVisible(false)} />
    </View>
  );
};
export default GroupDetailScreen;
const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F0F5F7',
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
  body: { backgroundColor: '#ffffff', paddingTop: 35 * hm },
  header: {
    paddingLeft: 15 * em,
    height: 81 * hm,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10 * hm,
    justifyContent: 'flex-start',
    backgroundColor: '#ffffff',
  },
  headerTitle: {
    marginLeft: 10 * em,
    fontSize: 18 * em,
    color: '#1E2D60',
  },
};
