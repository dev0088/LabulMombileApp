import React from 'react';
import { View } from 'react-native';
import { em, hm } from 'view/common/const';
import { FlatList } from 'react-native';
import ProfileCommonNeedCard from 'view/components/ProfileCommonNeedCard';
import { Actions } from 'react-native-router-flux';
import NeedService from 'model/service/NeedService';
import NeedServiceType from 'model/service/NeedServiceType';
import OrganizeService from 'model/service/OrganizeService';
import User from 'model/User';
import OrganizeServiceType from 'model/service/OrganizeServiceType';
import SellServiceType from 'model/service/SellServiceType';
import SellService from 'model/service/SellService';

const needsLists = [
  new SellService(
    'La belle coiffure',
    'Je vends Bon plan',
    'Coiffure et soin keratine',
    '04 Fév · 08h00',
    require('assets/images/sample_cover_132.png'),
    1,
    SellServiceType.TIP,
    '5,00 €','',
    '(Jusqu’au 3 Mars)'
  ),
  new SellService(
    'La belle coiffure',
    'Je vends Bon plan',
    'Hydratant en spray',
    '04 Fév · 08h00',
    require('assets/images/sample_cover_132.png'),
    1,
    SellServiceType.TIP,
    '5,00 €',
    
  ),
  new SellService(
    'La belle coiffure',
    'Je vends Bon plan',
    'Démaquillant de rouge à lèvre (200ml)',
    '04 Fév · 08h00',
    require('assets/images/sample_cover_132.png'),
    1,
    SellServiceType.TIP,
    '5,00 €',
 
  ),
  
];
const ProTipsTabScreen = () => {
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
    <ProfileCommonNeedCard data={item} style={styles.listItem} onPress={() => Actions.proSell({data:item})} />
  );
  const listView = <FlatList data={needsLists} renderItem={renderFlatList} keyExtractor={(i) => i.id} />;
  return <View style={styles.container}>{listView}</View>;
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    paddingTop: 25 * hm,
    paddingHorizontal: 30 * em,
  },

  emptyView: { marginTop: 74 * hm, width: 315 * em, height: 148.15 * hm, alignSelf: 'center' },
  listItem: { marginBottom: 15 * em, width: 315*em },
};

export default ProTipsTabScreen;