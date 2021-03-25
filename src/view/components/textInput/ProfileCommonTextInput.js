import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { em } from 'view/common/const';

const ProfileCommonTextInput = (props) => {
  const [onFocus, setOnFocus] = useState(!props.onFocus);
  if (onFocus) {
    return (
      <View style={[styles.containerFocusOn, props.style]}>
        <Text style={styles.commentTextFocusOn}>{props.text}</Text>
        <TextInput
          style={styles.textInput}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          multiline={true}
          value={props.value}
          selectionColor="#40CDDE"
        />
      </View>
    );
  } else {
    return (
      <View style={[styles.containerFocusOff, props.style]}>
        <Text style={styles.commentTextFocusOff}>{props.text}</Text>
        <TextInput
          textAlignVertical="top"
          multiline={true}
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          value={props.value}
        />
      </View>
    );
  }
};

export default ProfileCommonTextInput;
const styles = {
  containerFocusOn: {
    height: 52 * em,
    borderBottomColor: '#41D0E2',
    borderBottomWidth: 2 * em,
  },
  containerFocusOff: {
    height: 52 * em,
    borderBottomColor: '#BFCDDB',
    borderBottomWidth: 1 * em,
  },
  textInput: {
    color: '#1E2D60',
    lineHeight: 18 * em,
    fontSize: 16 * em,
    textAlignVertical: 'top',
    paddingHorizontal: 0,
    flex: 1,
  },
  commentTextFocusOn: { fontSize: 12 * em, lineHeight: 14 * em, color: '#A0AEB8' },
  commentTextFocusOff: { fontSize: 16 * em, lineHeight: 18 * em, color: '#A0AEB8', marginTop: 9 * em },
};
