import React, { useState } from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, hm } from 'view/common/const';
import FriendsFilterListItem from 'view/components/FriendsFilterListItem';
import CommonHeader from 'view/components/CommonHeader';
import CommonText from 'view/components/CommonText';
import Switch from 'view/components/Switch';
import { Actions } from 'react-native-router-flux';
import FriendsFilterRequestModalScreen from './FriendsFilterRequestModalScreen';
import FriendsFilterDateModalScreen from './FriendsFilterDateModalScreen';
import FriendCommonHeader from 'view/components/FriendCommonHeader';
import CommonListItem from 'view/components/CommonListItem';
import { TypeRequest, Address, Calendar } from 'assets/svg/icons';
const FriendsFilterScreen = () => {
  const [filterRequestModalVisible, setfilterRequestModalVisible] = useState(false);
  const [filterDateModalVisible, setfilterDateModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <FriendCommonHeader title="Filtrer" />
      <View>
        <FriendsFilterListItem
          title={'Type de demande'}
          defaultSetting={'Tous'}
          style={styles.listItem}
          icon={require('assets/images/ic_request.png')}
          onPress={() => {
            setfilterRequestModalVisible(true);
          }}
        />
        <View style={styles.line} />
        <FriendsFilterListItem
          title={'Date'}
          defaultSetting={'Tous'}
          style={styles.listItem}
          icon={require('assets/images/ic_date.png')}
          onPress={() => {
            setfilterDateModalVisible(true);
          }}
        />
        <View style={styles.line} />
        <FriendsFilterListItem
          title={'Lieu'}
          defaultSetting={'Autour de moi'}
          style={styles.listItem}
          icon={require('assets/images/ic_location_green.png')}
          onPress={() => {
            Actions.inputLocation();
          }}
        />
        <View style={[styles.line, { marginLeft: 0 }]} />
        <View style={styles.switchContainer}>
          <View style={styles.txtSwitchBox}>
            <CommonText text={'Voir les demandes des pro et '} color={'#1E2D60'} style={styles.textSwitch} />
            <CommonText text={'particuliers'} color={'#1E2D60'} style={styles.textSwitch} />
          </View>
          <Switch
            switchWidth={50 * em}
            switchHeight={28 * hm}
            switchdirection="ltr"
            switchBorderColor="#ffffff"
            switchBackgroundColor="#40CDDE"
            btnBorderColor="red"
            btnBackgroundColor="#FFFFFF"
          />
        </View>
      </View>
      <View />

      <FriendsFilterRequestModalScreen
        visible={filterRequestModalVisible}
        onPress={() => {
          setfilterRequestModalVisible(false);
        }}
      />
      <FriendsFilterDateModalScreen
        visible={filterDateModalVisible}
        onPress={() => {
          setfilterDateModalVisible(false);
        }}
      />
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
    height: 50 * hm,
    marginLeft: 30 * em,
    marginRight: 30 * em,
    width: 315 * em,
  },
  title: {
    marginLeft: 30 * em,
    marginBottom: 35 * hm,
  },
  line: {
    height: 1 * hm,
    marginLeft: 65 * em,
    backgroundColor: '#F0F5F7',
    marginTop: 25 * hm,
    marginBottom: 25 * hm,
  },
  switchContainer: {
    marginLeft: 30 * em,
    marginRight: 30 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textSwitch: {
    lineHeight: 21 * hm,
  },
  txtSwitchBox: {
    justifyContent: 'center',
  },
};

export default FriendsFilterScreen;
