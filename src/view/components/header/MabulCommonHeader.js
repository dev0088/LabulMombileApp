import React from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { em, WIDTH } from 'view/common/const';
import CommentText from 'view/components/text/CommentText';
import CommonBackButton from 'view/components/button/CommonBackButton';

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
  console.log(props.noBackButton);
  var topViewHeader = props.noBackButton ? (
    <View style={[styles.topViewHeader, { flexDirection: 'row-reverse' }]}>
      <CommentText text={'Annuler'} onPress={() => Actions.main()} style={styles.mainBtn} />
    </View>
  ) : (
    <View style={styles.topViewHeader}>
      <CommonBackButton dark={true} style={styles.backBtnView} />
      <CommentText text={'Annuler'} onPress={() => Actions.main()} style={styles.mainBtn} />
    </View>
  );
  return (
    <View style={[styles.container, props.style]}>
      {topViewHeader}
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
    justifyContent: 'flex-end',
    width: '100%',
  },
  topViewHeader: {
    height: 44 * em,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4 * em,
    justifyContent: 'space-between',
  },
  backBtnView: {
    alignSelf: 'flex-end',
    width: 44 * em,
    height: 44 * em,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15 * em,
  },
  headerTitle: { marginLeft: 10 * em },
  mainBtn: { marginRight: 30 * em },
  progressBar: { height: 6 * em },
  progressContainer: { width: '100%', height: 6 * em },
};

export default MabulCommonHeader;
