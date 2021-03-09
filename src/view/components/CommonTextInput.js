import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { em } from 'view/common/const';

const CommonTextInput = (props) => {
  const [onFocus, setOnFocus] = useState(false);
  let icon = null;
  if (props.isPasswordInput) {
    icon = require('assets/images/ic_show_password.png');
  }
  if (onFocus) {
    return (
      <View style={[styles.containerFocusOn, props.style]}>
        <View>
          <Text style={styles.commentTextFocusOn}>{props.text}</Text>
        </View>
        <View style={styles.containerBottom}>
          <TextInput style={styles.textInput} onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)} />
          <TouchableOpacity>
            <Image style={styles.imgBtnDelete} source={require('assets/images/ic_close.png')} />
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
          <TouchableOpacity>
            <Image style={styles.imgBtnShowPsswd} source={icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default CommonTextInput;
const styles = {
  containerFocusOn: {
    height: 52 * em,
    flexDirection: 'column',
    borderBottomColor: '#41D0E2',
    borderBottomWidth: 2 * em,
  },
  containerBottom: {
    width: '100%',
    height: 18 * em,
    flexDirection: 'row',
    marginTop: 2 * em,
  },
  containerFocusOff: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#BFCDDB',
    borderBottomWidth: 1 * em,
  },
  commentTextFocusOn: { fontSize: 12 * em, color: '#A0AEB8' },
  commentTextFocusOff: { fontSize: 16 * em, color: '#A0AEB8', marginTop: 9 * em },
  textInput: {
    color: '#1E2D60',
    fontSize: 12 * em,
    paddingVertical: 2,
    paddingHorizontal: 0,
    flex: 1,
    selectionColor: '',
  },
  imgBtnDelete: {
    width: 17 * em,
    height: 17 * em,
  },
  imgBtnShowPsswd: {
    width: 20 * em,
    height: 17 * em,
    marginTop: 15 * em,
  },
};
