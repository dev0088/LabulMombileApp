import React from 'react';
import { View, Image, Text } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT } from 'view/common/const';
import CommonBackButton from 'view/components/CommonBackButton';
import PurchaseMenuCard from 'view/components/PurchaseMenuCard';
import { Actions } from 'react-native-router-flux';

const PremiumPurchasedScreen = (props) => {

  return (
    <View style={[styles.container, { backgroundColor: props.profileType === 'my' ? '#40CDDE' : '#7398FC' }]}>
      <CommonBackButton dark={false} style={styles.backBtn} onPress={() => Actions.main()} />
      <Image style={styles.logo} source={require('assets/images/img_logo_subscription_white.png')} />
      <View style={styles.containerTitle}>
        <TitleText text="Labul" style={styles.title} />
        <TitleText text=" Premium" style={styles.title} color={'#40CDDE'} />
      </View>
      <PurchaseMenuCard
        borderColor={'#ffffff'}
        name="Light"
        price="0,90€"
        txtWidth={252 * em}
        commentRadius="Rayon de 500m."
        comment="Idéal pour vendre juste autour de soi"
        style={{ width: 315 * em, height: 150 * em, marginTop: 65 * em }}
      />
      <Text style={styles.cancelBtn}>Annuler mon abonnement</Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,

    alignItems: 'center',
  },

  backBtn: {
    zIndex: 1,
    position: 'absolute',
    left: 15 * em,
    top: 27 * em,
  },

  logo: {
    marginTop: 54.5 * em,
    width: 230 * em,
    height: 121 * em,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 15 * em,
  },
  title: {
    fontSize: 27 * em,
    lineHeight: 30 * em,
    color: '#ffffff',
  },
  containerTitle: {
    marginBottom: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  subTitle: {
    fontSize: 13 * em,
    fontWeight: '500',
    lineHeight: 17 * em,
    marginBottom: 25 * em,
  },
  popView: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 28 * em,
    borderTopRightRadius: 28 * em,
    height: 726 * em,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 40 * em,
    marginLeft: 22.5 * em,
    marginRight: 22.5 * em,
  },
  card: {
    width: 150 * em,
    height: 207 * em,
    marginLeft: 7.5 * em,
    marginRight: 7.5 * em,
  },
  comment: {
    fontSize: 10 * em,
    lineHeight: 12 * em,
    marginTop: 10 * em,
    marginBottom: 24 * em,
    textAlign: 'center',
  },
  guideline: {
    marginLeft: 30 * em,
    marginRight: 30 * em,
    fontSize: 14 * em,
    color: '#A0AEB8',
    lineHeight: 18 * em,
  },
  purchaseBtn: {},
  modal: {
    backgroundColor: '#F9F9F9C7',
    marginTop: 192 * em,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    flex: 1,
    justifyContent: 'flex-start',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1 * em,
    alignItems: 'center',
    height: 44 * em,
    borderBottomColor: '#A4A4A6',
  },
  modalName: {
    lineHeight: 26 * em,
    fontSize: 22 * em,
    textAlign: 'left',
    marginLeft: 8 * em,
  },
  modalCancel: {
    fontSize: 17 * em,
    marginRight: 16 * em,
    lineHeight: 17 * em,
    color: '#007AFF',
  },
  modalList: {
    marginLeft: 16 * em,
    height: 39.5 * em,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderBottomWidth: 1 * em,
    borderBottomColor: '#A4A4A6',
  },
  modalListLeft: {
    width: 79 * em,
    flexDirection: 'row-reverse',
  },
  modalListRight: {
    flex: 1,
    marginLeft: 16 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalCardImage: {
    width: 40 * em,
    height: 26 * em,
    backgroundColor: 'blue',
  },
  modalArrowIcon: {
    width: 10 * em,
    height: 16 * em,
    marginTop: 6 * em,
    marginRight: 16 * em,
  },
  modalCreditCard: {
    fontSize: 12 * em,
    width: 114 * em,
    lineHeight: 14 * em,
  },
  modalTotalTxt: {
    fontSize: 12 * em,
    lineHeight: 14 * em,
    color: '#76767A',
    textAlign: 'left',
  },
  modalTotalPrice: {
    fontSize: 12 * em,
    lineHeight: 14 * em,
    color: '#000000',
    textAlign: 'right',
    marginRight: 16 * em,
  },
  cancelBtn: {
    color: '#ffffff',
    fontSize: 12 * em,
    lineHeight: 14 * em,
    marginTop: (155 / 667) * HEIGHT,
  },
};

export default PremiumPurchasedScreen;
