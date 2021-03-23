import React from 'react';
import { View, Image } from 'react-native';
import TitleText from 'view/components/text/TitleText';
import { hexToRGB, em, mabulColors } from 'view/common/const';
import CommentText from 'view/components/text/CommentText';
import MabulCommonHeader from 'view/components/header/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from 'view/components/button/MabulNextButton';
import CommonListItem from 'view/components/adapter/CommonListItem';
import { Edit, Edit1, Edit2, Edit3, Document, Document1, Document2, Document3 } from 'assets/svg/icons';

const title = {
  organize: 'Donne un titre à ton apéro',
  sell: 'Donne un titre à ta vente',
  give: 'Donne un titre à ta demande',
  need: 'Donne un titre à ta demande',
};
const MabulCommonRequestDetailScreen = (props) => {
  const conceptColor = mabulColors[props.mabulService];
  var iconEdit = Edit2(styles.icon);
  var iconDocument = Document2(styles.icon);
  if (props.mabulService === 'give') {
    iconEdit = Edit3(styles.icon);
    iconDocument = Document3(styles.icon);
  } else if (props.mabulService === 'sell') {
    iconEdit = Edit1(styles.icon);
    iconDocument = Document1(styles.icon);
  } else if (props.mabulService === 'need') {
    iconEdit = Edit(styles.icon);
    iconDocument = Document(styles.icon);
  }

  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={title[props.mabulService]} style={styles.title} />
          <CommentText
            text="Soi court et précis dans les détails"
            style={styles.comment}
            titleStyle={styles.listCaption}
          />
          <CommonListItem
            icon={iconEdit}
            style={styles.listItem}
            title="Écrit un titre court"
            titleStyle={styles.listCaption}
          />
          <View style={styles.line} />
          <CommonListItem
            icon={iconDocument}
            style={[styles.listItem, { height: 62 * em }]}
            title="Détail ta demande ici"
            subTitle="(Soit concis pour être plus efficace)"
            titleStyle={styles.listCaption}
            subTitleStyle={styles.listComment}
          />
          <View style={styles.line} />
        </View>
        <MabulNextButton
          color={hexToRGB(conceptColor, 0.5)}
          style={styles.nextBtn}
          onPress={() => {
            if (props.mabulService === 'sell') {
              Actions.mabulCommonParticipate({ mabulService: props.mabulService });
            } else {
              Actions.mabulCommonAddPhoto({ mabulService: props.mabulService });
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
    marginTop: 16 * em,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 300 * em,
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
    fontSize: 28 * em,
    fontWeight: 'bold',
  },
  comment: { textAlign: 'left', lineHeight: 20 * em, height: 16 * em, textAlignVertical: 'center', marginTop: 10 * em },
  listItem: {
    height: 43 * em,
    marginTop: 25 * em,
  },
  icon: { width: 19 * em, height: 22 * em, marginRight: 20 * em },
  listCaption: { color: '#6A8596' },
  listComment: { fontSize: 13 * em, lineHeight: 17 * em, color: '#6A8596' },
  nextBtn: {
    alignSelf: 'flex-end',
    marginBottom: 30 * em,
  },
  line: { backgroundColor: '#BFCDDB', height: 1 * em, marginLeft: 39 * em },
};

export default MabulCommonRequestDetailScreen;
