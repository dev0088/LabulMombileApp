import React from 'react';
import { Text, View, Image } from 'react-native';
import { em } from 'view/common/const';
import { TouchableOpacity } from 'react-native';

const CircularButton = (props) => {
  let image = require('assets/images/btn_mabul_organize.png');
  let text = "J'organisé";
  if (props.type === 'sell') {
    image = require('assets/images/btn_mabul_sell.png');
    text = 'Je vends';
  } else if (props.type === 'need') {
    image = require('assets/images/btn_mabul_need.png');
    text = "J'ai besoin";
  } else if (props.type === 'search') {
    image = require('assets/images/btn_mabul_search.png');
    text = 'Je cherche';
  } else if (props.type === 'give') {
    image = require('assets/images/btn_mabul_give.png');
    text = 'Je donne';
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.buttonImage} />
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = {
  container: { flexDirection: 'column', alignItems: 'center', justifyContent: 'center' },
  buttonText: {
    fontSize: 13 * em,
    color: '#FFFFFF',
    marginTop: 4 * em,
  },
  buttonImage: { width: 50 * em, height: 50 * em },
};

export default CircularButton;
