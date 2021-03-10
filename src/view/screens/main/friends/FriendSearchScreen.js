import React, { useState } from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT } from 'view/common/const';
import CommonHeader from '../../../components/CommonHeader';
import SearchBox from '../../../components/SearchBox';
import { FlatList } from 'react-native-gesture-handler';
import SearchCommonListItem from '../../../components/SearchCommonListItem';

const FriendsSearchScreen = () => {
  const [searchedUsers, getSearchResult] = useState(true);
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem text={item.userName} subText={item.relationship} icon={item.avatar} style={styles.listItem} />
  );

  return (
    <View style={styles.container}>
      <CommonHeader isLightTheme={true} />
      <TitleText text="Rechercher" style={styles.title} />
      <SearchBox
        style={styles.searchbox}
        onChangeText={(text) => {
          getSearchResult([
            {
              id: 0,
              userName: 'Amandine Bernard',
              relationship: 'Mon ami/ mon voisin',
              avatar: require('assets/images/avatar.png'),
            },
            {
              id: 1,
              userName: 'Amélie Petit',
              relationship: 'Mon voisin',
              avatar: require('assets/images/avatar.png'),
            },
            {
              id: 2,
              userName: 'Antoine Durand',
              relationship: 'Mon voisin',
              avatar: require('assets/images/avatar.png'),
            },
            {
              id: 3,
              userName: 'Robert Dupont',
              avatar: require('assets/images/avatar.png'),
            },
            {
              id: 4,
              userName: 'Julien Girard',
              avatar: require('assets/images/avatar.png'),
            },
          ]);
        }}
      />
      <FlatList data={searchedUsers} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  title: {
    marginLeft: 30 * em,
    marginBottom: (35 / 667) * HEIGHT,
  },
  searchbox: {
    width: 315 * em,
    marginLeft: 30 * em,
    marginRight: 30 * em,
  },
  listItem: {
    height: HEIGHT * 0.063,
    marginTop: 35 * em,
    marginLeft: 30 * em,
  },
};

export default FriendsSearchScreen;
