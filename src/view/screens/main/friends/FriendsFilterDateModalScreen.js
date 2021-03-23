import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, WIDTH, hm } from 'view/common/const';
import CommonBackButton from 'view/components/button/CommonBackButton';
import { FlatList } from 'react-native-gesture-handler';
import CommonButton from 'view/components/button/CommonButton';
import CommonCheckBox from 'view/components/CommonCheckBox';

import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';

const options = [
  { key: 0, option: 'Aujourd’hui' },
  { key: 1, option: 'Demain' },
  { key: 2, option: 'Cette semaine' },
  { key: 3, option: 'Semaine prochaine' },
];
const FriendsFilterDateModalScreen = (props) => {
  const renderFlatList = ({ item }) => <CommonCheckBox text={item.option} style={styles.listItem} oval />;
  console.log(props);
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}>
      <View style={styles.line} />

      <View style={styles.header}>
        <View style={{ flexDirection: 'row' }}>
          <CommonBackButton dark={true} onPress={props.onPress} />
          <TitleText text="Date" style={styles.title} />
        </View>
      </View>
      <FlatList data={options} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
      <CommonButton
        text="Voir demandes"
        onPress={() => {
          props.onPress();
          Actions.main({ tabNav: 'Friends' });
        }}
      />
    </Modal>
  );
};

const styles = {
  container: {
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    paddingBottom: 30 * hm,
    marginTop: 210 * hm,
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  line: {
    width: 55 * em,
    height: 5 * hm,
    marginTop: 15 * hm,
    borderRadius: 3 * em,
    backgroundColor: '#BFCDDB',
    opacity: 0.36,
  },
  header: {
    width: WIDTH,
    marginTop: 15 * hm,
    paddingLeft: 15 * em,
    paddingRight: 15 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18 * em,
    lineHeight: 23 * hm,
    textAlign: 'left',
    fontWeight: 'bold',
    textAlignVertical: 'center',
    alignSelf: 'center',
    marginLeft: 15 * em,
  },
  resetBtn: {
    marginRight: 15 * em,
    lineHeight: 16 * hm,
    textAlign: 'right',
  },
  listItem: {
    marginTop: 35 * hm,
    width: 295 * em,
    height: 26 * hm,
  },
};

export default FriendsFilterDateModalScreen;
