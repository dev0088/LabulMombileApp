import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { em, WIDTH } from 'view/common/const';
import CommentText from './CommentText';
import CommonBackButton from './CommonBackButton';

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

const MabulCommonHeader = (props) => {
  let backButtonImage = require('assets/images/btn_back_white.png');

  if (props.isNoBackBtn) {
    backButtonImage = null;
  }
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.topViewHeader}>
        <CommonBackButton />
        <CommentText text={'Annuler'} onPress={() => Actions.main()} style={styles.mainBtn} />
      </View>
      <View style={[{ backgroundColor: hexToRGB(props.progressBarColor, 0.24) }, styles.progressContainer]}>
        <View
          style={[
            { width: (WIDTH / 100) * props.percent, backgroundColor: props.progressBarColor },
            styles.progressBar,
          ]}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'column',
    width: '100%',
  },
  topViewHeader: {
    paddingDown: 4 * em,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  backBtnView: {
    width: 44 * em,
    height: 44 * em,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15 * em,
  },
  backButton: {
    width: 20 * em,
    height: 18 * em,
    resizeMode: 'contain',
  },
  mainBtn: {
    marginRight: 30 * em,
  },
  progressBar: {
    height: 6 * em,
  },
  progressContainer: {
    width: '100%',
    height: 6 * em,
  },
};

export default MabulCommonHeader;
