import React from 'react';
import { View, Switch } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT } from 'view/common/const';
import FriendsFilterListItem from 'view/components/FriendsFilterListItem';
import CommonHeader from '../../../components/CommonHeader';
import CommonText from '../../../components/CommonText';
import SwitchButton from '../../../components/SwitchButton';

const FriendsFilterScreen = () => {
  return (
    <View style={styles.container}>
      <CommonHeader isLightTheme={true} />
      <TitleText text="Filtrer" style={styles.title} />
      <View>
        <FriendsFilterListItem
          title={'Type de demande'}
          defaultSetting={'Tous'}
          style={styles.listItem}
          icon={require('assets/images/ic_request.png')}
        />
        <View style={styles.line} />
        <FriendsFilterListItem
          title={'Date'}
          defaultSetting={'Tous'}
          style={styles.listItem}
          icon={require('assets/images/ic_date.png')}
        />
        <View style={styles.line} />
        <FriendsFilterListItem
          title={'Lieu'}
          defaultSetting={'Autour de moi'}
          style={styles.listItem}
          icon={require('assets/images/ic_location_green.png')}
        />
        <View style={[styles.line, { marginLeft: 0 }]} />
        <View style={styles.switchContainer}>
          <View style={styles.txtSwitchBox}>
            <CommonText text={'Voir les demandes des pro et '} color={'#1E2D60'} style={styles.textSwitch} />
            <CommonText text={'particuliers'} color={'#1E2D60'} style={styles.textSwitch} />
          </View>

          <SwitchButton
            switchWidth={38 * em}
            switchHeight={28 * em}
            switchdirection="ltr"
            switchBorderColor="#ffffff"
            switchBackgroundColor="#40CDDE"
            btnBorderColor="red"
            btnBackgroundColor="#FFFFFF"
            style={{ marginTop: 6 * em }}
          />
        </View>
      </View>
      <View />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  listItem: {
    height: 50 * em,
    marginLeft: 30 * em,
    marginRight: 30 * em,
    width: 315 * em,
  },
  title: {
    marginLeft: 30 * em,
    marginBottom: (35 / 667) * HEIGHT,
  },
  line: {
    height: 1 * em,
    marginLeft: 65 * em,
    backgroundColor: '#F0F5F7',
    marginTop: (25 / 667) * HEIGHT,
    marginBottom: (25 / 667) * HEIGHT,
  },
  switchContainer: {
    marginLeft: 30 * em,
    marginRight: 30 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textSwitch: {
    lineHeight: 21 * em,
  },
  txtSwitchBox: {
    justifyContent: 'center',
  },
};

export default FriendsFilterScreen;
