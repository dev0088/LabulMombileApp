import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { em } from 'view/common/const';
import CommentText from './CommentText';
import NeedServiceType from 'model/service/NeedServiceType';
import ServiceType from 'model/service/ServiceType';
import SellService from '../../model/service/SellService';
import SellServiceType from '../../model/service/SellServiceType';

const ProfileCommonNeedCard = (props) => {
  const { data } = props;
  console.log(data.status);
  if (data.type === ServiceType.SELL) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.container, props.style]}>
          <Image source={data.coverImage} style={styles.cover} />
          <View style={styles.textView}>
            <CommentText text={data.slogan} style={styles.title} color={'#1E2D60'} />
            <CommentText text={data.comment} style={styles.organName} color={'#1E2D60'} />
            <View style={{ flexDirection: 'row' }}>
              <CommentText text={data.price} style={styles.organName} color={'#1E2D60'} />
              <CommentText text={data.discountPrice} style={styles.organName} color={'#1E2D60'} />
            </View>
            <CommentText text={data.discountInfo} style={styles.organName} color={'#1E2D60'} />
            {data.subType === SellServiceType.EVENT && (
              <CommentText text={'06 Fév · 14h00'} style={styles.organName} color={'#1E2D60'} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <Image source={data.coverImage} style={styles.cover} />
        <View style={styles.textView}>
          <CommentText text={'06 Fév · 14h00'} style={styles.date} color="#6A8596" />
          <CommentText text={data.title} style={styles.title} color={'#1E2D60'} />
          <CommentText text={data.organName} style={styles.organName} color={'#1E2D60'} />
          <StatusView text={data.status} style={styles.status} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = {
  container: { flexDirection: 'row' },
  cover: { width: 95 * em, height: 141 * em, borderRadius: 18 * em },
  textView: { marginLeft: 15 * em, paddingTop: 15 * em, alignItems: 'flex-start', width: 205 * em },
  date: { fontSize: 12 * em, lineHeight: 14 * em },
  title: { fontSize: 12 * em, lineHeight: 16 * em, marginTop: 10 * em },
  organName: { lineHeight: 21 * em, textAlign: 'left' },
  status: { marginTop: 15 * em },
  statusView: { fontSize: 12 * em, borderRadius: 15 * em, paddingVertical: 4 * em, paddingHorizontal: 8 * em },
};
const statuses = {
  inProgress: { title: 'En cours', color: '#40CDDE', backgroundColor: '#D9F6F9' },
  canceled: { title: 'Annulée', color: '#6A8596', backgroundColor: '#F0F5F7' },
  waiting: { title: 'En attente', color: '#FEBD71', backgroundColor: '#FFF2E2' },
  participated: { title: 'Je participe', color: '#1BD39A', backgroundColor: '#D1F6EB' },
  refused: { title: 'Réfusé', color: '#F9547B', backgroundColor: '#FEDDE4' },
};
export default ProfileCommonNeedCard;
const StatusView = (props) => {
  const status = statuses[props.text];
  return (
    <CommentText
      style={[styles.statusView, { backgroundColor: status.backgroundColor }]}
      text={status.title}
      color={status.color}
    />
  );
};
