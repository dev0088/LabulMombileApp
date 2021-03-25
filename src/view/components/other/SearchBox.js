import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { em } from 'view/common/const';
import { Magnifier, CrossCircle } from 'assets/svg/icons';
import CommonText from 'view/components/text/CommonText';
const SearchBox = (props) => {
  const [onFocus, setOnFocus] = useState(false);

  if (onFocus) {
    return (
      <View style={[styles.containerFocusOn, props.style]}>
        <View style={styles.containerTop}>
          <View style={styles.imgBtnSearch}>
            <Magnifier width={20 * em} height={20 * em} />
          </View>
          <TextInput
            onFocus={() => setOnFocus(true)}
            onBlur={() => setOnFocus(false)}
            style={styles.textInput}
            onChangeText={(text) => {
              props.onChangeText(text);
            }}
            selectionColor="#40CDDE"
          />
          <CrossCircle width={17 * em} height={17 * em} />
        </View>
      </View>
    );
  } else {
    return (
      <View style={[styles.containerFocusOff, props.style]}>
        <View style={styles.containerTop}>
          <View style={styles.imgBtnSearch}>
            <Magnifier width={20 * em} height={20 * em} />
          </View>
          <CommonText color="#A0AEB8" text="Rechercher un contact" />
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
  containerFocusOn: { flexDirection: 'column', borderBottomColor: '#41D0E2', borderBottomWidth: 2 * em },
  containerFocusOff: { borderBottomColor: '#BFCDDB', borderBottomWidth: 1 * em, justifyContent: 'flex-start' },
  containerTop: { flexDirection: 'row', alignItems: 'center' },
  textInput: {
    color: '#A0AEB8',
    fontSize: 16 * em,
    paddingVertical: 2,
    paddingHorizontal: 0,
    flex: 1,
    selectionColor: '',
    fontFamily: 'Lato-Regular',
  },

  imgBtnSearch: { marginRight: 15 * em },
};
