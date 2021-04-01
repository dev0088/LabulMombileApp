import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm } from 'view/common/const';
import CommonHeader from 'view/components/header/CommonHeader';
import SearchBox from 'view/components/other/SearchBox';
import CommentText from 'view/components/text/CommentText';
import SearchCommonListItem from 'view/components/adapter/SearchCommonListItem';
import { LocationBlue } from 'assets/svg/icons';
import FriendCommonHeader from '../../../components/header/FriendCommonHeader';
const InputLocationScreen = () => {
  const [searchedUsers, getSearchResult] = useState('');
  const [locationViewVisible, setlocationViewVisible] = useState('flex');
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem
      location
      text={item.userName}
      subText={item.address}
      icon={item.ic_location}
      style={styles.listItem}
    />
  );
  return (
    <View style={styles.container}>
      <FriendCommonHeader upperTitle="Filtrer" title="Lieu" />
      <SearchBox
        style={styles.searchBox}
        comment="Rechercher par ville"
        onChangeText={(text) => {
          if (text) {
            getSearchResult([
              { id: 0, userName: 'Le Gosier' },
              { id: 1, userName: 'Gosier Guadeloupe' },
              { id: 2, userName: 'Beaumanoir, Le Gosier', address: 'Route de Beaumanoir, Le Gosier' },
            ]);
            setlocationViewVisible('none');
          } else {
            getSearchResult([]);
            setlocationViewVisible('flex');
          }
        }}
      />
      <View style={[styles.location, { display: locationViewVisible }]}>
        {/* <LocationBlue width={16 * hm} height={19 * hm} /> */}
        <CommentText text={'Utiliser ma position'} color="#40CDDE" style={{ marginTop: 5 * em }} />
      </View>

      <FlatList
        data={searchedUsers}
        renderItem={renderFlatList}
        keyExtractor={(i) => i.id}
        style={{ marginTop: 25 * hm }}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  header: { height: 131 * hm },
  commonHeader: { marginTop: 27 * hm },
  title: {
    fontSize: 34 * hm,
    lineHeight: 38 * hm,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 30 * em,
    height: 40 * hm,
    marginTop: 10 * hm,
  },
  searchBox: { marginTop: 25 * hm, width: 315 * em, marginLeft: 30 * em, height: 52 * hm },
  location: {
    alignSelf: 'center',
    marginTop: 15 * hm,
    alignItems: 'center',
  },
  listItem: {
    height: 38 * hm,
    marginTop: 35 * hm,
    marginLeft: 30 * em,
    marginRight: 30 * em,
    width: 315 * em,
  },
};

export default InputLocationScreen;
