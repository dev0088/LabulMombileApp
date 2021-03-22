import React, { useState } from 'react';
import { View, Image } from 'react-native';
import { em } from 'view/common/const';
import CommonText from 'view/components/CommonText';
import CommentText from 'view/components/CommentText';

const OTHERSIDE = 1;
const OURSIDE = 2;

const MessageView = ({ date, messages, side }) => {
  const alignSelf = side === OURSIDE ? 'flex-end' : 'flex-start';
  const msgView = side === OURSIDE ? styles.msgRightView : styles.msgLeftView;
  return (
    <View style={{ alignSelf: alignSelf, flexDirection: 'column-reverse', alignItems: alignSelf }}>
      <CommentText text={date} style={styles.dateTxt} />
      {messages.map((message, index) => {
        var addBorderRadius =
          side === OTHERSIDE
            ? { borderTopLeftRadius: 23 * em, borderBottomLeftRadius: 0 }
            : { borderTopRightRadius: 23 * em, borderBottomRightRadius: 0 };
        if (!index % 2) {
          addBorderRadius = { borderTopLeftRadius: 0, borderBottomLeftRadius: 23 * em };
        }
        return (
          <View style={[msgView, addBorderRadius]}>
            <CommonText text={message} color={side === OURSIDE ? '#ffffff' : '#1E2D60'} />
          </View>
        );
      })}
    </View>
  );
};

const styles = {
  msgLeftView: {
    padding: 15 * em,
    borderBottomRightRadius: 23 * em,
    borderTopRightRadius: 23 * em,
    borderBottomLeftRadius: 23 * em,
    backgroundColor: '#F0F5F7',
    alignSelf: 'baseline',
    marginRight: 40 * em,
    marginBottom: 2 * em,
  },
  msgRightView: {
    padding: 15 * em,
    borderBottomLeftRadius: 23 * em,
    borderTopRightRadius: 23 * em,
    borderTopLeftRadius: 23 * em,
    backgroundColor: '#40CDDE',
    alignSelf: 'baseline',
    marginLeft: 40 * em,
    marginBottom: 2 * em,
  },
  dateTxt: { fontSize: 12 * em, marginTop: 3 * em },
};
export default MessageView;
