import React, { useState, useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { em, HEIGHT, hm } from 'view/common/const';
import CommonButton from 'view/components/button/CommonButton';
import CommonText from 'view/components/text/CommonText';
import Modal from 'react-native-modal';
import ClockDraw from 'view/components/view/ClockDraw';
import { Clock } from 'assets/svg/icons';
const MessageCounterDownPopupScreen = (props) => {
  const [seconds, setSeconds] = useState(30);

  useEffect(() => {
    if (props.visible) {
      if (seconds < 0) {
        clearInterval(intervalId);
      }
      const intervalId = setInterval(() => {
        //assign interval to a variable to clear it.
        setSeconds(seconds - 1);
      }, 1000);
      if (seconds <= 0) {
        return clearInterval(intervalId);
      }
      return () => clearInterval(intervalId); //This is important
    } else {
      setSeconds(30);
    }
  }, [props.visible, seconds, setSeconds]);
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.9}
      style={styles.modalView}
      backdropColor="#1E2D60"
      swipeDirection={'up'}
      onBackButtonPress={() => props.onPress()}>
      <StatusBar backgroundColor="rgba(30, 45, 96, 0.8)" barStyle="light-content" />
      <View style={styles.container}>
        {/* <View style={styles.circle1} />
        <View style={styles.circle2} />
        <View style={styles.circle3} />
        <View style={styles.circle4} />
        <View style={styles.circle5} />
        <View style={styles.topView}>
          <ClockDraw height={52 * em} seconds={seconds} />
        </View> */}
        <View style={{ flex: 0.46, flexDirection: 'column-reverse', alignSelf: 'center' }}>
          <CommonText text={seconds + 's'} color="rgba(249, 84, 123, 1)" style={styles.secondsTxt} />
          <Clock width={184 * em} height={120 * em} />
        </View>

        <View style={styles.bottomView}>
          <View style={styles.textBox}>
            <CommonText text={'le temps alloué à la rédaction des'} style={styles.notice} color={'#ffffff'} />
            <CommonText text={' messages est limité à 30s.'} style={styles.notice} color={'#ffffff'} />
            <CommonText text={' '} style={styles.notice} color={'#ffffff'} />
            <CommonText text={' A toi de jouer !'} style={styles.notice} color={'#ffffff'} />
          </View>
          <CommonButton
            text={'D’accord, répondre maintenant'}
            onPress={() => {
              props.onPress();
              props.onAccept(seconds);
            }}
          />
          <CommonButton text={'Répondre plus tard'} style={styles.laterBtn} />
        </View>
      </View>
    </Modal>
  );
};

const styles = {
  modalView: {
    marginTop: 38 * hm,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    borderTopRightRadius: 10 * em,
    borderTopLeftRadius: 10 * em,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    opacity: 0.9,
    flexDirection: 'column',
    postion: 'absolute',
  },
  topView: {
    flex: 0.46,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  bottomView: {
    flex: 0.54,
    alignItems: 'center',
  },
  canvas: {
    backgroundColor: '#FEDDE4',
    width: 121 * em,
    height: 52 * hm,
    borderRadius: 26 * em,
    alignItems: 'center',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondsTxt: {
    fontFamily: 'Lato-Bold',
    fontSize: 27 * em,
    lineHeight: 38 * em,
    zIndex: 1,
    position: 'absolute',
    left: 50 * em,
    bottom: 9 * em,
  },
  textBox: {
    marginTop: 0.087 * HEIGHT,
    alignItems: 'center',
    marginBottom: 0.064 * HEIGHT,
  },
  notice: {
    lineHeight: 20 * em,
  },
  circle: {
    width: 40.95 * em,
    height: 40.95 * em,
    borderRadius: 20.475 * em,
    marginRight: 5.58 * em,
    backgroundColor: '#F9547B',
  },
  circle1: {
    width: 9.5 * em,
    height: 9.5 * em,
    borderRadius: (9.5 / 2) * em,
    left: 117.5 * em,
    top: (179.31 / 667) * HEIGHT,
    backgroundColor: '#F9547B',
  },
  circle2: {
    width: 9.5 * em,
    height: 9.5 * em,
    borderRadius: (9.5 / 2) * em,
    left: 270.44 * em,
    top: (257.31 / 667) * HEIGHT,
    backgroundColor: '#F9547B',
  },
  circle3: {
    width: 2.05 * em,
    height: 2.05 * em,
    borderRadius: 1.025 * em,
    left: 202.84 * em,
    top: (222.4 / 667) * HEIGHT,
    backgroundColor: '#F9547B',
  },
  circle4: {
    width: 2.05 * em,
    height: 2.05 * em,
    borderRadius: 1.025 * em,
    left: 254.865 * em,
    top: (201.425 / 667) * HEIGHT,
    backgroundColor: '#F9547B',
  },
  circle5: {
    width: 2.05 * em,
    height: 2.05 * em,
    borderRadius: 1.025 * em,
    left: 98.925 * em,
    top: (266.425 / 667) * HEIGHT,
    backgroundColor: '#F9547B',
  },
  laterBtn: {
    marginTop: 15 * em,
    backgroundColor: 'transparent',
  },
};

export default MessageCounterDownPopupScreen;
