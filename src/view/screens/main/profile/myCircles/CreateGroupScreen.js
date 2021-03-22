import React from 'react';
import { View, Image, ScrollView, ImageBackground, FlatList } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, hexToRGB } from 'view/common/const';
import ProfileCommonListItem from 'view/components/ProfileCommonListItem';
import AccountCommonHeader from 'view/components/AccountCommonHeader';
import { Actions } from 'react-native-router-flux';
import CommonText from 'view/components/CommonText';
import SearchBox from '../../../../components/SearchBox';
import CommentText from '../../../../components/CommentText';
import CommonListItem from '../../../../components/CommonListItem';
import CheckBox from '../../../../components/CheckBox';

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
const selectedList = [
  {
    sort: 'friends',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('assets/images/avatar.png'),
  },
];
const SelectedAvatarView = ({ avatar, userName }) => (
  <View style={{ width: 54 * em, flexGrow: 1, backgroundColor: 'red', alignSelf: 'baseline' }}>
    <ImageBackground
      source={avatar}
      style={{
        marginBottom: 5 * em,
        width: 54 * em,
        height: 54 * em,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
      }}>
      <Image
        source={require('assets/images/ic_close.png')}
        style={{ borderWidth: 2 * em, width: 16 * em, height: 16 * em, borderRadius: 8 * em, borderColor: '#ffffff' }}
      />
    </ImageBackground>
    <CommentText text={userName} style={styles.selectedFullName} />
  </View>
);

const CreateGroupScreen = () => {
  const renderSelectedList = ({ item }) => <SelectedAvatarView avatar={item.avatar} userName={item.userName} />;
  const renderCircleList = ({ item }) => (
    <CommonListItem
      icon={<Image source={item.avatar} style={{ width: 40 * em, height: 40 * em, marginRight: 15 * em }} />}
      title={item.userName}
      titleStyle={{ color: '#1E2D60' }}
      rightView={<CheckBox shape="oval" bgColor="#EF88B9" />}
    />
  );
  return (
    <View style={styles.container}>
      <CommonText style={styles.header} text="Annuler" color="#6A8596" onPress={() => Actions.pop()} />
      <TitleText text="Nouveau groupe" style={styles.title} />
      <SearchBox comment="Rechercher un contact" />
      <FlatList
        style={{ marginTop: 15 * em }}
        horizontal={true}
        data={selectedList}
        renderItem={renderSelectedList}
        keyExtractor={(i) => i.id}
      />
      <View>
        <FlatList data={usersData} renderItem={renderCircleList} keyExtractor={(i) => i.id} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

    paddingHorizontal: 30 * em,
  },
  title: { textAlign: 'left', marginTop: 23 * em, marginBottom: 17 * em },
  header: { backgroundColor: 'red', marginTop: 39 * em, alignSelf: 'flex-end' },
  selectedFullName: { fontSize: 12 * em, lineHeight: 15 * em, color: '#1E2D60', marginBottom: 0 },
};

export default CreateGroupScreen;
