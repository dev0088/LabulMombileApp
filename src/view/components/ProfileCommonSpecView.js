import React from 'react';
import { Text } from 'react-native';
import { em } from 'view/common/const';

const ProfileCommonSpecView = (props) => {
  return <Text style={[styles.view, props.style]}>{props.text}</Text>;
};

const styles = {
  view: {
    fontSize: 12 * em,
    backgroundColor: '#F0F5F7',
    lineHeight: 14 * em,
    color: '#6A8596',
    paddingVertical: 5 * em,
    paddingHorizontal: 10 * em,
    textAlign: 'center',
    borderRadius: 19 * em,
    marginRight: 10 * em,
  },
};

export default ProfileCommonSpecView;
