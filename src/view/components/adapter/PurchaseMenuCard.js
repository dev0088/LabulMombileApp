import React from 'react';
import { View, Text } from 'react-native';
import { em } from 'view/common/const';
import TitleText from 'view/components/text/TitleText';

const PurchaseMenuCard = (props) => {
  var psStyle = {
    borderColor: '#ffffff',
    marginTop: 25 * em,
    marginBottom: 15 * em,
    bgColor: '#BFCDDB',
  };
  if (props.selected) {
    psStyle.borderColor = props.name === 'Pro' ? '#7398FD' : '#41D0E2';
    psStyle.bgColor = props.name === 'Pro' ? '#7398FD' : '#41D0E2';
    psStyle.marginTop = 35 * em;
    psStyle.marginBottom = 19 * em;
  }
  return (
    <View style={[styles.container, props.style, { borderColor: psStyle.borderColor }]}>
      <Text style={[styles.title, { backgroundColor: psStyle.bgColor }]}>{props.name}</Text>
      <TitleText text={props.price} style={styles.price} />
      <TitleText text={'par mois'} style={{ marginBottom: 17 * em, fontSize: 12 * em, lineHeight: 14 * em }} />
      <View style={[styles.containerTxt, { width: props.txtWidth }]}>
        <Text style={styles.comment}>{props.commentRadius}</Text>
        <Text style={styles.comment}>{props.comment}</Text>
      </View>
      <Text
        style={[
          styles.addTxt,
          {
            color: props.name === 'Pro' ? '#7398FD' : '#41D0E2',
            marginTop: psStyle.marginTop,
            marginBottom: psStyle.marginBottom,
          },
        ]}>
        En savoir plus
      </Text>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 18 * em,
    borderWidth: 3 * em,
    alignItems: 'center',
  },
  title: {
    backgroundColor: '#40CDDE',
    borderRadius: 17 * em,
    color: '#FFFFFF',
    paddingTop: 4 * em,
    fontSize: 18 * em,
    paddingLeft: 17 * em,
    paddingRight: 17 * em,
    paddingBottom: 4 * em,
    lineHeight: 22 * em,
    marginTop: -15 * em,
    borderWidth: 1 * em,
    borderColor: 'transparent',
  },
  price: { marginTop: 25 * em, fontSize: 25 * em, lineHeight: 30 * em },
  containerTxt: {
    width: 120 * em,
    height: 30 * em,
  },
  comment: {
    fontSize: 9 * em,
    lineHeight: 14 * em,
    textAlign: 'center',
    color: '#1E2D60',
  },
  addTxt: {
    color: '#40CDDE',
    fontSize: 12 * em,
    lineHeight: 14 * em,
  },
};

export default PurchaseMenuCard;
