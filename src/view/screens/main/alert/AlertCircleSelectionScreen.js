import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import MabulNextButton from 'view/components/button/MabulNextButton';
import { Actions } from 'react-native-router-flux';
import { Family, Friend, Neighbor, All } from 'assets/svg/icons';

const AlertCircleSelectionScreen = () => {
  const conceptColor = '#F9547B';

  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={20} noBackButton={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'J’alerte'} style={styles.title} />
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.iconView}>
              <Family width={48 * em} height={48 * em} />
              <CommonText text="mes voisins" color="#6A8596" style={{ marginTop: 15 * hm }} />
            </View>
            <View style={styles.iconView}>
              <Friend width={48 * em} height={48 * em} />
              <CommonText text="mes voisins" color="#6A8596" style={{ marginTop: 15 * hm }} />
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.iconView}>
              <Neighbor width={48 * em} height={48 * em} />
              <CommonText text="mes voisins" color="#6A8596" style={{ marginTop: 15 * hm }} />
            </View>
            <View style={styles.iconView}>
              <All width={48 * em} height={48 * em} />
              <CommonText text="mes voisins" color="#6A8596" style={{ marginTop: 15 * hm }} />
            </View>
          </View>
        </View>
      </View>
      <MabulNextButton
        color={conceptColor}
        style={[styles.btn, { backgroundColor: conceptColor }]}
        text="Suivant"
        onPress={() => Actions.alertClass({ process: 40 })}
      />
    </View>
  );
};

const styles = {
  container: { flex: 1, backgroundColor: '#ffffff' },
  header: { height: 81 * hm },
  body: { flex: 1, paddingHorizontal: 30 * em, justifyContent: 'space-between' },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * hm,
    marginBottom: 35 * hm,
    lineHeight: 38 * em,
  },
  iconView: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32 * hm,
    paddingVertical: 47 * hm,
  },

  btn: { postion: 'absolute', alignSelf: 'flex-end', right: 30 * em, bottom: 30 * hm, backgroundColor: '#38C2FF' },
};

export default AlertCircleSelectionScreen;
