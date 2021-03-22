import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import { em } from 'view/common/const';
import ProfileInformationListItem from 'view/components/ProfileInformationListItem';
import CommonText from 'view/components/CommonText';
import ProfileCommonHeader from 'view/components/ProfileCommonHeader';
import ProfileCommonModal from 'view/components/ProfileCommonModal';
import CommonButton from 'view/components/CommonButton';
import ProfileCommonAvatar from 'view/components/ProfileCommonAvatar';
import CommentText from 'view/components/CommentText';
import { Actions } from 'react-native-router-flux';

const EditProfileScreen = (props) => {
  const [inputItemKey, setInputItemKey] = useState(1);
  const [modalVisible, setModalVisible] = useState(false);
  const [userProfile, setUserProfileOnChanged] = useState(props.userProfile);
  console.log(userProfile)
  return (
    <View>
      <ScrollView style={styles.container}>
        <ProfileCommonHeader
          title="Modifier mon profil"
          onCancel={() => Actions.pop()}
          onFinish={() => Actions.profileOverview({ userProfile: userProfile })}
        />
        <View style={styles.listItem}>
          <ProfileCommonAvatar fullName="Mathieu Torin" style={styles.avatar} icon={userProfile.avatar} />
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
          placeholder={userProfile.availability === '' ? true : false}
          value={userProfile.availability === '' ? 'Ajoute ta disponiblité' : userProfile.availability}
          style={styles.listItem}
          onPress={() => {
            setInputItemKey(6);
            setModalVisible(!modalVisible);
          }}
        />
        <ProfileInformationListItem
          caption={'Ma présentation'}
          placeholder={userProfile.presentation === '' ? true : false}
          value={
            userProfile.presentation === ''
              ? 'Salut ! Je suis … Présente toi ici. Ce texte sera affiché pour vous invitations et apparaitra sur ta page profil. Soit court, avent et efficace. Vivons ensemble !'
              : userProfile.presentation
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
        <CommonButton text={'Supprimer mon compte'} style={styles.deleteBtn} onPress={() => Actions.main()} />
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
    color: '#F9547B',
  },
};

export default EditProfileScreen;
