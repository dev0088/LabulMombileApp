import React, { useState } from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import CommentText from 'view/components/CommentText';
import CommonButton from 'view/components/CommonButton';
import { Actions } from 'react-native-router-flux';
import FriendParticipatePopupScreen from './FriendParticipatePopupScreen';
import FriendInvitePopupScreen from './FriendInvitePopupScreen';
import OrganizeServiceType from 'model/service/OrganizeServiceType';
import OrganizeService from 'model/service/OrganizeService';
import User from 'model/User';
import MabulDetailView from '../../../components/MabulDetailView';

const organizeData = Object.assign(
  new OrganizeService(
    new User('Philippe Durand', require('assets/images/sample_user_2.png'), 'anton@gmail.com'),
    'J’organise Atelier',
    'Photographie vintage',
    new Date(),
    require('assets/images/sample_cover_1.png'),
    1,
    OrganizeServiceType.WORKSHOP
  ),
  { relationship: 'Mon ami/ma familie' }
);
const FriendOrganizeScreen = () => {
  const [invitePopupVisible, setInvitePopupVisible] = useState(false);
  const [participatePopupVisible, setParticipatePopupVisible] = useState(false);
  const [data] = useState(organizeData);
  return (
    <View style={styles.container}>
      <MabulDetailView data={data} />
      <View style={styles.btnBox}>
        <CommonButton text={'Participer'} onPress={() => setParticipatePopupVisible(true)} />
      </View>
      <FriendInvitePopupScreen visible={invitePopupVisible} onPress={() => setInvitePopupVisible(false)} />
      <FriendParticipatePopupScreen
        visible={participatePopupVisible}
        onPress={() => setParticipatePopupVisible(false)}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  btnBox: {
    paddingLeft: 26 * em,
    paddingRight: 26 * em,
    paddingTop: 15 * em,
    paddingBottom: 22 * em,
  },
};

export default FriendOrganizeScreen;