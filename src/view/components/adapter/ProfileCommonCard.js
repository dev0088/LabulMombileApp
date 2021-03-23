import React from 'react';
import { TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';
import CommonText from 'view/components/text/CommonText';

const ProfileCommonCard = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress} style={[styles.container, props.style]}>
      {props.icon}
      <CommonText text={props.caption} style={styles.caption} color={'#1E2D60'} />
    </TouchableOpacity>
  );
};
const styles = {
  container: {
    borderRadius: 15 * em,
    backgroundColor: '#FFFFFF',
    elevation: 1,
    alignItems: 'center',
    paddingVertical: 15 * em,
  },
  caption: {
    marginTop: 5 * em,
    textAlign: 'center',
  },
};
export default ProfileCommonCard;
