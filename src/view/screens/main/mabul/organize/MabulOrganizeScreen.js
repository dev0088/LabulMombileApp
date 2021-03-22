import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/MabulCommonListItem';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import {Apero, Meet,Meal,Show,Party,WorkshpIcon} from 'assets/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };

const themeData = [
  { id: 0, icon: Party(iconSize), themeName: 'Fête' },
  { id: 1, icon: Apero(iconSize), themeName: 'Apéro' },
  { id: 2, icon: Show(iconSize), themeName: 'Spectacle' },
  { id: 3, icon: Meet(iconSize), themeName: 'Rencontre' },
  { id: 4, icon: Meal(iconSize), themeName: 'Repas' },
  { id: 5, icon: WorkshpIcon(iconSize), themeName: 'Atelier' },
];
const MabulOrganizeScreen = () => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.themeName}
      style={styles.listItem}
      icon={item.icon}
      onPress={() => {
        Actions.mabulCommonRequestDetail({ mabulService: 'organize' });
      }}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} noBackButton progressBarColor={'#FDC641'} />
      <View style={styles.body}>
        <TitleText text={'J’organise'} style={styles.title} />
        <FlatList data={themeData} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '10.3%',
  },
  body: {
    flex: 1,
    paddingLeft: WIDTH * 0.08,
    alignItems: 'flex-start',
  },
  title: {
    marginTop: 35 * em,
    marginBottom: 18 * em,
  },
  listItem: {
    height: HEIGHT * 0.09,
    width: WIDTH * 0.92,
    marginTop: 25 * em,
  },
};

export default MabulOrganizeScreen;
