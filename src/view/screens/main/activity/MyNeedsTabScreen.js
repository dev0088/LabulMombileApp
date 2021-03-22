import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import CircleDraw from 'view/components/CircleDraw';
import CommentText from 'view/components/CommentText';
import { FlatList, TouchableOpacity } from 'react-native';
import CommonListItem from 'view/components/CommonListItem';
import AvatarWithBadge from 'view/components/AvatarWithBadge';
import { Actions } from 'react-native-router-flux';

const needsUsers = [
  {
    id: 0,
    avatar: require('assets/images/avatar.png'),
    badge: require('assets/images/sample_cover_9.png'),
    userName: 'Amandine Bernard',
    date: '21:59',
    comment: 'Récolter des figues',
    lastText: 'Bonjour Mathieu, je voudrai savoir si c…',
    checked: false,
  },
  {
    id: 1,
    avatar: require('assets/images/avatar.png'),
    badge: require('assets/images/sample_cover_9.png'),
    userName: 'Joseph Martin',
    date: 'Lun',
    comment: 'Récolter des figues',
    lastText: 'Je vous remercie d’avance',
    checked: true,
  },
  {
    id: 2,
    avatar: require('assets/images/avatar.png'),
    badge: require('assets/images/sample_cover_10.png'),
    userName: 'Amandine Bernard',
    date: 'Lun',
    comment: 'Universitaire',
    lastText: 'D’accord, merci Mathieu',
    checked: true,
  },
];
const MyNeedsTabScreen = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const emptyView = (
    <TouchableOpacity style={styles.emptyView} onPress={() => setIsEmpty(!isEmpty)}>
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
      <CommonText text={'Tu n’as pas de messages'} color={'#6A8596'} style={styles.msgTxt} />
      <CommentText
        text={'Parle que si tu participes dans une demande sur Labul, la messagerie est dédiée qu’au demandes'}
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
      onPress={() => Actions.activityMessage()}
    />
  );
  const listView = <FlatList data={needsUsers} renderItem={renderFlatList} keyExtractor={(i) => i.id} />;
  return <View style={styles.container}>{isEmpty ? emptyView : listView}</View>;
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
    paddingHorizontal: 30 * em,
    paddingTop: 25 * hm,
  },

  emptyView: {
    marginTop: 74 * hm,
    width: 315 * em,
    height: 148.15 * hm,
    alignSelf: 'center',
  },
  msgIcon: {
    width: 37 * em,
    height: 37 * hm,
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
    lineHeight: 23 * hm,
  },
  explainTxt: {
    marginTop: 10 * hm,
    lineHeight: 23 * hm,
    width: 289 * em,
    textAlign: 'center',
    alignSelf: 'center',
  },
  alertIcon: { tintColor: '#F9547B', width: 10 * em, height: 10 * hm, alignSelf: 'flex-end', marginTop: 10 * hm },
  listItem: {
    marginBottom: 35 * em,
    width: '100%',
  },
  listItemUserName: { color: '#1E2D60', lineHeight: 21 * hm, fontWeight: 'bold' },
  listItemComment: { color: '#A0AEB8', lineHeight: 18 * hm },
  listItemDate: { color: '#A0AEB8', fontSize: 13 * em, textAlign: 'right' },
  listItemLastText: { marginTop: 6 * hm, marginLeft: 55 * em, textAlign: 'left' },
};

export default MyNeedsTabScreen;
