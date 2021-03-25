import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { em } from 'view/common/const';
import { Magnifier, CrossCircle } from 'assets/svg/icons';
import CommonText from 'view/components/text/CommonText';
const SearchBox = (props) => {
  const [onFocus, setOnFocus] = useState(false);
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
        onFocus={() => setOnFocus(true)}
        onBlur={() => setOnFocus(false)}
        placeholder={props.comment || 'Rechercher un contact'}
        onChangeText={(text) => {
          props.onChangeText(text);
        }}
        selectionColor="#40CDDE"
        style={styles.textInput}
      />
      {onFocus && <CrossCircle width={17 * em} height={17 * em} />}
    </View>
  );
};

export default SearchBox;
const styles = {
  containerFocusOff: { alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center' },
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
