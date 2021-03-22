import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { em } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import CommentText from 'view/components/CommentText';
import { FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CommonBackButton from 'view/components/CommonBackButton';
import MessageCounterDownPopupScreen from './MessageCounterDownPopupScreen';
import MessageProfilePopupScreen from './MessageProfilePopupScreen';

import ClockDraw from 'view/components/ClockDraw';
import MessageView from 'view/components/MessageView';

const OTHERSIDE = 1;
const OURSIDE = 2;

const messageLists = [
  { id: 1, date: '22:00', side: OURSIDE, messages: ['Bien sur, voici :\n ABYMES 97139\n Guadeloupe'] },
  {
    id: 0,
    date: '21:59',
    side: OTHERSIDE,
    messages: [
      'Je vous remercie d’avance',
      'Mathieu, pouvez-vous me donner l’adresse de l’endroit à récolter des figues ?',
    ],
  },
];
const requestMessage = [
  {
    id: 0,
    date: '21:59',
    side: OTHERSIDE,
    messages: ['Mathieu, pouvez-vous me donner l’adresse de l’endroit à récolter des figues ?'],
  },
];

const ActivityMessageScreen = (props) => {
  console.log(props.sort);
  const [messageCounterVisible, setMessageCounterVisible] = useState(false);
  const [messageProfileVisible, setMessageProfileVisible] = useState(false);

  const [isAccepted, setIsAccepted] = useState();
  const popupHeader = (
    <View style={styles.popupHeader}>
      <View style={styles.titleView}>
        <Image source={require('assets/images/sample_cover_9.png')} style={styles.titleIcon} />
        <CommentText color="#1E2D60" text="Récolter des figues" />
      </View>
      {isAccepted && <ClockDraw height={28 * em} seconds={isAccepted} />}
    </View>
  );
  const optionView = (
    <View style={styles.optionView}>
      <TouchableOpacity
        style={styles.optionBtn}
        onPress={() => {
          setMessageCounterVisible(true);
        }}>
        <Image />
        <CommentText text="Accepter" color="#ffffff" />
      </TouchableOpacity>
      <TouchableOpacity style={[styles.optionBtn, { backgroundColor: '#F9547B' }]}>
        <Image />
        <CommentText text="Refuser" color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
  console.log(requestMessage);

  const renderMessageList = ({ item, index }) => {
    const { date, messages, side } = item;
    return <MessageView date={date} messages={messages} side={side} />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <CommonBackButton />
          <TouchableOpacity
            style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}
            onPress={() => setMessageProfileVisible(!messageProfileVisible)}>
            <Image source={require('assets/images/avatar.png')} style={styles.avatarIcon} />
            <CommonText text="Amandine Bernard" color="#ffffff" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => Actions.activityDial()}>
          <Image source={require('assets/images/ic_phone.png')} style={styles.dialIcon} />
        </TouchableOpacity>
      </View>
      <View style={styles.popup}>
        {popupHeader}
        <View style={styles.popupBody}>
          <View style={styles.popupFooter}>
            <Image source={require('assets/images/ic_image.png')} style={styles.imageIcon} />
            <View style={styles.inputView}>
              <TextInput placeholder="Écrit ici ton message …" style={styles.inputText} />
            </View>
          </View>
          {!isAccepted && optionView}
          <View style={{ flex: 1 }}>
            <FlatList
              data={isAccepted ? messageLists : requestMessage}
              inverted={1}
              renderItem={renderMessageList}
              keyExtractor={(i) => i.id}
            />
          </View>
        </View>
      </View>
      <MessageCounterDownPopupScreen
        onAccept={(val) => setIsAccepted(val)}
        visible={messageCounterVisible}
        onPress={() => setMessageCounterVisible(false)}
      />
      <MessageProfilePopupScreen
        onAccept={(val) => setIsAccepted(val)}
        visible={messageProfileVisible}
        onPress={() => setMessageProfileVisible(false)}
      />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#40CDDE',
  },
  header: {
    width: '100%',
    height: 81 * em,
    paddingBottom: 10 * em,
    paddingHorizontal: 15 * em,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  avatarIcon: { width: 28 * em, height: 28 * em, marginLeft: 10 * em, marginRight: 10 * em },
  dialIcon: { width: 20 * em, height: 20 * em, marginRight: 15 * em, tintColor: '#ffffff', marginBottom: 11 * em },
  popup: {
    width: '100%',
    flex: 1,
    borderTopRightRadius: 20 * em,
    borderTopLeftRadius: 20 * em,
    backgroundColor: '#ffffff',
    paddingHorizontal: 30 * em,
    paddingVertical: 15 * em,
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  popupHeader: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  titleView: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' },

  titleIcon: { width: 28 * em, height: 28 * em, borderRadius: 14 * em, marginRight: 10 * em },
  popupBody: { flexDirection: 'column-reverse', alignItems: 'center', flex: 1 },
  popupFooter: { flexDirection: 'row', alignItems: 'center', marginTop: 25 * em },
  inputView: {
    flex: 1,
    backgroundColor: '#F0F5F7',
    borderRadius: 37 * em,
    paddingVertical: 17 * em,
    paddingHorizontal: 17 * em,
  },
  inputText: { fontSize: 14 * em, lineHeight: 16 * em, color: '#9093A3', padding: 0 },
  imageIcon: { width: 40 * em, height: 40 * em, marginRight: 15 * em },
  optionBtn: {
    paddingVertical: 12 * em,
    paddingHorizontal: 22 * em,
    backgroundColor: '#40CDDE',
    borderRadius: 21 * em,
    alignSelf: 'baseline',
  },

  optionView: {
    flexDirection: 'row',
    paddingHorizontal: 29 * em,
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 10 * em,
  },
};

export default ActivityMessageScreen;
