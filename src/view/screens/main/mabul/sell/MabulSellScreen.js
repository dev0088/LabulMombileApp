import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/MabulCommonListItem';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
const sellItems = [
  { id: 0, itemName: 'Service' },
  { id: 1, itemName: 'Object' },
  { id: 2, itemName: 'Évènement' },
];
const MabulSellScreen = () => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      icon={item.icon}
      noIcons={true}
      percent={0}
      onPress={() => {
        Actions.mabulSellService();
      }}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={26} isNoBackBtn={true} progressBarColor={'#AA87E5'} />
      <View style={styles.body}>
        <TitleText text={'Je vends'} style={styles.title} />
        <FlatList data={sellItems} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
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

export default MabulSellScreen;
