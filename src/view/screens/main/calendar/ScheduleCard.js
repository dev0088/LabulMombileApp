import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';
import CommentText from 'view/components/text/CommentText';
import SmallText from 'view/components/text/SmallText';
import TinyText from 'view/components/text/TinyText';

const renderService = (data, onPressSee) => {
  if (data.service == null) {
    return <View style={styles.separator} />;
  }
  return (
    <View style={styles.serviceContainer}>
      <Image source={data.service.user.photo} style={{ width: 32 * em, height: 32 * em }} />
      <View style={styles.serviceSubContainer}>
        <SmallText text={data.service.user.name} />
        <TinyText text={data.service.title} style={styles.smallTopPadding} />
        <View style={styles.serviceInfoContainer}>
          <View>
            <TinyText text={data.service.date} style={styles.largeTopPadding} />
            <SmallText text={data.service.organName} style={styles.smallTopPadding} />
          </View>
          <TouchableOpacity onPress={onPressSee}>
            <View style={styles.colReverse}>
              <TinyText text="Voir>" color="#40CDDE" style={styles.largeTopPadding} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ScheduleCard = (props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <CommentText text={data.time < 10 ? '0' + data.time + 'h' : data.time + 'h'} />
      {renderService(data, props.onPressSee)}
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    marginVertical: 20 * em,
    paddingHorizontal: 20 * em,
  },
  serviceContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    padding: 12 * em,
    borderRadius: 16 * em,
    marginLeft: 10 * em,
  },
  serviceInfoContainer: { flex: 1, flexDirection: 'row', justifyContent: 'space-between' },
  colReverse: { flexDirection: 'column-reverse' },
  smallTopPadding: { marginTop: 4 * em },
  largeTopPadding: { marginTop: 24 * em },
  serviceSubContainer: { flex: 1, paddingLeft: 10 * em },
  itemMargin: { marginLeft: 10 * em },
  separator: { flex: 1, height: em, backgroundColor: '#A0A4B7', alignSelf: 'center', marginLeft: 10 * em },
};

export default ScheduleCard;
