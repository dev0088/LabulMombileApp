import React from 'react';
import { View, Image } from 'react-native';
import { em } from 'view/common/const';
import CommonText from '../../../components/CommonText';
import CircleDraw from '../../../components/CircleDraw';
import CommentText from '../../../components/CommentText';

const MyInviationsTabScreen = () => {
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
      <CommonText text={'Tu n’as pas d’invitations'} color={'#6A8596'} style={styles.msgTxt} />
      <CommentText
        text={'Ne t’inquiètes pas, quelqu’un de tes cercles t’invitera bientôt. Regarde les demandes autour de toi'}
        color={'#6A8596'}
        style={styles.explainTxt}
      />
    </View>
  );
  return <View style={styles.container}>{emptyView}</View>;
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff',
  },
  body: {
    backgroundColor: '#ffffff',
    marginTop: 10 * em,
    width: '100%',
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

export default MyInviationsTabScreen;
