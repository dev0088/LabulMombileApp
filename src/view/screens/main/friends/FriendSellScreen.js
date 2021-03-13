import React from 'react';
import { View, Image, TouchableOpacity, ScrollView } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em } from 'view/common/const';
import CommonText from '../../../components/CommonText';
import CommentText from '../../../components/CommentText';
import CommonButton from '../../../components/CommonButton';
import { Actions } from 'react-native-router-flux';

function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);
  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')';
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
  }
}

const FriendSellScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Image source={require('assets/images/sample_cover_2_big.png')} style={styles.cover} />

        <View style={styles.body}>
          <Image source={require('assets/images/sample_ic_plant.png')} style={styles.icon} />
          <CommentText style={styles.itemName} text="Arbre de vie" color={'#1E2D60'} />
          <CommentText style={styles.comment} text="Je vends Objet Entretien de la maison" color={'#1E2D60'} />
          <TitleText text={'Spray cuisine 100% Bio'} style={styles.title} />
          <TitleText text={'5,00 €'} style={styles.price} />

          <View style={{ marginLeft: 30 * em }}>
            <CommentText text={'Lorem ipsum dolor sit amet, consetetur '} style={styles.content} />
            <CommentText text={'sadipscing elitr, sed diam nonumy eirmod tempor '} style={styles.content} />
            <CommentText text={'invidunt ut labore et dolore magna aliquyam erat, '} style={styles.content} />
            <View style={styles.contentBox}>
              <CommentText text={'ssed diam voluptua. At vero eos… '} style={styles.content} />
              <CommentText text={'Continuer à lire'} color={'#40CDDE'} style={styles.content} />
            </View>
          </View>
          <CommonButton style={styles.quizBtn} text="Poser une question" />
          <CommonButton style={styles.inviteBtn} text="Inviter à participer" />
          <View style={{ height: 130 * em }} />
        </View>
      </ScrollView>
      <TouchableOpacity onPress={() => Actions.pop()} style={styles.backBtnView}>
        <Image style={styles.backBtn} source={require('assets/images/btn_back_wrap.png')} />
      </TouchableOpacity>
      <View style={styles.btnBox}>
        <CommonButton text={'Je suis intéresse'} style={styles.partBtn} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  backBtnView: {
    zIndex: 1,
    width: 44 * em,
    height: 44 * em,
    position: 'absolute',
    left: 15 * em,
    top: 27 * em,
  },
  backBtn: { width: 44 * em, height: 44 * em, resizeMode: 'contain', zIndex: 1 },
  cover: {
    width: '100%',
    height: 312 * em,
  },
  body: {
    marginTop: -41 * em,
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    width: '100%',
  },
  icon: {
    width: 61 * em,
    height: 61 * em,
    marginTop: -30.5 * em,
    alignSelf: 'center',
  },
  itemName: {
    marginTop: 5 * em,
    height: 22 * em,
    fontSize: 18 * em,
    lineHeight: 23 * em,
    textAlign: 'left',
    textAlignVertical: 'center',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  avatarBox: { width: 42 * em, flexDirection: 'row' },
  avatar: { width: 35.82 * em, height: 35.82 * em },
  badge: {
    backgroundColor: '#FFF4D9',
    borderRadius: 20 * em,
    width: 21 * em,
    height: 21 * em,
    marginLeft: -14.82 * em,
    alignSelf: 'flex-end',
    borderWidth: 2 * em,
    borderColor: '#ffffff',
  },
  comment: { lineHeight: 15 * em, fontSize: 13 * em, textAlign: 'left', marginLeft: 30 * em, marginTop: 21 * em },
  title: {
    height: 28 * em,
    lineHeight: 30 * em,
    fontSize: 24 * em,
    textAlign: 'left',
    marginLeft: 30 * em,
    marginTop: 5 * em,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 18 * em,
    marginLeft: 30 * em,
    lineHeight: 21 * em,
    height: 21 * em,
    textAlign: 'left',
    textAlignVertical: 'center',
  },
  contentBox: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  content: { lineHeight: 25 * em, textAlign: 'left', marginTop: 3 * em },
  quizBtn: { color: '#41D0E2', marginLeft: 30 * em, marginTop: 25 * em, backgroundColor: hexToRGB('#41D0E2', 0.2) },
  inviteBtn: { marginLeft: 30 * em, marginTop: 15 * em, backgroundColor: 'transparent', color: '#41D0E2' },

  btnBox: {
    paddingLeft: 26 * em,
    paddingRight: 26 * em,
    paddingTop: 15 * em,
    paddingBottom: 22 * em,
  },
};

export default FriendSellScreen;
