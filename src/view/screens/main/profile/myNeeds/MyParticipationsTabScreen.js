import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import CircleDraw from 'view/components/CircleDraw';
import CommentText from 'view/components/CommentText';
import { FlatList, TouchableOpacity } from 'react-native';
import CommonListItem from 'view/components/CommonListItem';
import ProfileCommonNeedCard from 'view/components/ProfileCommonNeedCard';
import ServiceType from 'model/service/ServiceType';
import { Actions } from 'react-native-router-flux';
import NeedService from 'model/service/NeedService';
import NeedServiceType from 'model/service/NeedServiceType';
import GiveService from 'model/service/GiveService';
import SellService from 'model/service/SellService';
import SellServiceType from 'model/service/SellServiceType';
import OrganizeService from 'model/service/OrganizeService';
import User from 'model/User';
import OrganizeServiceType from 'model/service/OrganizeServiceType';

const paricipationLists = [
  Object.assign(
    new NeedService(
      new User('Mathieu Torin', require('assets/images/tab_profile_off.png'), 'anton@gmail.com'),
      'J’ai besoin coup de main bricolage',
      'Réparer une chaise',
      new Date(),
      require('assets/images/sample_cover_2.png'),
      3,
      NeedServiceType.REPAIR
    ),
    { status: 'waiting' }
  ),
  Object.assign(
    new NeedService(
      new User('Mathieu Torin', require('assets/images/tab_profile_off.png'), 'anton@gmail.com'),
      'J’organise atelier',
      'Photographie vintageaaaaaaaaaaaaaaaaaaaaaa',
      new Date(),
      require('assets/images/sample_cover_1.png'),
      1,
      OrganizeServiceType.WORKSHOP
    ),
    { status: 'participated' }
  ),
  Object.assign(
    new NeedService(
      new User('Mathieu Torin', require('assets/images/tab_profile_off.png'), 'anton@gmail.com'),
      'J’ai besoin service bricolage',
      'Récolter des figues',
      new Date(),
      require('assets/images/sample_cover_12.png'),
      3,
      NeedServiceType.REPAIR
    ),
    { status: 'refused' }
  ),
];
const MyParticipationsScreen = () => {
  //   const [isEmpty, setIsEmpty] = useState(true);
  //   const emptyView = (
  //     <TouchableOpacity style={styles.emptyView} onPress={() => setIsEmpty(!isEmpty)}>
  //       <CircleDraw
  //         radius={17.31 * em}
  //         color="#A0AEB8"
  //         style={{ opacity: 0.4, position: 'absolute', left: 103.85 * em }}
  //       />
  //       <CircleDraw
  //         radius={8.31 * em}
  //         color="#A0AEB8"
  //         style={{ opacity: 0.4, position: 'absolute', top: 17.31 * em, left: 190.35 * em }}
  //       />
  //       <Image style={styles.msgIcon} />
  //       <CommonText text={'Tu n’as pas de messages'} color={'#6A8596'} style={styles.msgTxt} />
  //       <CommentText
  //         text={'Parle que si tu participes dans une demande sur Labul, la messagerie est dédiée qu’au demandes'}
  //         color={'#6A8596'}
  //         style={styles.explainTxt}
  //       />
  //     </TouchableOpacity>
  //   );
  const renderFlatList = ({ item }) => (
    <ProfileCommonNeedCard
      data={item}
      style={styles.listItem}
      onPress={() => {
        Actions.friendNeed({ data: item });
      }}
    />
  );
  const listView = (
    <FlatList
      data={paricipationLists}
      renderItem={renderFlatList}
      keyExtractor={(i) => i.id}
      style={{ paddingTop: 25 * em, paddingHorizontal: 30 * em, backgroundColor: '#ffffff' }}
    />
  );
  return <View style={styles.container}>{listView}</View>;
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#F0F5F7',
    paddingTop: 10 * hm,
  },

  emptyView: { marginTop: 74 * hm, width: 315 * em, height: 148.15 * hm, alignSelf: 'center' },
  listItem: { marginBottom: 15 * em },
};

export default MyParticipationsScreen;
