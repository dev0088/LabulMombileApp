import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import CommentText from '../../../../components/CommentText';
import MabulCommonHeader from '../../../../components/MabulCommonHeader';
import MabulCommonListItem from '../../../../components/MabulCommonListItem';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from '../../../../components/MabulNextButton';
import { ScreenStackHeaderCenterView } from 'react-native-screens';

const MabulOrganizeTitleScreen = () => {
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} isNoBackBtn={true} progressBarColor={'#FDC641'} />
      <View style={styles.body}>
        <View>
          <TitleText text={'Donne un titre à ton apéro'} style={styles.title} />
          <CommentText text="Soi court et précis dans les détails" style={styles.comment} />
          <MabulCommonListItem
            text={'Écrit un titre court'}
            style={styles.listItem}
            icon={require('assets/images/ic_edit.png')}
          />
          <MabulCommonListItem
            text={'Détail ta demande ici'}
            subText="(Soit concis pour être plus efficace)"
            style={styles.listItem}
            icon={require('assets/images/ic_edit.png')}
          />
        </View>
        <MabulNextButton color={'#FDC641'} style={styles.nextBtn} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '10.3%',
  },
  body: {
    flex: 1,
    paddingLeft: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
  },
  comment: { textAlign: 'left', lineHeight: 20 * em, height: 16 * em, textAlignVertical: 'center', marginTop: 10 * em },
  listItem: {
    height: HEIGHT * 0.09,
    width: WIDTH * 0.92,
    marginTop: 25 * em,
  },
  nextBtn: {
    alignSelf: 'flex-end',
    marginRight: 30 * em,
    marginBottom: 30 * em,
  },
};

export default MabulOrganizeTitleScreen;
