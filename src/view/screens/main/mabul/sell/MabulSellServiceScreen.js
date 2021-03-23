import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/adapter/MabulCommonListItem';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import {
  AnimalSell,
  BeautyCareSell,
  GardeningSell,
  HouseWorkSell,
  IroningSell,
  SchoolSupportSell,
  SupportChildrenSell,
  ChildCareSell,
  TransportSell,
  ComputerSell,
  AdministrativeSell,
} from 'assets/svg/icons';
const iconSize = { width: 38 * em, height: 38 * em };
const giveItems = [
  { id: 0, itemName: 'Garde d’enfants/ Baby Sitting', icon: ChildCareSell(iconSize) },
  { id: 1, itemName: 'Soutien scolaire/ cours', icon: SchoolSupportSell(iconSize) },
  { id: 2, itemName: 'Accompagnement des enfants', icon: SupportChildrenSell(iconSize) },
  { id: 3, itemName: 'Animaux de compagnie', icon: AnimalSell(iconSize) },
  { id: 4, itemName: 'Informatique/ Internet', icon: ComputerSell(iconSize) },
  { id: 5, itemName: 'Administrative', icon: AdministrativeSell(iconSize) },
  { id: 6, itemName: 'Entretien de la maison/ travaux ménagers', icon: HouseWorkSell(iconSize) },
  { id: 7, itemName: 'Jardinage/ élagage', icon: GardeningSell(iconSize) },
  { id: 8, itemName: 'Repassage', icon: IroningSell(iconSize) },
  { id: 9, itemName: 'Transport/ Co-voiturage', icon: TransportSell(iconSize) },
  { id: 20, itemName: 'Soins d’esthétique à domicile', icon: BeautyCareSell(iconSize) },
];
const MabulSellServiceScreen = (props) => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem
      text={item.itemName}
      style={styles.listItem}
      icon={item.icon}
      onPress={() => Actions.mabulCommonRequestDetail({ mabulService: 'sell' })}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={props.process} isNoBackBtn={true} progressBarColor={'#AA87E5'} />
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
    marginTop: 16 * em,
  },
  header: {
    height: '10.3%',
  },
  popView: {
    paddingLeft: WIDTH * 0.08,
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    backgroundColor: '#ffffff',
    flex: 1,
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
