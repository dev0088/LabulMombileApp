import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/MabulCommonListItem';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import { NeedDaily, NeedFamily } from 'assets/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };
const needItems = [
  {
    id: 0,
    itemName: 'Besoin de la famille',
    subName: 'Enfants/ Soutien scolaire/Aide aux personnes âgées/ Animaux de compagnie/ Informatique…',
    icon: NeedFamily(iconSize),
    onPress: () => {
      Actions.mabulFamilyNeed();
    },
  },
  {
    id: 1,
    itemName: 'Besoin de vie quotidienne',
    subName: 'Maison/ Livraison/ Repas/ Repassage/ Achats de Courses/ Transport/ Co-voiturage/ Soins…',
    icon: NeedDaily(iconSize),
    onPress: () => {
      Actions.mabulDailyNeed();
    },
  },
];
const MabulHelpNeedScreen = () => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      subText={item.subName}
      icon={item.icon}
      onPress={() => item.onPress()}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={11} isNoBackBtn={false} progressBarColor={'#38C2FF'} />
      <View style={styles.body}>
        <TitleText text={'J’ai besoin Coup de main'} style={styles.title} />
        <View style={styles.popView}>
          <FlatList data={needItems} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
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
  title: {
    marginLeft: 30 * em,
    marginTop: 35 * em,
    marginBottom: 35 * em,
    lineHeight: 35 * em,
    width: 186 * em,
    height: 71 * em,
    fontWeight: 'bold',
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  listItem: {
    width: WIDTH * 0.92,
    marginTop: 25 * em,
  },
};

export default MabulHelpNeedScreen;
