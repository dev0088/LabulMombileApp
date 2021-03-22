import React, { useState } from 'react';
import { View, Image } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, mabulColors } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
import CommonButton from 'view/components/CommonButton';
import { Actions } from 'react-native-router-flux';
import CheckBox from 'view/components/CheckBox';
import MabulNextButton from 'view/components/MabulNextButton';
import { FlatList } from 'react-native-gesture-handler';

const options = [
  { id: 0, title: 'J’ai besoin de' },
  { id: 1, title: 'Route barrée' },
  { id: 2, title: 'Travaux' },
];
const AlertClassOptionScreen = (props) => {
  const conceptColor = '#F9547B';
  const [optionCheck, setOptionCheck] = useState();
  const renderOptions = ({ item, index }) => {
    const checked = item.id === optionCheck;
    var elevation = !checked ? 0 : 2;

    return (
      <View style={[styles.optionBox, { elevation: elevation }]}>
        <TitleText style={styles.optionCaption} text={item.title} />
        <CheckBox shape="oval" isChecked={checked} singleSelection={true} onClick={() => setOptionCheck(item.id)} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'J’alerte'} style={styles.title} />
          <View style={styles.circleSortView}>
            <Image style={styles.icon} />
            <CommonText text="Mes voisins" />
          </View>
          <FlatList data={options} renderItem={renderOptions} keyExtractor={(i) => i.id} />
        </View>
        <MabulNextButton
          color={conceptColor}
          style={[styles.btn, { backgroundColor: conceptColor }]}
          text="Suivant"
          onPress={() => Actions.alertAddress()}
        />
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
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
  },
  circleSortView: { flexDirection: 'row', alignItems: 'center', marginTop: 10 * em, marginBottom: 19 * em },
  icon: {
    width: 38 * em,
    height: 38 * em,
    backgroundColor: 'blue',
    marginRight: 10 * em,
  },
  btn: {
    width: 163 * em,
    alignSelf: 'flex-end',
    marginBottom: 30 * em,
    backgroundColor: '#38C2FF',
  },
  optionBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 78 * em,
    alignItems: 'center',
    marginTop: 10 * em,
    borderRadius: 20 * em,
    paddingHorizontal: 15 * em,
  },
  optionCaption: {
    fontSize: 18 * em,
    lineHeight: 23 * em,
    color: '#1E2D60',
  },
};

export default AlertClassOptionScreen;
