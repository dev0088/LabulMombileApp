import React from 'react';
import { View, Image, ImageBackground, FlatList } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em } from 'view/common/const';
import { Actions } from 'react-native-router-flux';
import CommonText from 'view/components/text/CommonText';
import SearchBox from 'view/components/other/SearchBox';
import CommentText from 'view/components/text/CommentText';
import CommonListItem from 'view/components/adapter/CommonListItem';
import CheckBox from 'view/components/checkbox/CheckBox';
import CommonButton from 'view/components/button/CommonButton';
import { Cancel } from 'assets/svg/icons';
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
  {
    sort: 'friends',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('assets/images/avatar.png'),
  },
  {
    sort: 'friends',
    userName: 'Amandine Bernard',
    relationship: 'Mon ami/ ma famille',
    avatar: require('assets/images/avatar.png'),
  },
];
const SelectedAvatarView = ({ avatar, userName }) => (
  <View style={{ width: 60 * em, flexGrow: 1, alignSelf: 'baseline', marginRight: 10 * em }}>
    <ImageBackground
      source={avatar}
      style={{
        marginBottom: 5 * em,
        width: 54 * em,
        height: 54 * em,
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
      }}>
      <View
        style={{
          borderWidth: 2 * em,
          width: 20 * em,
          height: 20 * em,
          borderRadius: 10 * em,
          backgroundColor: '#ffffff',
          borderColor: '#ffffff',
        }}>
        <Cancel width={16 * em} height={16 * em} />
      </View>
    </ImageBackground>
    <CommentText text={userName} style={styles.selectedFullName} />
  </View>
);

const CreateGroupScreen = (props) => {
  const renderSelectedList = ({ item }) => <SelectedAvatarView avatar={item.avatar} userName={item.userName} />;
  const renderCircleList = ({ item }) => (
    <CommonListItem
      icon={<Image source={item.avatar} style={{ width: 40 * em, height: 40 * em, marginRight: 15 * em }} />}
      title={item.userName}
      titleStyle={{ color: '#1E2D60',fontFamily:'Lato-Black' }}
      rightView={<CheckBox oval red bgColor="#EF88B9" />}
      style={styles.listItem}
    />
  );
  return (
    <View style={styles.container}>
      <CommonText style={styles.header} text="Annuler" color="#6A8596" onPress={() => Actions.pop()} />
      <TitleText text="Nouveau groupe" style={styles.title} />
      <SearchBox comment="Rechercher un contact" />
      <View style={{ height: 90 * em, marginTop: 15 * em, marginBottom: 25 * em }}>
        <FlatList horizontal={true} data={selectedList} renderItem={renderSelectedList} keyExtractor={(i) => i.id} />
      </View>
      <FlatList data={usersData} renderItem={renderCircleList} keyExtractor={(i) => i.id} />
      <CommonButton
        text="Continuer"
        style={{ backgroundColor: props.themeColor, marginBottom: 30 * em }}
        onPress={() => Actions.nameGroup({ themeColor: props.themeColor,sort:props.sort })}
      />
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#ffffff', paddingHorizontal: 30 * em },
  title: { textAlign: 'left', marginTop: 23 * em, marginBottom: 17 * em },
  header: { marginTop: 39 * em, alignSelf: 'flex-end' },
  selectedFullName: { fontSize: 12 * em, height: 30 * em, color: '#1E2D60', marginBottom: 0, fontFamily: 'Lato-Bold' },
  listItem: { marginBottom: 35 * em },
};

export default CreateGroupScreen;
