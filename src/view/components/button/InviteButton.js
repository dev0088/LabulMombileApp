import React, { useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';
import CommentText from 'view/components/text/CommentText';

const InviteButton = (props) => {
  const [invited, setInvited] = useState(props.invited);
  return (
    <TouchableOpacity onPress={() => setInvited(!invited)}>
      <CommentText
        style={[
          styles.buttonStyle,
          props.style,
          { backgroundColor: !invited ? '#F2F5F8' : '#40CDDE', width: !invited ? 79 * em : 68 * em },
        ]}
        text={invited ? 'Inviter' : 'Invité(e)'}
        color={!invited ? '#A0AEB8' : '#FFFFFF'}
      />
    </TouchableOpacity>
  );
};

const styles = {
  buttonStyle: { fontFamily: 'Lato-Bold', padding: 7 * em, textAlign: 'center', borderRadius: 10 * em },
};

export default InviteButton;
