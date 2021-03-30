import React from 'react';
import { View } from 'react-native';
import { em, hm } from 'view/common/const';
import CommonHeader from 'view/components/header/CommonHeader';
import TitleText from 'view/components/text/TitleText';

const FriendCommonHeader = (props) => {
  return (
    <View style={styles.header}>
      <CommonHeader dark={true} centerTxt={props.upperTitle} logo={true} style={styles.commonHeader} />
      <TitleText text={props.title} style={styles.title} />
    </View>
  );
};

const styles = {
  header: { height: 131 * hm, marginBottom: 35 * hm },
  commonHeader: { marginTop: 27 * hm },
  title: {
    fontSize: 34 * em,
    lineHeight: 38 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 10 * hm,
  },
};

export default FriendCommonHeader;
