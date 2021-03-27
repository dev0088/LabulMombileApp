import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { em } from 'view/common/const';
import ProfileInformationListItem from 'view/components/adapter/ProfileInformationListItem';
import ProfileCommonHeader from 'view/components/header/ProfileCommonHeader';
import ProfileCommonModal from 'view/components/other/ProfileCommonModal';
import CommonButton from 'view/components/button/CommonButton';
import ProfileCommonAvatar from 'view/components/view/ProfileCommonAvatar';
import CommentText from 'view/components/text/CommentText';
import { Actions } from 'react-native-router-flux';

const EditProfileScreen = (props) => {
  const [inputItemKey, setInputItemKey] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [userProfile, setUserProfileOnChanged] = useState(props.userProfile);
  console.log(userProfile.availability);
  return (
    <View>
      <ScrollView style={styles.container}>
        <ProfileCommonHeader
          title="Modifier mon profil"
          onCancel={() => Actions.pop()}
          onFinish={() => Actions.profileOverview({ userProfile: userProfile })}
        />
        <View style={styles.listItem}>
          <ProfileCommonAvatar
            initialSize={36 * em}
            fullName="Mathieu Torin"
            style={styles.avatar}
            icon={userProfile.avatar}
          />
          <CommentText text="Changer ma photo de profil" style={styles.addPhotoBtn} color="#40CDDE" />
        </View>
        <ProfileInformationListItem
          caption={'Mon nom'}
          value={userProfile.fullName}
          style={styles.listItem}
          onPress={() => {
            setInputItemKey(5);
            setModalVisible(!modalVisible);
          }}
        />
        <ProfileInformationListItem
          caption={'Ma disponibilité'}
          placeholder={!userProfile.availability ? true : false}
          value={userProfile.availability || 'Ajoute ta disponiblité'}
          style={styles.listItem}
          onPress={() => {
            setInputItemKey(6);
            setModalVisible(!modalVisible);
          }}
        />
        <ProfileInformationListItem
          caption={'Ma présentation'}
          placeholder={!userProfile.presentation ? true : false}
          value={
            userProfile.presentation ||
            'Salut ! Je suis … Présente toi ici. Ce texte sera affiché pour vous invitations et apparaitra sur ta page profil. Soit court, avent et efficace. Vivons ensemble !'
          }
          commentText={
            userProfile.presentation === '' ? null : 'Les 100 premiers caractères feront office de ta présentation.'
          }
          style={styles.listItem}
          onPress={() => {
            setInputItemKey(7);
            setModalVisible(!modalVisible);
          }}
        />
        <ProfileInformationListItem
          caption={'Mes atouts'}
          placeholder
          value={'Sélectionne les compétences où tu es plus l’aise'}
          style={styles.listItem}
          options={userProfile.specs}
          onPress={() => {
            setInputItemKey(8);
            setModalVisible(!modalVisible);
          }}
        />
        <CommonButton
          text={'Supprimer mon compte'}
          textStyle={{ color: '#F9547B' }}
          style={styles.deleteBtn}
          onPress={() => Actions.main()}
        />
      </ScrollView>
      <ProfileCommonModal
        visible={modalVisible}
        itemKey={inputItemKey}
        onChange={(val) => setUserProfileOnChanged(val)}
        onPress={() => {
          setModalVisible(false);
        }}
      />
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#F0F5F7',
  },
  itemTitle: {
    height: 18 * em,
    lineHeight: 18 * em,
    marginLeft: 30 * em,
    marginTop: 25 * em,
  },
  listItem: {
    width: '100%',
    marginTop: 10 * em,
    paddingVertical: 25 * em,
    paddingHorizontal: 30 * em,
    backgroundColor: '#ffffff',
  },
  avatar: { width: 92 * em, height: 92 * em, marginTop: 25 * em, marginBottom: 10 * em, alignSelf: 'center' },
  addPhotoBtn: { marginBottom: 25 * em, lineHeight: 21 * em },
  deleteBtn: {
    marginTop: 25 * em,
    marginBottom: 25 * em,
    lineHeight: 19 * em,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
};

export default EditProfileScreen;
