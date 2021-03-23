import React, { useState } from 'react';
import { View, Image, TouchableOpacity, FlatList } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import CircleDraw from 'view/components/CircleDraw';
import CommentText from 'view/components/text/CommentText';
import TitleText from 'view/components/text/TitleText';
import { Actions } from 'react-native-router-flux';
import { navigationRef } from 'view/screens/main/RootNavigation';
import CommonListItem from 'view/components/adapter/CommonListItem';
import AvatarWithBadge from 'view/components/AvatarWithBadge';
import { NotificationGray } from 'assets/svg/icons';
import { NotificationBlue } from 'assets/svg/icons';

const notificationUsers = [
  {
    id: 0,
    avatar: require('assets/images/avatar.png'),
    userName: 'Amandine Bernard',
    date: '21:59',
    comment: 'A besoin un coup de main :',
    notification: 'Réparer une chaise',
  },
  {
    id: 1,
    avatar: require('assets/images/avatar.png'),
    userName: 'Amandine Bernard',
    date: '21:59',
    comment: 'A besoin un coup de main :',
    notification: 'Réparer une chaise',
  },
  {
    id: 2,
    avatar: require('assets/images/avatar.png'),
    userName: 'Amandine Bernard',
    date: '21:59',
    comment: 'A besoin un coup de main :',
    notification: 'Réparer une chaise',
  },
];
const MyNotificationsScreen = (props) => {
  const [isEmpty, setIsEmpty] = useState(true);

  const emptyView = (
    <TouchableOpacity style={styles.emptyView} onPress={() => setIsEmpty(!isEmpty)}>
      <View style={{ position: 'absolute', left: 103.85 * em, transform: [{ rotate: '45deg' }] }}>
        <NotificationGray width={17.31 * em} height={17.31 * em} />
      </View>
      <View style={{ position: 'absolute', top: 17.31 * em, left: 190.35 * em, transform: [{ rotate: '-45deg' }] }}>
        <NotificationGray width={8.31 * em} height={8.31 * em} />
      </View>
      <View style={styles.msgIcon}>
        <NotificationGray width={37 * em} height={37 * em} />
      </View>
      <CommonText text={'Tu n’as pas encore de notifications'} color={'#6A8596'} style={styles.msgTxt} />
      <CommentText
        text={'Bientôt tu vas recevoir des propositions autour de toi'}
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
      comment={item.notification}
      commentStyle={styles.listItemNotification}
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
      rightView={<CommentText text={item.date} style={styles.listItemDate} />}
    />
  );
  const listView = <FlatList data={notificationUsers} renderItem={renderFlatList} keyExtractor={(i) => i.id} />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerTxtBtn}>
          <TouchableOpacity
            onPress={() => {
              navigationRef.current.navigate('Activity');
            }}>
            <View style={styles.notificationBtn}>
              <NotificationBlue width={19 * em} height={22 * em} />
            </View>
          </TouchableOpacity>
        </View>
        <TitleText text={'Mes notifications'} style={styles.title} />
      </View>
      <View style={styles.body}>{isEmpty ? emptyView : listView}</View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#EDF2F5',
  },
  header: {
    height: 146 * em,
    width: '100%',
    backgroundColor: '#ffffff',
    marginTop: 0,
    marginBottom: 10 * em,
  },
  notificationBtn: { alignSelf: 'flex-end', marginRight: 30 * em, marginTop: 39 * em },
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    height: 40 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 20 * em,
    marginBottom: 25 * em,
  },
  body: {
    backgroundColor: '#ffffff',
    width: '100%',
    flex: 1,
    paddingHorizontal: 30 * em,
    paddingTop: 25 * em,
  },
  emptyView: {
    marginTop: 109 * em,
    width: 315 * em,
    height: 148.15 * em,
    alignSelf: 'center',
  },
  msgIcon: { marginTop: 13.15 * em, alignSelf: 'center' },
  msgTxt: {
    marginTop: 15 * em,
    textAlign: 'center',
    fontFamily: 'Lato-Black',
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
    width: '100%',
  },
  listItemUserName: { color: '#1E2D60', lineHeight: 21 * hm, fontFamily: 'Lato-Black' },
  listItemComment: { color: '#A0AEB8', lineHeight: 18 * hm },
  listItemDate: { color: '#A0AEB8', fontSize: 13 * em, textAlign: 'right' },
  listItemNotification: { marginLeft: 55 * em, textAlign: 'left', color: '#1E2D60' },
};

export default MyNotificationsScreen;
