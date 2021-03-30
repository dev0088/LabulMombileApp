import React, { useState } from 'react';
import { View } from 'react-native';
import CommonText from 'view/components/text/CommonText';
import { em } from 'view/common/const';
import { hm } from 'view/common/const';
import CheckBox from 'view/components/checkbox/CheckBox';

const CommonCheckBox = (props) => {
  const [checked, setChecked] = useState(false);
  // console.log(props)
  return (
    <View style={[styles.container, props.style]}>
      <CommonText text={props.text} style={styles.title} color="#1E2D60" />
      <CheckBox
        isChecked={checked}
        onClick={() => {
          // console.log(checked)
          // if (value) {
          //   console.log(props.index)
          //   props.onChecked(props.index);
          // }
          setChecked(!checked);
        }}
        //   // props.onChecked(checked ? props.text : null);
        // }}
        oval={props.oval}
      />
    </View>
  );
};

const styles = {
  container: {
    // backgroundColor:'red',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: { fontFamily: 'Lato-Bold', fontSize: 18 * em, lineHeight: 23 * hm, textAlign: 'left' },
};

export default CommonCheckBox;
