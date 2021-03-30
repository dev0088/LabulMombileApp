import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import CommentText from 'view/components/text/CommentText';
import { FlatList, TouchableOpacity } from 'react-native';
import CommonListItem from 'view/components/adapter/CommonListItem';
import AvatarWithBadge from 'view/components/view/AvatarWithBadge';
import { Actions } from 'react-native-router-flux';
import { MessageBackground, MessageGray } from 'assets/svg/icons';
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
const ActivityNeedsTabScreen = () => {
  const [isEmpty, setIsEmpty] = useState(true);
  const emptyView = (
    <TouchableOpacity style={styles.emptyView} onPress={() => setIsEmpty(!isEmpty)}>
      <View style={{ position: 'absolute', left: 103.85 * em }}>
        <MessageBackground width={17.31 * em} height={17.31 * em} />
      </View>
      <View style={{ position: 'absolute', top: 17.31 * em, left: 190.35 * em, transform: [{ rotate: '270deg' }] }}>
        <MessageBackground width={8.31 * em} height={8.31 * em} />
      </View>

      <View style={styles.msgIcon}>
        <MessageGray width={37 * em} height={37 * em} />
      </View>
      <CommonText text={'Tu n’as pas de messages'} color={'#6A8596'} style={styles.msgTxt} />
      <CommentText
        text={'Parle que si tu participes dans une demande sur Labul, la messagerie est dédiée qu’aux demandes'}
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
      onPress={() => Actions.activityMessage({ activityType: 'needs', user: item })}
    />
  );
  const listView = <FlatList data={needsUsers} renderItem={renderFlatList} keyExtractor={(i) => i.id} />;
  return (
    <View style={styles.container}>
      <View style={styles.view}>{isEmpty ? emptyView : listView}</View>
    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'flex-start', backgroundColor: '#F0F5F7', paddingTop: 10 * hm },
  view: { flex: 1, backgroundColor: '#ffff', width: '100%', paddingTop: 25 * em, paddingHorizontal: 30 * em },
  emptyView: {
    marginTop: 74 * hm,
    width: 315 * em,
    height: 148.15 * hm,
    alignSelf: 'center',
  },
  msgIcon: { marginTop: 13.15 * em, alignSelf: 'center' },
  msgTxt: {
    fontFamily: 'Lato-Black',
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
  alertIcon: {
    resizeMode: 'contain',
    tintColor: '#F9547B',
    width: 10 * em,
    height: 10 * hm,
    alignSelf: 'flex-end',
    marginTop: 10 * hm,
  },
  listItem: {
    marginBottom: 35 * em,
    width: '100%',
  },
  listItemUserName: { color: '#1E2D60', lineHeight: 21 * hm, fontFamily: 'Lato-Black' },
  listItemComment: { color: '#A0AEB8', lineHeight: 18 * hm },
  listItemDate: { color: '#A0AEB8', fontSize: 13 * em, textAlign: 'right' },
  listItemLastText: { marginTop: 6 * hm, marginLeft: 55 * em, textAlign: 'left' },
};

export default ActivityNeedsTabScreen;
