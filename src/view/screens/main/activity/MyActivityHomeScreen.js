import React from 'react';
import { View, Text } from 'react-native';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import CommonButton from 'view/components/CommonButton';
import CommonText from '../../../components/CommonText';

const MyActivityHomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.circle1} />
      <View style={styles.circle2} />
      <View style={styles.circle3} />
      <View style={styles.circle4} />
      <View style={styles.circle5} />
      <View style={styles.topView}>
        <View style={styles.canvas}>
          <Text style={styles.secondsTxt}>30s</Text>
          <View style={styles.circle} />
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={styles.textBox}>
          <CommonText text={'le temps alloué à la rédaction des'} style={styles.notice} color={'#ffffff'} />
          <CommonText text={' messages est limité à 30s.'} style={styles.notice} color={'#ffffff'} />
          <CommonText text={' '} style={styles.notice} color={'#ffffff'} />
          <CommonText text={' A toi de jouer !'} style={styles.notice} color={'#ffffff'} />
        </View>
        <CommonButton text={'D’accord, répondre maintenant'} />
        <CommonButton text={'D’accord, répondre maintenant'} style={styles.laterBtn} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#1E2D60',
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
    height: 52 * em,
    borderRadius: 26 * em,
    alignItems: 'center',

    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondsTxt: {
    color: '#F9547B',
    fontSize: 27 * em,
    textAlign: 'left',
    marginLeft: 20 * em,
    textAlignVertical: 'center',
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

export default MyActivityHomeScreen;
