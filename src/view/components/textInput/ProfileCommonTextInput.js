import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { em } from 'view/common/const';
import SmallText from 'view/components/text/SmallText';

const ProfileCommonTextInput = (props) => {
  const [onFocus, setOnFocus] = useState(!props.onFocus);
  return (
    <View style={[onFocus ? styles.containerFocusOn : styles.containerFocusOff, props.style]}>
      <SmallText
        style={onFocus ? styles.commentTextFocusOn : styles.commentTextFocusOff}
        text={props.text}
        color={'#A0AEB8'}
      />
      <TextInput
        style={[styles.textInput, { marginBottom: onFocus ? 25 * em : 7 * em }]}
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        multiline={true}
        value={props.value}
        selectionColor="#40CDDE"
      />
    </View>
  );

  // if (onFocus) {
  //   return (
  //     <View style={[styles.containerFocusOn, props.style]}>
  //       <Text style={styles.commentTextFocusOn}>{props.text}</Text>
  //       <TextInput
  //         style={styles.textInput}
  //         onFocus={() => setOnFocus(true)}
  //         onBlur={() => setOnFocus(false)}
  //         multiline={true}
  //         value={props.value}
  //         selectionColor="#40CDDE"
  //       />
  //     </View>
  //   );
  // } else {
  //   return (
  //     <View style={[styles.containerFocusOff, props.style]}>
  //       <Text style={styles.commentTextFocusOff}>{props.text}</Text>
  //       <TextInput
  //         textAlignVertical="top"
  //         multiline={true}
  //         onFocus={() => setOnFocus(true)}
  //         onBlur={() => setOnFocus(false)}
  //         value={props.value} style={styles.textInput}
  //       />
  //     </View>
  //   );
  // }
};

export default ProfileCommonTextInput;
const styles = {
  containerFocusOn: {
    borderBottomColor: '#41D0E2',
    borderBottomWidth: 2 * em,
    justifyContent: 'flex-end',
  },
  containerFocusOff: { borderBottomColor: '#BFCDDB', borderBottomWidth: 1 * em, justifyContent: 'flex-end' },
  textInput: {
    fontFamily: 'Lato-Regular',
    color: '#1E2D60',
    lineHeight: 18 * em,
    fontSize: 16 * em,
    paddingHorizontal: 0,
    paddingVertical: 0,
    textAlignVertical: 'center',
  },
  commentTextFocusOn: { lineHeight: 14 * em, marginBottom: 5 * em },
  commentTextFocusOff: { fontSize: 16 * em, lineHeight: 18 * em },
};
