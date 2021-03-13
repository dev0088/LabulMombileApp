import React from 'react';
import { View } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, hexToRGB } from 'view/common/const';
import ProfileCommonListItem from '../../../components/ProfileCommonListItem';
import AccountCommonHeader from '../../../components/AccountCommonHeader';
import { Actions } from 'react-native-router-flux';
import CommonText from '../../../components/CommonText';

const CreateAccountMenuScreen = () => {
  return (
    <View style={styles.container}>
      <CommonText style={styles.header} text="Annuler" color="#ffffff" onPress={() => Actions.pop()} />

      <TitleText text="Qui je suis?" color={'#ffffff'} style={styles.title} />
      <View style={styles.popupView}>
        <ProfileCommonListItem
          style={styles.listItem}
          text="Professional"
          icon={require('assets/images/ic_enterprise.png')}
          iconColor={hexToRGB('#7398FD', 0.24)}
          onPress={() => Actions.createProfessionalAccount()}
        />
        <View style={styles.line} />

        <ProfileCommonListItem
          style={styles.listItem}
          text="Association"
          icon={require('assets/images/ic_association.png')}
          iconColor={hexToRGB('#7398FD', 0.24)}
          onPress={() => Actions.createAssociationAccount()}
        />
        <View style={styles.line} />

        <ProfileCommonListItem
          style={styles.listItem}
          text="Collectivité/ institutionnel"
          icon={require('assets/images/ic_institution.png')}
          iconColor={hexToRGB('#7398FD', 0.24)}
          onPress={() => Actions.createCommunityAccount()}
        />
        <View style={styles.line} />
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#7398FD',
  },
  header: {
    marginRight: 30 * em,
    marginTop: 39 * em,
    alignSelf: 'flex-end',
  },
  title: { textAlign: 'left', marginLeft: 30 * em, marginBottom: 35 * em, marginTop: 59 * em },
  popupView: {
    borderTopRightRadius: 28 * em,
    borderTopLeftRadius: 28 * em,
    backgroundColor: '#ffffff',
    flex: 1,
  },
  listItem: {
    marginLeft: 30 * em,
    marginRight: 30 * em,
    marginTop: 25 * em,
  },
  line: {
    marginLeft: 83 * em,
    marginTop: 25 * em,
    height: 1 * em,
    backgroundColor: '#F0F5F7',
  },
};

export default CreateAccountMenuScreen;
