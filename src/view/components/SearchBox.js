import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { em } from 'view/common/const';

const SearchBox = (props) => {
  const [onFocus, setOnFocus] = useState(false);

  if (onFocus) {
    return (
      <View style={[styles.containerFocusOn, props.style,{paddingTop:0}]}>
        <View>
          <Text style={styles.commentTextFocusOn}>{props.comment}</Text>
        </View>
        <View style={styles.containerBottom}>
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => {
              props.onChangeText(text);
            }}
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
          />
          <TouchableOpacity>
            <Image style={styles.imgBtnDelete} source={require('assets/images/ic_close.png')} />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View style={[styles.containerFocusOff, props.style]}>
        <View style={styles.containerTop}>
          <Image style={styles.imgBtnSearch} source={require('assets/images/ic_close.png')} />
          <Text style={styles.commentTextFocusOff}>Rechercher un contact</Text>
        </View>
        <View>
          <TextInput onFocus={() => setOnFocus(true)} onBlur={() => setOnFocus(false)} />
        </View>
      </View>
    );
  }
};

export default SearchBox;
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
    borderBottomColor: '#BFCDDB',
    height: 52 * em,
    paddingTop: 8 * em,
    borderBottomWidth: 1 * em,
  },
  commentTextFocusOn: {
    fontSize: 12 * em,
    color: '#A0AEB8',
  },
  commentTextFocusOff: {
    fontSize: 16 * em,
    color: '#A0AEB8',
  },
  containerTop: {
    flexDirection: 'row',
    alignItems: 'center',
  },
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
  imgBtnSearch: {
    width: 20 * em,
    height: 20 * em,
    marginRight: 15 * em,
  },
};
