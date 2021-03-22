import React from 'react';
import { View, Image } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, WIDTH, mabulColors } from 'view/common/const';
import CommentText from 'view/components/CommentText';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from 'view/components/MabulNextButton';
import CommonListItem from 'view/components/CommonListItem';
import CommonCircularButton from 'view/components/CommonCircularButton';
import CommonCheckBox from 'view/components/CommonCheckBox';
import Switch from 'view/components/Switch';

const MabulCommonDateSettingScreen = (props) => {
  const conceptColor = mabulColors[props.mabulService];
  var iconDate = (
    <Image style={[styles.iconDate, { tintColor: conceptColor }]} source={require('assets/images/ic_date.png')} />
  );
  var iconLocation = (
    <Image
      style={[styles.iconLocation, { tintColor: conceptColor }]}
      source={require('assets/images/ic_location_green.png')}
    />
  );
  var iconAddress = (
    <Image
      style={[styles.iconAddress, { tintColor: conceptColor }]}
      source={require('assets/images/ic_location_green.png')}
    />
  );
  var switchView = (
    <Switch
      switchWidth={50 * em}
      switchHeight={28 * em}
      switchdirection="rtl"
      switchBorderColor="#ffffff"
      switchBackgroundColor="#40CDDE"
      btnBackgroundColor="#FFFFFF"
      initialValue={2}
      value={1}
    />
  );
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'Quand ?'} style={styles.title} />
          <CommentText text="Choisis une date si nécessaire" style={styles.comment} />
          <CommonListItem
            icon={iconDate}
            style={styles.listItem}
            title="Date et heure de début"
            subTitle="20 janvier 2021 · 14h00"
            subTitleStyle={styles.listComment}
            titleStyle={styles.listCaption}
          />
          <View style={styles.line} />
          <CommentText style={styles.addDateText} text="+ Date et heure de fin" color={conceptColor} />
          <CommonListItem title="Pas de date" rightView={switchView} />
          <TitleText text={'Lieu'} style={styles.title} />
          <CommentText text="Choisis un adresse si besoin" style={styles.comment} />
          <CommonListItem
            icon={iconLocation}
            style={styles.listItem}
            title="Rue, adresse, ville"
            titleStyle={[styles.listCaption, { fontSize: 16 * em, lineHeight: 18 * em, color: '#6A8596' }]}
          />
          <View style={[styles.line, { marginTop: 13 * em }]} />
          <CommonListItem
            style={styles.listAddLocation}
            titleStyle={[styles.listaddLocationTitle, { color: conceptColor }]}
            icon={iconAddress}
            title="Utiliser ma position"
          />
        </View>
        <MabulNextButton
          color={conceptColor}
          style={styles.nextBtn}
          onPress={() => {
            if (props.mabulService === 'give') {
              Actions.mabulCommonShare({ mabulService: props.mabulService });
            } else {
              if (props.mabulService === 'sell') {
                Actions.mabulCommonShare({ mabulService: props.mabulService });
              } else {
                Actions.mabulCommonParticipate({ mabulService: props.mabulService });
              }
            }
          }}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '10.3%',
  },
  body: {
    flex: 1,
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
  },
  comment: { textAlign: 'left', lineHeight: 20 * em, height: 16 * em, textAlignVertical: 'center', marginTop: 10 * em },

  iconDate: { width: 19 * em, height: 20 * em, marginRight: 15 * em, marginTop: 9 * em },
  iconLocation: { width: 21 * em, height: 30 * em, marginRight: 15 * em },
  iconAddress: { width: 16 * em, height: 19 * em, marginRight: 10 * em },
  listaddLocationTitle: { fontSize: 14 * em, lineHeight: 16 * em },
  listCaption: { color: '#A0AEB8', fontSize: 12 * em, lineHeight: 14 * em },
  listComment: { fontSize: 16 * em, lineHeight: 18 * em, color: '#1E2D60' },
  listAddLocation: { marginLeft: 37 * em, marginTop: 15 * em },
  line: { backgroundColor: '#BFCDDB', height: 1 * em, marginLeft: 36 * em, marginTop: 25 * em },
  addDateText: {
    marginTop: 10 * em,
    textAlign: 'left',
    marginLeft: 36 * em,
  },
  nextBtn: {
    alignSelf: 'flex-end',
    // marginRight: 30 * em,
    marginBottom: 30 * em,
  },
};

export default MabulCommonDateSettingScreen;
