import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { em, HEIGHT, WIDTH } from 'view/common/const';
import CommonButton from 'view/components/CommonButton';
import CommonText from 'view/components/CommonText';
import { Actions } from 'react-native-router-flux';
import CommentText from 'view/components/CommentText';

const ActivityDialScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <Image source={require('assets/images/avatar.png')} style={styles.avatar} />
        <CommonText text="Amandine Bernard" style={styles.userName} color="#ffffff" />
        <CommentText text="Ça sonne…" style={styles.comment} />
      </View>
      <View style={styles.controlView}>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.controlBtn}>
            <Image style={styles.btnIcon} />
          </TouchableOpacity>
          <Text style={styles.btnCaption}>Mute</Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={[styles.controlBtn,{backgroundColor:'#F83D39'}]} onPress={()=>Actions.pop()}>
            <Image style={styles.btnIcon} />
          </TouchableOpacity>
          <Text style={styles.btnCaption}>Terminer</Text>
        </View>
        <View style={styles.btnView}>
          <TouchableOpacity style={styles.controlBtn}>
            <Image style={styles.btnIcon} />
          </TouchableOpacity>
          <Text style={styles.btnCaption}>Haut-parleur</Text>
        </View>
      </View>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#1F2E5F4D',
    opacity: 0.9,
    flexDirection: 'column',
    postion: 'absolute',
  },
  popup: {
    backgroundColor: '#1F2E61',
    borderBottomRightRadius: 29 * em,
    borderBottomLeftRadius: 29 * em,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10 * em,
  },
  avatar: {
    width: 97 * em,
    height: 97 * em,
    marginBottom: 15 * em,
  },
  comment: {
    marginTop: 10 * em,
    color: '#FFFFFF',
  },
  controlView: {
    height: 166 * em,
    flexDirection: 'row',
    paddingHorizontal: 20 * em,
    justifyContent: 'space-around',
  },
  controlBtn: {
    width: 68 * em,
    height: 68 * em,
    borderRadius: 34 * em,
    backgroundColor: '#FFFFFF33',
    marginBottom: 30 * em,
  },
  btnView: {
    marginTop: 30 * em,
    width: 76 * em,
    alignItems: 'center',
  },
  btnCaption: {
    fontSize: 13 * em,
    lineHeight: 20 * em,
    color: '#ffffff',
  },
};

export default ActivityDialScreen;
