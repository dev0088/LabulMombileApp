import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import CircleDraw from 'view/components/CircleDraw';
import CommentText from 'view/components/CommentText';
import { Actions } from 'react-native-router-flux';
import AvatarWithBadge from 'view/components/AvatarWithBadge';
import CommonListItem from 'view/components/CommonListItem';

const invitationUsers = [
  {
    id: 0,
    avatar: require('assets/images/avatar.png'),
    badge: require('assets/images/sample_cover_3.png'),
    userName: 'Joseph Martin',
    date: '21:59',
    comment: 'Salut ! Je t’invite à participer à Nettoyage de ma voiture.',
    checked: true,
  },
  {
    id: 1,
    avatar: require('assets/images/avatar.png'),
    badge: require('assets/images/sample_cover_2.png'),
    userName: 'Amandine Bernard',
    date: 'Lun',
    comment: 'Salut ! Je t’invite à participer à Réparer une chaise',
    checked: true,
  },
];

const MyInviationsTabScreen = () => {
  const [isEmpty, setIsEmpty] = useState(true);

  const emptyView = (
    <TouchableOpacity style={styles.emptyView} onPress={() => setIsEmpty(false)}>
      <CircleDraw
        radius={17.31 * em}
        color="#A0AEB8"
        style={{ opacity: 0.4, position: 'absolute', left: 103.85 * em }}
      />
      <CircleDraw
        radius={8.31 * em}
        color="#A0AEB8"
        style={{ opacity: 0.4, position: 'absolute', top: 17.31 * em, left: 190.35 * em }}
      />
      <Image style={styles.msgIcon} />
      <CommonText text={'Tu n’as pas d’invitations'} color={'#6A8596'} style={styles.msgTxt} />
      <CommentText
        text={'Ne t’inquiètes pas, quelqu’un de tes cercles t’invitera bientôt. Regarde les demandes autour de toi'}
        color={'#6A8596'}
        style={styles.explainTxt}
      />
    </TouchableOpacity>
  );
  const renderFlatList = ({ item }) => (
    <CommonListItem
      title={item.userName}
      titleStyle={styles.listItemUserName}
      subTitle={item.comment}
      subTitleStyle={styles.listItemComment}
      comment={item.lastText}
      commentStyle={[styles.listItemLastText, { color: item.checked ? '#6A8596' : '#40CDDE' }]}
      icon={
        <AvatarWithBadge
          avatar={item.avatar}
          badge={item.badge}
          avatarDiameter={40 * em}
          badgeDiameter={22 * em}
          style={{ marginRight: 15 * em }}
        />
      }
      style={styles.listItem}
      rightView={
        item.checked ? (
          <CommentText text={item.date} style={styles.listItemDate} />
        ) : (
          <View>
            <CommentText text={item.date} style={styles.listItemDate} />
            <Image source={require('assets/images/ic_circle_pink.png')} style={styles.alertIcon} />
          </View>
        )
      }
      onPress={() => Actions.activityMessage({ sort: 'invitation' })}
    />
  );
  const listView = <FlatList data={invitationUsers} renderItem={renderFlatList} keyExtractor={(i) => i.id} />;
  return <View style={styles.container}>{isEmpty ? emptyView : listView}</View>;
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    paddingTop: 25 * hm,
    paddingHorizontal: 30 * em,
  },
  emptyView: {
    marginTop: 74 * em,
    width: 315 * em,
    height: 148.15 * em,
    alignSelf: 'center',
  },
  msgIcon: {
    width: 37 * em,
    height: 37 * em,
    backgroundColor: '#A0AEB8',
    opacity: 0.4,
    marginTop: 13.15 * em,
    alignSelf: 'center',
    borderRadius: 19.5 * em,
  },
  msgTxt: {
    marginTop: 15 * em,
    textAlign: 'center',
    fontWeight: 'bold',
    lineHeight: 23 * em,
  },
  explainTxt: {
    marginTop: 10 * em,
    lineHeight: 23 * em,
    width: 289 * em,
    textAlign: 'center',
    alignSelf: 'center',
  },
  listItem: {
    marginBottom: 35 * em,
    width: 315 * em,
  },
  listItemUserName: { color: '#1E2D60', lineHeight: 21 * hm, fontWeight: 'bold' },
  listItemComment: { color: '#A0AEB8', lineHeight: 18 * hm },
  listItemDate: { color: '#A0AEB8', fontSize: 13 * em, textAlign: 'right' },
  listItemLastText: { marginTop: 6 * hm, marginLeft: 55 * em, textAlign: 'left' },
};

export default MyInviationsTabScreen;
