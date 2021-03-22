import React, { useState } from 'react';
import { View, Image, FlatList, Text } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, hm } from 'view/common/const';
import CommonHeader from 'view/components/CommonHeader';
import SearchBox from 'view/components/SearchBox';
import CommentText from 'view/components/CommentText';
import SearchCommonListItem from 'view/components/SearchCommonListItem';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
import MabulNextButton from 'view/components/MabulNextButton';
import { Actions } from 'react-native-router-flux';

const AlertAddressScreen = () => {
  const conceptColor = '#F9547B';

  const [searchedUsers, getSearchResult] = useState('');
  const [locationViewVisible, setlocationViewVisible] = useState('flex');
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem text={item.userName} subText={item.address} icon={item.ic_location} style={styles.listItem} />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'Où ?'} style={styles.title} />

        <SearchBox
          style={styles.searchBox}
          comment="Rechercher par ville"
          onChangeText={(text) => {
            getSearchResult([
              {
                id: 0,
                userName: 'Le Gosier',
                ic_location: require('assets/images/ic_location.png'),
              },
              {
                id: 1,
                userName: 'Gosier Guadeloupe',
                ic_location: require('assets/images/ic_location.png'),
              },
              {
                id: 2,
                userName: 'Beaumanoir, Le Gosier',
                address: 'Route de Beaumanoir, Le Gosier',
                ic_location: require('assets/images/ic_location.png'),
              },
            ]);
            setlocationViewVisible('none');
          }}
        />
        <View style={[styles.location, { display: locationViewVisible }]}>
          <Image style={styles.locationIcon} source={require('assets/images/ic_map_annotation.png')} />
          <CommentText text={'Utiliser ma position'} color="#F9547B" />
        </View>

        <FlatList
          data={searchedUsers}
          renderItem={renderFlatList}
          keyExtractor={(i) => i.id}
          style={{ marginTop: 25 * em }}
        />
        <MabulNextButton
          color={conceptColor}
          style={[styles.btn, { backgroundColor: conceptColor }]}
          text="Suivant"
          onPress={() => Actions.alertAddNote()}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  header: {
    height: '10.3%',
  },
  body: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  commonHeader: { marginTop: 27 * em },
  title: {
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
  },
  searchBox: { marginTop: 35 * em },
  location: {
    alignSelf: 'center',
    marginTop: 15 * em,
    alignItems: 'center',
    flexDirection: 'row',
  },
  locationIcon: {
    width: 16 * em,
    height: 19 * em,
    resizeMode: 'contain',
    marginBottom: 5 * em,
    marginRight: 10 * em,
  },
  listItem: {
    height: 38 * hm,
    marginTop: 35 * hm,
  },
  btn: {
    width: 163 * em,
    alignSelf: 'flex-end',
    marginBottom: 30 * em,
    backgroundColor: '#38C2FF',
  },
};

export default AlertAddressScreen;
