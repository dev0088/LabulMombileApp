import React from 'react';
import { em } from 'view/common/const';
import SmallText from 'view/components/text/SmallText';

const ProfileCommonSpecView = (props) => {
  return <SmallText style={[styles.view, props.style]} text={props.text} color="#6A8596" />;
};

const styles = {
  view: {
    fontFamily: 'Lato-Italic',
    backgroundColor: '#F0F5F7',
    lineHeight: 14 * em,
    paddingVertical: 5 * em,
    paddingHorizontal: 10 * em,
    textAlign: 'center',
    borderRadius: 19 * em,
    marginRight: 10 * em,
  },
};

export default ProfileCommonSpecView;
