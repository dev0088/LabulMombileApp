import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { em } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import CommentText from 'view/components/text/CommentText';
import { FlatList, TouchableOpacity, TextInput } from 'react-native';
import { Actions } from 'react-native-router-flux';
import CommonBackButton from 'view/components/button/CommonBackButton';
import CommonButton from 'view/components/button/CommonButton';
import MessageCounterDownPopupScreen from './MessageCounterDownPopupScreen';
import MessageProfilePopupScreen from './MessageProfilePopupScreen';
import { TelephoneWhite } from 'assets/svg/icons';
import ClockDraw from 'view/components/view/ClockDraw';
import MessageView from 'view/components/view/MessageView';
import { CheckedBlue } from 'assets/svg/icons';
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
var requestMessage = [
  {
    id: 0,
    date: '21:59',
    side: OTHERSIDE,
    messages: ['Mathieu, pouvez-vous me donner l’adresse de l’endroit à récolter des figues ?'],
  },
];

const ActivityMessageScreen = (props) => {
  const [messageCounterVisible, setMessageCounterVisible] = useState(false);
  const [messageProfileVisible, setMessageProfileVisible] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [isAccepted, setIsAccepted] = useState();
  const popupHeader = (
    <View style={styles.popupHeader}>
      <View style={styles.titleView}>
        <Image source={props.user.badge} style={styles.titleIcon} />
        <CommentText color="#1E2D60" text="Récolter des figues" style={{ fontFamily: 'Lato-Bold' }} />
      </View>
      {isAccepted && <ClockDraw height={28 * em} seconds={isAccepted} />}
    </View>
  );
  const AcceptButton = accepted ? (
    <CommonButton
      style={[styles.optionBtn, { backgroundColor: 'rgba(64, 205, 222, 0.2)' }]}
      rightIcon={<CheckedBlue width={12 * em} height={8.79 * em} />}
      text="Accepter"
      textStyle={{ fontSize: 14 * em, color: '#40CDDE', marginLeft: 5 * em }}
    />
  ) : (
    <CommonButton
      style={styles.optionBtn}
      // rightIcon={}
      text="Accepter"
      textStyle={{ fontSize: 14 * em }}
      onPress={() => {
        props.activityType === 'invitation' ? setAccepted(true) : setMessageCounterVisible(true);
      }}
    />
  );
  const optionView = (
    <View style={styles.optionView}>
      {AcceptButton}
      <CommonButton
        style={[styles.optionBtn, { backgroundColor: '#F9547B' }]}
        // rightIcon={}
        text="Refuser"
        textStyle={{ fontSize: 14 * em }}
        onPress={() => {
          props.activityType === 'invitation' ? {} : setMessageCounterVisible(true);
        }}
      />
    </View>
  );
  const SuccessToast = (
    <View style={styles.toast}>
      <View style={{ flexDirection: 'row', marginTop: 27 * em, marginBottom: 15 * em }}>
        <Image source={require('assets/images/avatar.png')} style={styles.toastAvatar} />
        <View style={styles.avatarCheck}>
          <CheckedBlue wdith={16.67 * em} height={12.2 * em} />
        </View>
      </View>
      <CommentText
        text="Mathieu viens d’accepter la participation d’Amandine"
        color="#1E2D60"
        style={{ fontFamily: 'Lato-Bold' }}
      />
    </View>
  );
  const renderMessageList = ({ item, index }) => {
    const { date, messages, side } = item;
    return <MessageView date={date} messages={messages} side={side} />;
  };

  if (props.activityType === 'invitation') {
    requestMessage = [
      {
        id: 0,
        date: '21:59',
        side: OTHERSIDE,
        messages: ['Bonjour Mathieu, je souhaite t’inviter pour Nettoyage de ma voiture'],
      },
    ];
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}>
          <CommonBackButton />
          <TouchableOpacity
            style={{ flexDirection: 'row', flex: 1, alignItems: 'center' }}
            onPress={() => setMessageProfileVisible(!messageProfileVisible)}>
            <Image source={require('assets/images/avatar.png')} style={styles.avatarIcon} />
            <CommonText text="Amandine Bernard" color="#ffffff" style={{ fontFamily: 'Lato-Bold' }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => Actions.activityDial()}>
          <View style={styles.dialIcon}>
            <TelephoneWhite width={20 * em} height={20 * em} />
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.popup}>
        {popupHeader}
        {isAccepted && SuccessToast}
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
  toast: {
    margin: -30 * em,
    alignItems: 'center',
    left: 0,
    top: 8 * em,
    height: 183 * em,
    postion: 'absolute',
    width: 375 * em,
    backgroundColor: 'rgba(64, 205, 222, 0.15)',
    paddingHorizontal: 30 * em,
    paddingBottom: 21 * em,
  },
  avatarCheck: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 34 * em,
    width: 34 * em,
    borderRadius: 24 * em,
    backgroundColor: '#ffffff',
    marginLeft: -32 * em,
    marginTop: -5 * em,
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
    paddingHorizontal: 15 * em,
    backgroundColor: '#40CDDE',
    borderRadius: 21 * em,
    alignSelf: 'baseline',
    width: 125 * em,
    // flex: 1,
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
