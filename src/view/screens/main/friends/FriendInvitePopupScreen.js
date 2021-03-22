import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { em } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import TitleText from 'view/components/TitleText';
import SearchBox from 'view/components/SearchBox';
import SearchCommonListItem from 'view/components/SearchCommonListItem';
import Modal from 'react-native-modal';

const FriendInvitePopupScreen = (props) => {
  const [searchedUsers, getSearchResult] = useState([
    {
      id: 0,
      userName: 'Amandine Bernard',
      avatar: require('assets/images/avatar.png'),
      invited: true,
    },
    {
      id: 1,
      userName: 'Amélie Petit',
      avatar: require('assets/images/avatar.png'),
      invited: false,
    },
    {
      id: 2,
      userName: 'Antoine Durand',
      avatar: require('assets/images/avatar.png'),
      invited: true,
    },
    {
      id: 3,
      userName: 'Robert Dupont',
      avatar: require('assets/images/avatar.png'),
      invited: true,
    },
    {
      id: 4,
      userName: 'Julien Girard',
      avatar: require('assets/images/avatar.png'),
      invited: true,
    },
  ]);
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem
      text={item.userName}
      subText={item.relationship}
      icon={item.avatar}
      style={styles.listItem}
      inviteBtn
      invited={item.invited}
    />
  );

  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <View>
        <CommonText text="Fermer" style={styles.header} onPress={() => props.onPress()} />
        <View style={styles.body}>
          <TitleText text="Inviter" style={styles.title} />
          <SearchBox style={styles.searchbox} />
          <FlatList data={searchedUsers} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
        </View>
      </View>
    </Modal>
  );
};
const styles = {
  container: {
    backgroundColor: 'white',
    marginTop: 38 * em,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    borderTopRightRadius: 10 * em,
    borderTopLeftRadius: 10 * em,
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: { marginRight: 30 * em, marginBottom: 18 * em, marginTop: 25 * em, alignSelf: 'flex-end' },
  body: { marginLeft: 30 * em, marginRight: 30 * em },
  title: { marginBottom: 17 * em, alignSelf: 'flex-start', fontWeight: 'bold' },
  searchbox: { marginBottom: 29 * em, paddingTop: 18 * em },
  listItem: { marginBottom: 35 * em },
};
export default FriendInvitePopupScreen;
