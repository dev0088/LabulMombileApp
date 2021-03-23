import React from 'react';
import { em, WIDTH, HEIGHT } from 'view/common/const';
import ProfileModalHeader from 'view/components/header/ProfileModalHeader';
import Modal from 'react-native-modal';
import ProfileCommonTextInput from './ProfileCommonTextInput';
import CommonText from 'view/components/text/CommonText';
import SearchBox from './SearchBox';
import CommonCheckBox from './CommonCheckBox';
import {
  Ambianceur,
  Aperitif,
  Benevolent,
  Bricologe,
  Confidence,
  Discret,
  Dishes,
  Helpful,
  GoodNeighbor,
  GoodHost,
  HandHeart,
  Hypersociable,
  Resourceful,
  WellLiving,
  SwissKnife,
} from 'assets/svg/icons';

const iconSize = { width: 34 * em, height: 34 * em };
const feedbackIcons = [
  { id: 0, name: 'Le discret/ pas intrusif', icon: Discret(iconSize) },
  { id: 1, name: 'Le pro du bricolage', icon: Bricologe(iconSize) },
  { id: 2, name: 'Le pro des p’tits plats', icon: Dishes(iconSize) },
  { id: 3, name: 'Dingue de confiance', icon: Confidence(iconSize) },
  { id: 4, name: 'Hypersociable', icon: Hypersociable(iconSize) },
  { id: 5, name: 'Bon hôte', icon: GoodHost(iconSize) },
  { id: 6, name: 'Pro des Apèros', icon: Aperitif(iconSize) },
  { id: 7, name: 'La main sur le coeur', icon: HandHeart(iconSize) },
  { id: 8, name: 'Le débrouillard', icon: Resourceful(iconSize) },
  { id: 9, name: 'Le bon vivant', icon: WellLiving(iconSize) },
  { id: 10, name: 'Le bon voisin', icon: GoodNeighbor(iconSize) },
  { id: 11, name: 'Le serviable', icon: Helpful(iconSize) },
  { id: 12, name: 'L’ambianceur', icon: Ambianceur(iconSize) },
  { id: 13, name: 'Le couteau suisse', icon: SwissKnife(iconSize) },
  { id: 14, name: 'Le bienveillant­­­', icon: Benevolent(iconSize) },
];

const insertInformations = [
  { title: 'Mon email', inputTexts: [{ commentInput: 'Mon email', value: 'mathieu@labul.com' }] },
  {
    title: 'Mon mot de passe',
    inputTexts: [
      { commentInput: 'Mot de passe actuel', value: '' },
      { commentInput: 'Nouveau mot de passe', value: '' },
      { commentInput: 'Confirmation de nouveau mot de passe', value: '' },
    ],
  },
  { title: 'Mon mobile', inputTexts: [{ commentInput: 'Mon mobile', value: '+590 6 90 874 258' }] },

  { title: 'Ma localisation', inputTexts: [{ commentInput: 'Mon dresse', value: 'ABYMES 97139 Guadeloupe' }] },

  {
    title: 'Mon nom',
    inputTexts: [
      { commentInput: 'Prénom', value: 'Mathieu' },
      { commentInput: 'Nom de famille', value: 'Torin' },
    ],
  },
  {
    title: 'Ma disponibilité',
    comment: 'Soit concis, limité à 45 caractères',
    inputTexts: [{ commentInput: '', value: 'Je suis disponible le soir et le week-end|' }],
  },
  {
    title: 'Ma présentation',
    comment: 'Les 150 premiers caractères dans les lignes plus visibles.',
    inputTexts: [
      {
        commentInput: '',
        value:
          'Salut ! Je suis … Présente toi ici. Ce texte sera affiché pour vous invitations et apparaitra sur ta page profil. Soit court, avent et efficace. Vivons ensemble !',
      },
    ],
  },
  {
    title: 'Mes atouts',
  },
];
const options = [
  { id: 0, title: 'Bricolage', checked: false },
  { id: 1, title: 'Jardinage', checked: false },
  { id: 2, title: 'Mécanique', checked: false },
  { id: 3, title: 'Ménages', checked: false },
  { id: 4, title: 'Travaux maison', checked: false },
  { id: 5, title: 'Agriculture', checked: false },
  { id: 6, title: 'Élevage', checked: false },
];

const changedUserProfile = {
  avatar: require('assets/images/tab_profile_off.png'),
  fullName: 'Mathieu Torin',
  availability: 'Je suis disponible le soir et le week-end',
  presentation:
    'En plus d’être quelqu’un de sympa je suis un grand bricoleur, je suis passionné par le bricolage et dans tout le type de petits travaux.',
  specs: ['Bricoleur', 'Jardinier'],
  circles: { families: 4, friends: 7, neighbours: 17 },
  needs: { helps: 24, donations: 6, events: 2 },
  badges: feedbackIcons,
};
const ProfileCommonModal = (props) => {
  const insertInfo = insertInformations[props.itemKey - 1];
  var modalBody =
    props.itemKey === 8 ? (
      <>
        <SearchBox style={{ marginBottom: 15 * em }} />
        {options.map((option) => {
          return <CommonCheckBox text={option.title} isChecked={options.checked} style={styles.listItem} />;
        })}
      </>
    ) : (
      <>
        {insertInfo.inputTexts.map((inpuText, index) => {
          return (
            <ProfileCommonTextInput
              style={styles.input}
              text={inpuText.commentInput}
              value={inpuText.value}
              onFocus={true}
              key={index}
            />
          );
        })}
        {insertInfo.comment && (
          <CommonText
            color={props.itemKey - 1 === 2 ? '#40CDDE' : '#A0AEB8'}
            text={insertInfo.comment}
            style={props.itemKey - 1 === 2 ? styles.forgotPsswd : styles.comment}
          />
        )}
      </>
    );
  return (
    <Modal
      isVisible={props.visible}
      backdropOpacity={0.8}
      style={styles.container}
      backdropColor={'#1E2D60'}
      swipeDirection={'up'}
      deviceWidth={WIDTH}
      deviceHeight={HEIGHT}
      onBackButtonPress={() => props.onPress()}>
      <ProfileModalHeader
        title={insertInfo.title}
        style={styles.header}
        onCancelPress={() => props.onPress()}
        onFinishPress={() => {
          props.onPress();
          props.onChange(changedUserProfile);
        }}
      />
      {modalBody}
    </Modal>
  );
};
const styles = {
  container: {
    backgroundColor: 'white',
    marginTop: 20.5 * em,
    marginRight: 0,
    marginLeft: 0,
    marginBottom: 0,
    paddingHorizontal: 30 * em,
    borderTopRightRadius: 10 * em,
    borderTopLeftRadius: 10 * em,
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: { marginBottom: 10 * em, marginTop: 27 * em },
  input: { marginTop: 25 * em, height: 62 * em },
  forgotPsswd: { lineHeight: 18 * em, marginTop: 78 * em, textAlign: 'center' },
  comment: { fontSize: 12 * em, lineHeight: 20 * em, marginTop: 15 * em },
  listItem: { paddingHorizontal: 10 * em, marginBottom: 35 * em },
};
export default ProfileCommonModal;
