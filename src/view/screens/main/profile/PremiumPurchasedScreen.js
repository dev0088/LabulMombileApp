import React from 'react';
import { View, Image, Text } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { em, HEIGHT } from 'view/common/const';
import CommonBackButton from 'view/components/button/CommonBackButton';
import PurchaseMenuCard from 'view/components/adapter/PurchaseMenuCard';
import { Actions } from 'react-native-router-flux';
import SmallText from 'view/components/text/SmallText';

const PremiumPurchasedScreen = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: props.profileType === 'my' ? '#40CDDE' : '#7398FC' }]}>
      <CommonBackButton
        dark={false}
        style={styles.backBtn}
        onPress={() =>
          Actions.main({ tabNav: props.profileType === 'my' ? 'Profile' : 'ProProfile', purchased: 'light' })
        }
      />
      <Image style={styles.logo} source={require('assets/images/img_logo_subscription_white.png')} />
      <View style={styles.containerTitle}>
        <TitleText text="Labul" style={styles.title} />
        <TitleText text=" Premium" style={styles.title} color={'#40CDDE'} />
      </View>
      <SmallText
        text="Vous êtes abonné à Labul Premium Light"
        color="#ffffff"
        style={{ fontSize: 13 * em, lineHeight: 17 * em }}
      />
      <PurchaseMenuCard
        moreBtn
        borderColor={'#ffffff'}
        name="Light"
        price="0,90€"
        txtWidth={252 * em}
        commentRadius="Rayon de 500m."
        comment="Idéal pour vendre juste autour de soi"
        style={{ width: 315 * em, height: 150 * em, marginTop: 65 * em }}
      />
      <SmallText style={styles.cancelBtn} color="#ffffff" text="Annuler mon abonnement" />
    </View>
  );
};

const styles = {
  container: { flex: 1, alignItems: 'center' },

  backBtn: { zIndex: 1, position: 'absolute', left: 15 * em, top: 27 * em },

  logo: {
    marginTop: 54.5 * em,
    width: 230 * em,
    height: 121 * em,
    resizeMode: 'contain',
    alignSelf: 'center',
    marginBottom: 15 * em,
  },
  title: { fontSize: 27 * em, lineHeight: 30 * em, color: '#ffffff' },
  containerTitle: { marginBottom: 0, flexDirection: 'row', justifyContent: 'center' },

  cancelBtn: { position: 'absolute', bottom: 24 * em },
};

export default PremiumPurchasedScreen;
