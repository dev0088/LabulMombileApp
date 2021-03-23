import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/adapter/MabulCommonListItem';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { Apero, Meet, Meal, Show, Party, WorkshpIcon } from 'assets/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };

const themeData = [
  { id: 0, icon: Party(iconSize), themeName: 'Fête' },
  { id: 1, icon: Apero(iconSize), themeName: 'Apéro' },
  { id: 2, icon: Show(iconSize), themeName: 'Spectacle' },
  { id: 3, icon: Meet(iconSize), themeName: 'Rencontre' },
  { id: 4, icon: Meal(iconSize), themeName: 'Repas' },
  { id: 5, icon: WorkshpIcon(iconSize), themeName: 'Atelier' },
];
const MabulSellEnvironmentScreen = (props) => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.themeName}
      style={styles.listItem}
      icon={item.icon}
      onPress={() => Actions.mabulCommonRequestDetail({ mabulService: 'sell' })}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} isNoBackBtn={true} progressBarColor={'#AA87E5'} />
      <View style={styles.body}>
        <TitleText text={'Je vends Évènement'} style={styles.title2} />
        <View style={styles.popView}>
          <FlatList data={themeData} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
        </View>
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
  popView: {
    paddingLeft: WIDTH * 0.08,
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    backgroundColor: '#ffffff',
    paddingBottom: 163 * em,
  },
  body: {
    flex: 1,

    alignItems: 'flex-start',
    backgroundColor: '#F0F5F7',
  },
  title1: {
    paddingLeft: WIDTH * 0.08,
    marginTop: 35 * em,
    fontWeight: 'bold',
  },
  title2: {
    paddingLeft: WIDTH * 0.08,
    marginBottom: 35 * em,
    fontWeight: 'bold',
  },
  listItem: {
    height: HEIGHT * 0.09,
    width: WIDTH * 0.92,
    marginTop: 25 * em,
  },
};

export default MabulSellEnvironmentScreen;
