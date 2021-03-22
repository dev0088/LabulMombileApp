import React from 'react';
import { View, Image } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, mabulColors } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
import CommonButton from '../../../components/CommonButton';
import { Family, Friend, Neighbor, All } from 'assets/svg/icons';
import { Actions } from 'react-native-router-flux';
const MabulCommonShareScreen = (props) => {
  const conceptColor = mabulColors[props.mabulService];

  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'Je partage avec'} style={styles.title} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.iconView}>
              <Family width={48 * em} height={48 * em} />
              <CommonText text="mes voisins" color="#6A8596" style={{ marginTop: 15 * em }} />
            </View>
            <View style={styles.iconView}>
              <Friend width={48 * em} height={48 * em} />
              <CommonText text="mes voisins" color="#6A8596" style={{ marginTop: 15 * em }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.iconView}>
              <Neighbor width={48 * em} height={48 * em} />
              <CommonText text="mes voisins" color="#6A8596" style={{ marginTop: 15 * em }} />
            </View>
            <View style={styles.iconView}>
              <All width={48 * em} height={48 * em} />
              <CommonText text="mes voisins" color="#6A8596" style={{ marginTop: 15 * em }} />
            </View>
          </View>
        </View>
        <CommonButton style={[styles.btn, { backgroundColor: conceptColor }]} text="Publier" onPress={()=>Actions.myNeed()}/>
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
  comment: { textAlign: 'left', lineHeight: 20 * em, height: 16 * em, textAlignVertical: 'center', marginTop: 10 * em },
  photoZone: {
    width: 315 * em,
    height: 121 * em,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 2 * em,
    borderColor: '#BFCDDB',
    borderRadius: 20 * em,
    marginTop: 35 * em,
  },
  commentPhoto: {
    fontSize: 12 * em,
    lineHeight: 14 * em,
    color: '#6A8596',
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 150 * em,
    height: 176 * em,
  },
  btn: {
    marginBottom: 30 * em,
    backgroundColor: '#38C2FF',
  },
};

export default MabulCommonShareScreen;