import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';
import { em } from 'view/common/const';
import { Actions } from 'react-native-router-flux';

const PopupHeader = (props) => {
  let backButtonImage = require('assets/images/btn_back.png');
  if (props.hideBack) {
    backButtonImage = null;
  }
  let icon = require('assets/images/ic_profile.png');
  if (props.icon) {
    icon = props.icon;
  }
  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        style={styles.backBtnWrapper}
        onPress={() => {
          Actions.pop();
        }}>
        <Image style={styles.backButton} source={backButtonImage} />
      </TouchableOpacity>
      <View style={styles.iconWrapper}>
        <Image style={styles.icon} source={icon} />
      </View>
      <View style={styles.backBtnWrapper} />
    </View>
  );
};

const styles = {
  container: {
    marginTop: 20 * em,
    width: '92%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backBtnWrapper: {
    width: 44 * em,
    height: 44 * em,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backButton: {
    width: 20 * em,
    height: 18 * em,
    resizeMode: 'contain',
  },
  iconWrapper: { flex: 1, alignItems: 'center', justifyContent: 'flex-end' },
  icon: {
    width: 20 * em,
    height: 25 * em,
    resizeMode: 'contain',
  },
};

export default PopupHeader;
