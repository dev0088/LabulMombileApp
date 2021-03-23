import React, { useState } from 'react';
import { View, Image, FlatList } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm } from 'view/common/const';
import SearchBox from 'view/components/SearchBox';
import CommentText from 'view/components/text/CommentText';
import SearchCommonListItem from 'view/components/adapter/SearchCommonListItem';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import MabulNextButton from 'view/components/button/MabulNextButton';
import { Actions } from 'react-native-router-flux';
import { LocationRed } from 'assets/svg/icons';

const AlertAddressScreen = (props) => {
  const conceptColor = '#F9547B';

  const [searchedUsers, getSearchResult] = useState('');
  const [locationViewVisible, setlocationViewVisible] = useState('flex');
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem text={item.userName} subText={item.address} icon={item.ic_location} style={styles.listItem} />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'Où ?'} style={styles.title} />

        <SearchBox
          style={styles.searchBox}
          comment="Rechercher par ville"
          onChangeText={() => {
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
          <LocationRed width={16 * em} height={19 * em} />
          <CommentText text={'Utiliser ma position'} color="#F9547B" style={{ marginLeft: 10 * em }} />
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
          onPress={() => Actions.alertAddNote({ process: 60 })}
        />
      </View>
    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'flex-start', backgroundColor: '#ffffff' },
  header: { height: '10.3%' },
  body: { flex: 1, width: '100%', paddingHorizontal: 30 * em, justifyContent: 'space-between' },
  commonHeader: { marginTop: 27 * em },
  title: { textAlign: 'left', marginTop: 35 * em, lineHeight: 38 * em },
  searchBox: { marginTop: 35 * em },
  location: { alignSelf: 'center', marginTop: 15 * em, alignItems: 'center', flexDirection: 'row' },
  listItem: { height: 38 * hm, marginTop: 35 * hm },
  btn: { width: 163 * em, alignSelf: 'flex-end', marginBottom: 30 * em, backgroundColor: '#38C2FF' },
};

export default AlertAddressScreen;
