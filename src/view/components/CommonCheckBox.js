import React, { useState } from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em } from 'view/common/const';
import { hm } from '../common/const';
import CheckBox from 'view/components/CheckBox';

const CommonCheckBox = (props) => {
  const [checked, setChecked] = useState(false);
  return (
    <View style={[styles.container, props.style]}>
      <TitleText text={props.text} style={styles.title} />
      <CheckBox isChecked={checked} onClick={() => setChecked(!checked)} shape={props.shape} />
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 18 * em,
    lineHeight: 23 * hm,
    textAlign: 'left',
  },
};

export default CommonCheckBox;
