import React from 'react';
import { View } from 'react-native';
import { hm } from 'view/common/const';
import CommonHeader from 'view/components/header/CommonHeader';

const AccountCommonHeader = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <CommonHeader dark={false} logo style={{ marginBottom: 10 * hm }} rightTxt={props.rightTxt} />
    </View>
  );
};

const styles = {
  container: { marginTop: 27 * hm, flexDirection: 'column', justifyContent: 'flex-end' },
};

export default AccountCommonHeader;
