import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/MabulCommonListItem';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
const needItems = [
  { id: 0, itemName: 'Coup de main' },
  { id: 1, itemName: 'Service' },
  { id: 2, itemName: 'Outil' },
];
const MabulNeedScreen = () => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem text={item.itemName} style={styles.listItem} icon={item.icon} noIcons={true} percent={0} />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={26} isNoBackBtn={true} progressBarColor={'#38C2FF'} />
      <View style={styles.body}>
        <TitleText text={'J’ai besoin'} style={styles.title} />
        <FlatList data={needItems} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
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

export default MabulNeedScreen;
