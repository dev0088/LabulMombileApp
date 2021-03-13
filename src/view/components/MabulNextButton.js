import React from 'react';
import { Text, Image } from 'react-native';
import { em } from 'view/common/const';
import { TouchableOpacity } from 'react-native';

const MabulNextButton = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container,props.style, { backgroundColor: props.color }]}>
      <Text style={styles.txt}>Suivant</Text>
      <Image style={styles.arrowImg} source={require('assets/images/btn_arrow_ltr.png')} />
    </TouchableOpacity>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    borderRadius: 20 * em,
    paddingVertical: 20 * em,
    width:163*em,
    backgroundColor: '#40CDDE',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 16 * em,
    lineHeight: 19 * em,
    color: '#FFFFFF',
    textAlign: 'center',
    marginRight: 13 * em,
  },
  arrowImg: {
    width: 10 * em,
    height: 17 * em,
  },
};

export default MabulNextButton;
