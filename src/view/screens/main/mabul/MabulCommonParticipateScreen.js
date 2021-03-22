import React from 'react';
import { View, Image } from 'react-native';
import TitleText from 'view/components/TitleText';
import { em, HEIGHT, WIDTH, mabulColors } from 'view/common/const';
import CommentText from 'view/components/CommentText';
import MabulCommonHeader from 'view/components/MabulCommonHeader';
import { Actions } from 'react-native-router-flux';
import MabulNextButton from 'view/components/MabulNextButton';
import { TextInput } from 'react-native-gesture-handler';

const MabulCommonParticipateScreen = (props) => {
  const conceptColor = mabulColors[props.mabulService];
  console.log(conceptColor)
  return (
    <View style={styles.container}>
      <MabulCommonHeader style={styles.header} percent={24} isNoBackBtn={true} progressBarColor={conceptColor} />
      <View style={styles.body}>
        <View>
          <TitleText text={'Participants'} style={styles.title} />
          <CommentText text="Combien de personnes peuvent participer dans votre demande ?" style={styles.comment} />
          <TextInput style={styles.input} placeholder="0" />
        </View>
        <MabulNextButton
          color={conceptColor}
          style={styles.nextBtn}
          onPress={() => {
            if (props.mabulService === 'sell') {
              Actions.mabulCommonAddPhoto({ mabulService: props.mabulService });
            } else {
              Actions.mabulCommonShare({ mabulService: props.mabulService })

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
    paddingLeft: 30 * em,
    justifyContent: 'space-between',
  },
  title: {
    width: 315 * em,
    textAlign: 'left',
    marginTop: 35 * em,
    lineHeight: 38 * em,
  },
  comment: { width: 315 * em, textAlign: 'left', lineHeight: 20 * em, textAlignVertical: 'center', marginTop: 10 * em },
  photoZone: {
    width: 315 * em,
    height: 121 * em,
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'dashed',
    borderWidth: 2 * em,
    borderColor: '#BFCDDB',
    borderRadius: 20 * em,
    marginTop: 35 * em,
  },
  commentPhoto: {
    fontSize: 12 * em,
    lineHeight: 14 * em,
    color: '#6A8596',
  },
  icon: {
    width: 40 * em,
    height: 28 * em,
  },
  nextBtn: {
    alignSelf: 'flex-end',
    marginRight: 30 * em,
    marginBottom: 30 * em,
  },
  input: {
    fontSize: 49 * em,
    lineHeight: 27 * em,
    alignSelf: 'flex-start',
    textAlign: 'center',
    color: '#A0AEB8',
  },
};

export default MabulCommonParticipateScreen;
