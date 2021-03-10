import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import { FlatList } from 'react-native';
import MabulCommonListItem from 'view/components/MabulCommonListItem';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
const themeData = [
  { id: 0, icon: require('assets/images/btn_mabul_organize.png'), themeName: 'Fête' },
  { id: 1, icon: require('assets/images/btn_mabul_organize.png'), themeName: 'Apéro' },
  { id: 2, icon: require('assets/images/btn_mabul_organize.png'), themeName: 'Spectacle' },
  { id: 3, icon: require('assets/images/btn_mabul_organize.png'), themeName: 'Rencontre' },
  { id: 4, icon: require('assets/images/btn_mabul_organize.png'), themeName: 'Repas' },
  { id: 5, icon: require('assets/images/btn_mabul_organize.png'), themeName: 'Atelier' },
];
const MabulOrganizeScreen = () => {
  const renderFlatList = ({ item }) => (
    <MabulCommonListItem text={item.themeName} style={styles.listItem} icon={item.icon} onPress={()=>{
      
    }}/>
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} isNoBackBtn={true} progressBarColor={'#FDC641'} />
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
