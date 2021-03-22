import React, { useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { em, hexToRGB } from 'view/common/const';
import ProfileInformationListItem from 'view/components/ProfileInformationListItem';
import CommonText from 'view/components/CommonText';
import ProfileCommonHeader from 'view/components/ProfileCommonHeader';
import ProfileCommonModal from 'view/components/ProfileCommonModal';
import CommonButton from 'view/components/CommonButton';
import ProfileCommonAvatar from 'view/components/ProfileCommonAvatar';
import CommentText from 'view/components/CommentText';
import { Actions } from 'react-native-router-flux';
import Modal from 'react-native-modal';

const updateUserPrfile = {
  avatar: require('assets/images/avatar_curology.png'),
  cover: require('assets/images/img_curology.png'),
  name: 'Curology',
  type: 'Professional',
  publications: { tips: 3, promotions: 2, events: 1 },
  services: ['Beauté', 'Soins'],
  badges: [],
  presentation:
    'Des soins de la peau personnalisés pour les besoins uniques de votre peau. Maintenant disponible dans un ensemble avec nettoyant et hydratant!',
};
const EditNeedScreen = (props) => {
  const [userProfile, setUserProfileOnChanged] = useState(updateUserPrfile);
  return (
    <View>
      <ScrollView style={styles.container}>
        <ProfileCommonHeader title="Modifier demande" onCancel={() => Actions.pop()} onFinish={() => Actions.pop()} />
        <View style={styles.listItem}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
            <CommentText text="PHOTOS" color="#6A8596" />
            <CommentText text="3 maximum" color="#A0AEB8" />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
            <ImageBackground
              imageStyle={{ borderRadius: 15 * em }}
              source={require('assets/images/sample_cover_9.png')}
              style={styles.photo}>
              <Image style={styles.cancel} />
            </ImageBackground>
            <ImageBackground
              imageStyle={{ borderRadius: 15 * em }}
              source={require('assets/images/sample_cover_9.png')}
              style={styles.photo}>
              <Image style={styles.cancel} />
            </ImageBackground>
            <View
              imageStyle={{ borderRadius: 15 * em }}
              style={[
                styles.photo,
                {
                  borderWidth: 2 * em,
                  borderColor: '#BFCDDB',
                  borderStyle: 'dashed',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                },
              ]}>
              <Image style={styles.addPhoto} source={require('assets/images/ic_addphotos_green.png')} />
              <CommentText text="Clique ici" color="#40CDDE" />
            </View>
          </View>
        </View>
        <ProfileInformationListItem
          caption={'Type de demande'}
          value={'J’ai besoin/ coup de main'}
          style={styles.listItem}
        />
        <ProfileInformationListItem caption={'Catégorie'} value={'Bricolage/ jardinage'} style={styles.listItem} />
        <ProfileInformationListItem
          caption={'Titre'}
          value={'Récolter des figues'}
          style={styles.listItem}
          options={userProfile.specs}
        />
        <ProfileInformationListItem
          caption={'Description'}
          value={
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos…'
          }
          style={styles.listItem}
          options={userProfile.specs}
        />
        <ProfileInformationListItem
          caption={'Date'}
          value={'29 Fév · 14h00'}
          style={styles.listItem}
          options={userProfile.specs}
        />
        <ProfileInformationListItem
          caption={'Partagé avec'}
          value={'Ma famille'}
          style={styles.listItem}
          options={userProfile.specs}
        />
        <CommonButton text={'Supprimer mon compte'} style={styles.deleteBtn} onPress={() => Actions.pop()} />
      </ScrollView>
      {/* <ProfileCommonModal
        visible={modalVisible}
        itemKey={inputItemKey}
        onChange={(val) => setUserProfileOnChanged(val)}
        onPress={() => {
          setModalVisible(false);
        }}
      /> */}
    </View>
  );
};

const styles = {
  container: {
    backgroundColor: '#F0F5F7',
  },
  bgView: {
    marginTop: 10 * em,
    height: 184 * em,

    backgroundColor: hexToRGB('#40CDDE10', 0.1),
  },
  photo: {
    width: 95 * em,
    height: 95 * em,
    borderRadius: 15 * em,
    resizeMode: 'cover',
    flexDirection: 'row-reverse',
    alignItems: 'flex-end',
  },
  addPhoto: { width: 33 * em, height: 23 * em, marginBottom: 5.5 * em, backgroundColor: 'red' },
  cancel: {
    width: 26 * em,
    height: 26 * em,
    borderRadius: 13 * em,
    marginBottom: 4 * em,
    marginRight: 4 * em,
    backgroundColor: '#ffffff',
  },
  addCoverBtn: { width: 28 * em, height: 28 * em, position: 'absolute', top: 47 * em },
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
  avatar: { width: 92 * em, height: 92 * em, marginBottom: 10 * em, alignSelf: 'center', marginTop: -46 * em },
  addPhotoBtn: { marginBottom: 25 * em, lineHeight: 21 * em },
  deleteBtn: {
    marginTop: 25 * em,
    marginBottom: 25 * em,
    lineHeight: 19 * em,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    color: '#F9547B',
  },
  modalView: {
    height: 140 * em,
    width: 270 * em,
    backgroundColor: '#F8F8F8D1',
    borderRadius: 14 * em,
    alignSelf: 'center',
    alignItems: 'center',
  },
  modalTitle: { fontSize: 17 * em, lineHeight: 22 * em, marginTop: 20 * em, color: '#000000' },
  modalContent: { fontSize: 13 * em, lineHeight: 18 * em, color: '#000000', marginBottom: 16 * em },
  modalBtnBox: { flexDirection: 'row', flex: 1 },
  modalBtn: {
    borderColor: '#3F3F3F',
    borderTopWidth: 0.5 * em,
    flexGrow: 135,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBtnTxt: { color: '#007AFF', fontSize: 17 * em, lineHeight: 22 * em },
  modalLine: { backgroundColor: '#3F3F3F', width: 0.5 * em, flexGrow: 1 },
};

export default EditNeedScreen;
