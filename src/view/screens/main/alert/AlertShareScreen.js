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
import CommonButton from 'view/components/CommonButton';

const usersList = [
  { id: 0.1, userName: 'Tous' },
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
];
const AlertShareScreen = () => {
  const conceptColor = '#F9547B';
  const [locationViewVisible, setlocationViewVisible] = useState('flex');
  const renderFlatList = ({ item }) => (
    <SearchCommonListItem text={item.userName} icon={item.avatar} style={styles.listItem} option color={conceptColor} />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <TitleText text={'Partager avec'} style={styles.title} />

        <SearchBox style={styles.searchBox} comment="Rechercher par ville" />
        
        <FlatList
          data={usersList}
          renderItem={renderFlatList}
          keyExtractor={(i) => i.id}
          style={{ marginTop: 25 * em }}
        />
        
        <CommonButton
          style={[styles.btn, { backgroundColor: conceptColor }]}
          text="J’alerte"
          onPress={() => Actions.myAlert()}
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
    width: 315 * em,
    alignSelf: 'center',
    marginBottom: 30 * em,
  },
};

export default AlertShareScreen;
