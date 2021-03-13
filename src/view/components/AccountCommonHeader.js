import React from 'react';
import { View } from 'react-native';
import { em, WIDTH } from 'view/common/const';
import CommonHeader from './CommonHeader';

const AccountCommonHeader = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <CommonHeader dark={false} logo={true} style={{ marginBottom: 10 * em }} rightTxt={props.rightTxt}/>
    </View>
  );
};

const styles = {
  container: {
    width: WIDTH,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
};

export default AccountCommonHeader;
