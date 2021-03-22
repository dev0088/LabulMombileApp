import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/MabulCommonListItem';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
const giveItems = [
  { id: 0, itemName: 'Objet divers', icon: require('assets/images/btn_mabul_give.png') },
  { id: 1, itemName: 'Meuble', icon: require('assets/images/btn_mabul_give.png') },
  { id: 2, itemName: 'High Tech', icon: require('assets/images/btn_mabul_give.png') },
  { id: 3, itemName: 'Education', icon: require('assets/images/btn_mabul_give.png') },
  { id: 4, itemName: 'Vêtements', icon: require('assets/images/btn_mabul_give.png') },
  { id: 5, itemName: 'Repas', icon: require('assets/images/btn_mabul_give.png') },
  { id: 6, itemName: 'Aliments', icon: require('assets/images/btn_mabul_give.png') },
];
const MabulGiveScreen = () => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      icon={item.icon}
      onPress={() => Actions.mabulCommonRequestDetail({ mabulService: 'give' })}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} noBackButton progressBarColor={'#34D9B8'} />
      <View style={styles.body}>
        <TitleText text={'Je donne'} style={styles.title} />
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
  title: {
    paddingLeft: WIDTH * 0.08,
    marginTop: 35 * em,
    marginBottom: HEIGHT * 0.1,
  },
  listItem: {
    height: HEIGHT * 0.09,
    width: WIDTH * 0.92,
    marginTop: 25 * em,
  },
};

export default MabulGiveScreen;
