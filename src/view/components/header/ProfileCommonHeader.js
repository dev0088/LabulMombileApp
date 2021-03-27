import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { em,hm } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';
import TitleText from 'view/components/text/TitleText';

const ProfileCommonHeader = (props) => {
  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.containerTxtBtn}>
        <TouchableOpacity onPress={() => props.onCancel()}>
          <CommonText text={'Annuler'} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.onFinish()}>
          <CommonText text={'Terminer'} color={'#40CDDE'} />
        </TouchableOpacity>
      </View>
      <TitleText text={props.title} style={styles.title} />
    </View>
  );
};

const styles = {
  container: {
    width: '100%',
    backgroundColor: '#ffffff',
  },
  containerTxtBtn: {
    width: 318 * em,
    marginLeft: 30 * em,
    marginRight: 27 * em,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15 * em,
    marginTop: 13.5 * em,
  },
  title: {
    marginLeft: 30 * em,
    lineHeight: 38 * hm,
    backgroundColor: '#ffffff',
    marginTop: 15 * em,
    marginBottom: 25 * em,
    textAlign: 'left',
  },
};

export default ProfileCommonHeader;
