import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import { em, WIDTH, HEIGHT } from 'view/common/const';
import CommonHeader from 'view/components/CommonHeader';
import TitleText from 'view/components/TitleText';
import CommentText from 'view/components/CommentText';
import Switch from 'view/components/Switch';
import CommonListItem from 'view/components/CommonListItem';

const MySettingScreen = () => {
  return (
    <View style={styles.container}>
      <CommonHeader dark={true} style={styles.header} />
      <View style={styles.line} />
      <View style={styles.listItem}>
        <Image style={styles.icon} />
        <View style={styles.containerTxt}>
          <TitleText text="Localisation" style={styles.listTitle} />
          <CommentText text="Ma localisation est activé" style={styles.listComment} color={'#9093A3'} />
        </View>
        <Switch
          switchWidth={49 * em}
          switchHeight={27 * em}
          switchdirection="rtl"
          switchBorderColor="#ffffff"
          switchBackgroundColor="#40CDDE"
          btnBorderColor="red"
          btnBackgroundColor="#FFFFFF"
          initialValue={1}
          style={styles.switch}
        />
      </View>
      <View style={styles.line} />
      {/* <CommonListItem
        icon={<Image style={styles.icon} />}
        title="Notifications"
        subTitle="Activez la réception de notifications"
      /> */}
      <View style={styles.listItem}>
        <Image style={styles.icon} />
        <View style={styles.containerTxt}>
          <TitleText text="Notifications" style={styles.listTitle} />
          <CommentText text="Activez la réception de notifications" style={styles.listComment} color={'#9093A3'} />
        </View>
        <Switch
          switchWidth={49 * em}
          switchHeight={27 * em}
          switchdirection="rtl"
          switchBorderColor="#ffffff"
          switchBackgroundColor="#40CDDE"
          btnBorderColor="red"
          btnBackgroundColor="#FFFFFF"
          initialValue={2}
          style={[styles.switch, { marginTop: 9 * em }]}
          value={1}
        />
      </View>
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginTop: 9.5 * em,
    marginBottom: 10 * em,
  },
  line: {
    height: 10 * em,
    backgroundColor: '#F0F5F7',
  },
  listItem: {
    marginLeft: 30 * em,
    marginRight: 30 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: 45 * em,
    marginTop: 25 * em,
    marginBottom: 25 * em,
  },
  icon: {
    width: 39 * em,
    height: 39 * em,
  },
  containerTxt: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  listTitle: {
    fontSize: 18 * em,
    lineHeight: 23 * em,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  listComment: {
    lineHeight: 16 * em,
    textAlign: 'left',
    width: 170 * em,
  },
  switch: {
    marginTop: 6 * em,
  },
};

export default MySettingScreen;
