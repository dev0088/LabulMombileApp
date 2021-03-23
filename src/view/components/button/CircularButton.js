import React from 'react';
import { Text, View, Image } from 'react-native';
import { em } from 'view/common/const';
import { TouchableOpacity } from 'react-native';
import { MabulGive, MabulNeed, MabulSell, MabulOrganize } from 'assets/svg/icons';

const CircularButton = (props) => {
  let imageTag = <MabulOrganize styles={styles.buttonImage} />;
  let text = "J'organisé";
  if (props.type === 'sell') {
    imageTag = <MabulSell styles={styles.buttonImage} />;
    text = 'Je vends';
  } else if (props.type === 'need') {
    imageTag = <MabulNeed styles={styles.buttonImage} />;
    text = "J'ai besoin";
  } else if (props.type === 'give') {
    imageTag = <MabulGive styles={styles.buttonImage} />;
    text = 'Je donne';
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.container}>
        {imageTag}
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
