import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { em, hm } from 'view/common/const';
import { Magnifier, CrossCircle } from 'assets/svg/icons';
const SearchBox = (props) => {
  const [onFocus, setOnFocus] = useState(false);
  const [value, setValue] = useState('');

  const _delete = () => {
    setValue('');
    props.onChangeText('');
  };
  const _handleText = (text) => {
    props.onChangeText(text);
    setValue(text);
  };
  return (
    <View
      style={[
        styles.containerFocusOff,
        { borderBottomWidth: onFocus ? 2 * em : 1 * em, borderBottomColor: onFocus ? '#41D0E2' : '#BFCDDB' },
        props.style,
      ]}>
      <View style={styles.imgBtnSearch}>
        <Magnifier width={20 * em} height={20 * em} />
      </View>
      <TextInput
        value={value}
        onChangeText={_handleText}
        onFocus={() => {
          setOnFocus(true);
          // props.onFocus(true);
        }}
        onBlur={() => {
          setOnFocus(false);
          // props.onFocus(true);
        }}
        placeholder={props.comment || 'Rechercher un contact'}
        selectionColor="#40CDDE"
        style={styles.textInput}
      />
      {onFocus && (
        <TouchableOpacity onPress={() => _delete()}>
          <CrossCircle width={17 * em} height={17 * em} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchBox;
const styles = {
  containerFocusOff: { alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'flex-start' },
  textInput: {
    flex: 1,
    paddingVertical: 0,
    fontSize: 16 * em,
    fontFamily: 'Lato-Regular',
    color: '#A0AEB8',
    paddingHorizontal: 0,
  },

  imgBtnSearch: { marginRight: 15 * em },
};
