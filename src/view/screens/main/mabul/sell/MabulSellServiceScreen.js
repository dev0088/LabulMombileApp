import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/MabulCommonListItem';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
const giveItems = [
  { id: 0, itemName: 'Fête', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 1, itemName: 'Apéro', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 2, itemName: 'Spectacle', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 3, itemName: 'Rencontre', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 4, itemName: 'Repas', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 5, itemName: 'Atelier', icon: require('assets/images/btn_mabul_sell.png') },
];
const MabulSellServiceScreen = () => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem text={item.itemName} style={styles.listItem} icon={item.icon} />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={48} isNoBackBtn={true} progressBarColor={'#AA87E5'} />
      <View style={styles.body}>
        <TitleText text={'Je vends Service'} style={styles.title1} />
        <View style={styles.popView}>
          <FlatList data={giveItems} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
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

export default MabulSellServiceScreen;
