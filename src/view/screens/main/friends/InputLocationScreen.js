import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm } from 'view/common/const';
import CommonHeader from 'view/components/header/CommonHeader';
import SearchBox from 'view/components/other/SearchBox';
import CommentText from 'view/components/text/CommentText';
import SearchCommonListItem from 'view/components/adapter/SearchCommonListItem';
import { LocationBlue } from 'assets/svg/icons';
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
      <View style={styles.header}>
        <CommonHeader dark={true} centerTxt="Filtrer" logo={true} style={styles.commonHeader} />
        <TitleText text={'Lieu'} style={styles.title} />
      </View>
      <SearchBox
        style={styles.searchBox}
        comment="Rechercher par ville"
        onChangeText={() => {
          getSearchResult([
            { id: 0, userName: 'Le Gosier' },
            { id: 1, userName: 'Gosier Guadeloupe' },
            { id: 2, userName: 'Beaumanoir, Le Gosier', address: 'Route de Beaumanoir, Le Gosier' },
          ]);
          setlocationViewVisible('none');
        }}
      />
      <View style={[styles.location, { display: locationViewVisible }]}>
        <LocationBlue width={16 * em} height={19 * em} />
        <CommentText text={'Utiliser ma position'} color="#40CDDE" style={{ marginTop: 5 * em }} />
      </View>

      <FlatList
        data={searchedUsers}
        renderItem={renderFlatList}
        keyExtractor={(i) => i.id}
        style={{ marginTop: 25 * em }}
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
  header: { height: 131 * em },
  commonHeader: { marginTop: 27 * em },
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    textAlign: 'left',
    fontWeight: 'bold',
    marginLeft: 30 * em,
    height: 40 * em,
    marginTop: 10 * em,
  },
  searchBox: { marginTop: 25 * em, width: 315 * em, marginLeft: 30 * em, height: 44 * em },
  location: {
    alignSelf: 'center',
    marginTop: 15 * em,
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
