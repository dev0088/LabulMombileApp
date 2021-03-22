import React from 'react';
import { View, Image } from 'react-native';
import TitleText from 'view/components/TitleText';
import { hexToRGB, em, HEIGHT, WIDTH, mabulColors } from 'view/common/const';
import CommentText from 'view/components/CommentText';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
import MabulCommonListItem from 'view/components/MabulCommonListItem';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from 'view/components/MabulNextButton';
import CommonListItem from 'view/components/CommonListItem';

const title = {
  organize: 'Donne un titre à ton apéro',
  sell: 'Donne un titre à ta vente',
  give: 'Donne un titre à ta demande',
  need: 'Donne un titre à ta demande',
};
const MabulCommonRequestDetailScreen = (props) => {
  const conceptColor = mabulColors[props.mabulService];
  var iconEdit = (
    <Image style={[styles.icon, { tintColor: conceptColor }]} source={require('assets/images/ic_edit.png')} />
  );
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
            icon={iconEdit}
            style={[styles.listItem, { height: 62 * em }]}
            title="Détail ta demande ici"
            subTitle="(Soit concis pour être plus efficace)"
            titleStyle={styles.listCaption}
            subTitleStyle={styles.listComment}
          />
          <View style={styles.line} />
        </View>
        <MabulNextButton
          color={hexToRGB(conceptColor,0.5)}
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
