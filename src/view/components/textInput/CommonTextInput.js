import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { em } from 'view/common/const';
import { Invisible, CrossCircle } from 'assets/svg/icons';
import SmallText from 'view/components/text/SmallText';
const CommonTextInput = (props) => {
  const [onFocus, setOnFocus] = useState(false);
  let icon = null;
  if (props.isPasswordInput) {
    icon = <Invisible width={20 * em} height={17 * em} />;
  }
  return (
    <View
      style={[
        styles.container,
        {
          paddingTop: onFocus ? 0 : 9 * em,
          borderBottomWidth: onFocus ? 2 * em : 1 * em,
          borderBottomColor: onFocus ? '#41D0E2' : '#BFCDDB',
        },
        props.style,
      ]}>
      <View style={styles.textBox}>
        <SmallText text={props.text} style={{ fontSize: onFocus ? 12 * em : 16 * em }} color="#A0AEB8" />
        <TextInput
          style={styles.textInput}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          selectionColor="#40CDDE"
        />
      </View>
      <TouchableOpacity style={{ justifyContent: 'flex-end', marginBottom: 20 * em }}>
        {onFocus ? <CrossCircle width={17 * em} height={17 * em} /> : icon}
      </TouchableOpacity>
    </View>
  );
};

export default CommonTextInput;
const styles = {
  container: { flexDirection: 'row', height: 52 * em },
  textBox: { justifyContent: 'flex-end', flex: 1 },
  textInput: {
    color: '#1E2D60',
    fontSize: 18 * em,
    lineHeight: 20 * em,
    paddingVertical: 0 * em,
    paddingHorizontal: 0,
    flex: 1,
    fontFamily: 'Lato-Regular',
  },
};
