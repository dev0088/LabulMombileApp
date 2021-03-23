import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { em } from 'view/common/const';
import { Invisible, CrossCircle } from 'assets/svg/icons';
const CommonTextInput = (props) => {
  const [onFocus, setOnFocus] = useState(false);
  let icon = null;
  if (props.isPasswordInput) {
    icon = (
      <View style={{ marginTop: 15 * em }}>
        <Invisible width={20 * em} height={17 * em} />
      </View>
    );
  }
  if (onFocus) {
    return (
      <View style={[styles.containerFocusOn, props.style]}>
        <View>
          <Text style={styles.commentTextFocusOn}>{props.text}</Text>
        </View>
        <View style={styles.containerBottom}>
          <TextInput
            style={styles.textInput}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
            selectionColor="#40CDDE"
          />
          <TouchableOpacity>
            <CrossCircle width={17 * em} height={17 * em} />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[styles.containerFocusOff, props.style]}>
        <View>
          <Text style={styles.commentTextFocusOff}>{props.text}</Text>
          <TextInput onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)} />
        </View>
        <View>
          <TouchableOpacity>{icon}</TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default CommonTextInput;
const styles = {
  containerFocusOn: { flexDirection: 'column', borderBottomColor: '#41D0E2', borderBottomWidth: 2 * em },
  containerBottom: { width: '100%', height: 18 * em, flexDirection: 'row', marginTop: 2 * em },
  containerFocusOff: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#BFCDDB',
    borderBottomWidth: 1 * em,
  },
  commentTextFocusOn: { fontSize: 12 * em, color: '#A0AEB8', lineHeight: 14 * em, fontFamily: 'Lato-Regular' },
  commentTextFocusOff: { fontSize: 16 * em, color: '#A0AEB8', marginTop: 9 * em, fontFamily: 'Lato-Regular' },
  textInput: {
    color: '#1E2D60',
    fontSize: 18 * em,
    height: 28 * em,
    lineHeight: 20 * em,
    paddingVertical: 0,
    paddingHorizontal: 0,
    flex: 1,
    fontFamily: 'Lato-Regular',
  },
};
