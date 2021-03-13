import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/MabulCommonListItem';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
const giveItems = [
  { id: 0, itemName: 'Garde d’enfants/ Baby Sitting', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 1, itemName: 'Soutien scolaire/ cours', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 2, itemName: 'Accompagnement des enfants', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 3, itemName: 'Animaux de compagnie', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 4, itemName: 'Informatique/ Internet', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 5, itemName: 'Administrative', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 6, itemName: 'Entretien de la maison/ travaux ménagers', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 7, itemName: 'Jardinage/ élagage', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 8, itemName: 'Repassage', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 9, itemName: 'Transport/ Co-voiturage', icon: require('assets/images/btn_mabul_sell.png') },
  { id: 20, itemName: 'Soins d’esthétique à domicile', icon: require('assets/images/btn_mabul_sell.png') },
];
const MabulSellObjectScreen = () => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem text={item.itemName} style={styles.listItem} icon={item.icon} />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={48} isNoBackBtn={true} progressBarColor={'#AA87E5'} />
      <View style={styles.body}>
        <TitleText text={'Je vends Objet'} style={styles.title2} />
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

export default MabulSellObjectScreen;
