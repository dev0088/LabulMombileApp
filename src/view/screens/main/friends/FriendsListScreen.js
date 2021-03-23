import React from 'react';
import { View, FlatList } from 'react-native';
import { em } from 'view/common/const';
import OrganizeService from 'model/service/OrganizeService';
import User from 'model/User';
import OrganizeServiceType from 'model/service/OrganizeServiceType';
import FriendListCard from 'view/components/adapter/FriendListCard';
import ServiceType from 'model/service/ServiceType';
import { Actions } from 'react-native-router-flux';
import NeedService from 'model/service/NeedService';
import NeedServiceType from 'model/service/NeedServiceType';
import GiveService from 'model/service/GiveService';
import SellService from 'model/service/SellService';
import SellServiceType from 'model/service/SellServiceType';

const friends = [
  new NeedService(
    new User('Amandine Bernard', require('assets/images/sample_user_1.png'), 'anton@gmail.com'),
    'J’ai besoin Service Bricolage',
    'Réparer une chaise',
    new Date(),
    require('assets/images/sample_cover_2.png'),
    3,
    NeedServiceType.REPAIR
  ),
  new NeedService(
    new User('Amandine Bernard', require('assets/images/sample_user_2.png'), 'anton@gmail.com'),
    'J’ai besoin Service Bricolage',
    'Réparer une chaise',
    new Date(),
    require('assets/images/sample_cover_3.png'),
    3,
    NeedServiceType.CARPOOL
  ),
  new SellService(
    'Arbre de vie',
    'Je vends Bon plan',
    'Spray cuisine 100% Bio',
    '04 Fév · 08h00',
    require('assets/images/sample_cover_4.png'),
    1,
    SellServiceType.PLANT,
    '5,00 €'
  ),
  new NeedService(
    new User('Pierre Legrand', require('assets/images/sample_user_1.png'), 'anton@gmail.com'),
    'J’ai besoin Service Bricolage',
    'iPhoneX 256Go comme neuf',
    null,
    require('assets/images/sample_cover_5.png'),
    1,
    NeedServiceType.REPAIR_DEVICE,
    '560,00 €'
  ),
  new OrganizeService(
    new User('Philippe Durand', require('assets/images/sample_user_2.png'), 'anton@gmail.com'),
    'J’organise Atelier',
    'Photographie vintage',
    new Date(),
    require('assets/images/sample_cover_1.png'),
    1,
    OrganizeServiceType.WORKSHOP
  ),
  new SellService(
    'La belle coiffure',
    'Je vends Promotion',
    'Coiffure et soin keratine',
    '04 Fév · 08h00',
    require('assets/images/sample_cover_6.png'),
    1,
    SellServiceType.BEAUTY,
    '5,00 €',
    '15,00 € (Jusqu’au 25 Fév)'
  ),
  new GiveService(
    new User('Antoine Durand', require('assets/images/sample_user_2.png'), 'anton@gmail.com'),
    '',
    'Route barré',
    null,
    require('assets/images/sample_cover_8.png'),
    '77 Boulevard Amedee Clara Le Gosier'
  ),
  new NeedService(
    new User('Sarah Dupont', require('assets/images/sample_user_1.png'), 'anton@gmail.com'),
    'J’ai besoin Service Bricolage',
    'Nourriture vegan',
    null,
    require('assets/images/sample_cover_7.png'),
    1,
    NeedServiceType.VEGAN_FOOD
  ),
];

const FriendsListScreen = () => {
  const renderFlatList = ({ item }) => (
    <FriendListCard
      data={item}
      onPress={() => {
        if (item.type === ServiceType.ORGANIZE) {
          Actions.friendOrganize();
        } else {
          if (item.type === ServiceType.NEED) {
            Actions.friendNeed();
          } else {
            Actions.friendSell();
          }
        }
      }}
      onAvatarPress={() => Actions.userProfile()}
    />
  );
  return (
    <View style={styles.container}>
      <FlatList data={friends} renderItem={renderFlatList} keyExtractor={(i) => i.id} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F5F7',
    marginTop: 128 * em,
    marginBottom: 64 * em,
  },
  card: {
    width: 315 * em,
    height: 284 * em,
    borderRadius: 10 * em,
    marginBottom: 15 * em,
  },
};

export default FriendsListScreen;
