import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/MabulCommonListItem';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
const needItems = [
  { id: 0, itemName: 'Garde d’enfants/ Baby Sitting', icon: require('assets/images/btn_mabul_give.png') },
  { id: 1, itemName: 'Soutien scolaire/ cours', icon: require('assets/images/btn_mabul_give.png') },
  { id: 2, itemName: 'Accompagnement des enfants', icon: require('assets/images/btn_mabul_give.png') },
  {
    id: 3,
    itemName: 'Aide aux personnes âgées',
    subName: '(promenades, transports, actes de la vie courante)',
    icon: require('assets/images/btn_mabul_give.png'),
  },
  {
    id: 4,
    itemName: 'Animaux de compagnie',
    subName: 'Soins et promenades',
    icon: require('assets/images/btn_mabul_give.png'),
  },
  { id: 5, itemName: 'Informatique/ Internet', icon: require('assets/images/btn_mabul_give.png') },
  { id: 6, itemName: 'Administrative', icon: require('assets/images/btn_mabul_give.png') },
];

const MabulFamilyNeedScreen = () => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem text={item.itemName} style={styles.listItem} subText={item.subName} icon={item.icon} />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} isNoBackBtn={false} progressBarColor={'#38C2FF'} />
      <View style={styles.body}>
        <TitleText text={'J’ai besoin coup de main pour'} style={styles.title} />
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
    height: HEIGHT * 0.09,
    width: WIDTH * 0.92,
    marginTop: 25 * em,
  },
};

export default MabulFamilyNeedScreen;
