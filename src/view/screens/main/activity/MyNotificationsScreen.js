import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import CircleDraw from 'view/components/CircleDraw';
import CommentText from 'view/components/CommentText';
import TitleText from 'view/components/TitleText';
import { Actions } from 'react-native-router-flux';
import { navigationRef } from '../RootNavigation';

const MyNotificationsScreen = (props) => {
  const emptyView = (
    <View style={styles.emptyView}>
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
      <CommonText text={'Tu n’as pas encore de notifications'} color={'#6A8596'} style={styles.msgTxt} />
      <CommentText
        text={'Bientôt tu vas recevoir des propositions autour de toi'}
        color={'#6A8596'}
        style={styles.explainTxt}
      />
    </View>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.containerTxtBtn}>
          <TouchableOpacity
            onPress={() => {
              navigationRef.current.navigate('Activity');
            }}>
            <Image source={require('assets/images/ic_notification_green.png')} style={styles.notificationBtn} />
          </TouchableOpacity>
        </View>
        <TitleText text={'Mes notifications'} style={styles.title} />
      </View>
      <View style={styles.body}>{emptyView}</View>
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
  notificationBtn: {
    width: 19 * em,
    height: 22 * em,
    alignSelf: 'flex-end',
    marginRight: 30 * em,
    marginTop: 39 * em,
  },
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    height: 40 * em,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 20 * em,
    marginBottom: 25 * em,
  },
  body: {
    backgroundColor: '#ffffff',
    width: '100%',
    flex: 1,
  },
  emptyView: {
    marginTop: 99 * em,
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
};

export default MyNotificationsScreen;
