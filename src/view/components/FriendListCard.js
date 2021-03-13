import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { em, WIDTH } from 'view/common/const';
import CommentText from './CommentText';
import NeedServiceType from 'model/service/NeedServiceType';
import ServiceType from 'model/service/ServiceType';
import SellService from '../../model/service/SellService';
import SellServiceType from '../../model/service/SellServiceType';

const coverImageMargin = 24 * em;
const horizontalMagin = 22 * em;
const userPhotoSize = 36 * em;
const badgeSize = 20 * em;

const getUserBadge = (type, subType) => {
  let userBadge = require('assets/images/ic_workshop.png');
  if (type === ServiceType.NEED) {
    if (subType === NeedServiceType.REPAIR) {
      userBadge = require('assets/images/ic_sample2.png');
    } else if (subType === NeedServiceType.CARPOOL) {
      userBadge = require('assets/images/ic_sample3.png');
    } else if (subType === NeedServiceType.REPAIR_DEVICE) {
      userBadge = require('assets/images/ic_sample4.png');
    } else if (subType === NeedServiceType.VEGAN_FOOD) {
      userBadge = require('assets/images/ic_sample6.png');
    }
  } else if (type === ServiceType.GIVE) {
    userBadge = require('assets/images/ic_sample_5.png');
  } else if (type === ServiceType.SELL) {
    if (subType === SellServiceType.PLANT) {
      userBadge = require('assets/images/sample_ic_plant.png');
    } else {
      userBadge = require('assets/images/sample_ic_hair.png');
    }
  }
  return userBadge;
};

const FriendListCard = (props) => {
  const { data } = props;
  const userBadge = getUserBadge(data.type, data.subType);
  if (data.type === ServiceType.SELL) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.container, props.style]}>
          <View style={styles.containerIcon}>
            <Image source={require('assets/images/img_close.png')} style={styles.closeIcon} />
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={data.coverImage} style={styles.coverImage} />
            <Image
              source={userBadge}
              style={{ position: 'absolute', width: 64 * em, height: 64 * em, bottom: -32 * em }}
            />
          </View>
          {data.date && <Text style={styles.dateTextCommon}>{data.date}</Text>}
          <View style={{marginTop: 12 * em}}>
            <CommentText text={data.title} color="#1E2D60" />
            <Text style={[styles.userDescText, styles.imageMarginLeft, {marginTop: 8 * em}]}>{data.slogan}</Text>
            <CommentText align="left" text={data.comment} color="#1E2D60" style={[styles.imageMarginLeft, {marginTop: 4 * em}]} />
            <CommentText align="left" text={data.price} color="#1E2D60" style={[styles.imageMarginLeft, {marginTop: 12 * em}]} />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <View style={styles.containerIcon}>
          <Image source={require('assets/images/img_close.png')} style={styles.closeIcon} />
        </View>
        <View>
          <Image source={data.coverImage} style={styles.coverImage} />
          {data.date && <Text style={styles.dateText}>01 Mar · 13h00</Text>}
        </View>
        <View style={styles.bottomContent}>
          <View style={{ marginLeft: coverImageMargin, width: userPhotoSize }}>
            <Image source={data.user.photo} style={{ width: userPhotoSize, height: userPhotoSize }} />
            <Image source={userBadge} style={styles.userBadge} />
          </View>
          <View style={styles.userDesc}>
            <Text style={styles.userDescText}>{data.user.name}</Text>
            {data.type === ServiceType.GIVE && <CommentText align="left" color="#1E2D60" text={data.organName} />}
            {data.type !== ServiceType.GIVE && <Text style={styles.userDescText}>{data.title}</Text>}
          </View>
        </View>
        {data.type === ServiceType.GIVE && (
          <View style={styles.locationContainer}>
            <Image
              source={require('assets/images/ic_map_annotation.png')}
              style={{ width: 24 * em, height: 24 * em, marginRight: 2 * em }}
            />
            <Text style={styles.userDescText}>{data.location}</Text>
          </View>
        )}
        {data.type !== ServiceType.GIVE && (
          <CommentText align="left" color="#1E2D60" style={styles.organText} text={data.organName} />
        )}
        {data.price && <CommentText align="left" color="#1E2D60" style={styles.priceText} text={data.price} />}
      </View>
    </TouchableOpacity>
  );
};
const styles = {
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15 * em,
    width: WIDTH - horizontalMagin * 2,
    marginHorizontal: horizontalMagin,
    minHeight: 36 * em,
    elevation: 1,
    shadowColor: 'black',
    shadowOffset: {
      width: 10,
      height: 12 * em,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2 * em,
    marginBottom: 16 * em,
    paddingBottom: 18 * em,
  },
  containerIcon: {
    flexDirection: 'row-reverse',
  },
  closeIcon: { width: 12 * em, height: 12 * em, marginTop: 12 * em, marginRight: 12 * em },
  coverImage: {
    marginTop: 14 * em,
    width: WIDTH - coverImageMargin * 2 - horizontalMagin * 2,
    marginHorizontal: coverImageMargin,
    height: 124 * em,
    borderRadius: 15 * em,
  },
  dateText: {
    position: 'absolute',
    left: coverImageMargin - 4 * em,
    bottom: -8 * em,
    paddingLeft: 3 * em,
    paddingRight: 12 * em,
    backgroundColor: '#ffffff',
    borderRadius: 8 * em,
    fontSize: 12 * em,
    color: '#6A8596',
  },
  bottomContent: { flexDirection: 'row', marginTop: 16 * em },
  userBadge: { position: 'absolute', right: -3 * em, bottom: -3 * em, width: badgeSize, height: badgeSize },
  userDesc: { flex: 1, marginHorizontal: 12 * em, justifyContent: 'space-between' },
  userDescText: { fontSize: 12 * em, color: '#1E2D60' },
  organText: { marginLeft: 72 * em, marginTop: 12 * em },
  priceText: { marginLeft: 72 * em, marginTop: 2 * em },
  locationContainer: { flexDirection: 'row', marginLeft: 72 * em, marginRight: 84 * em, marginTop: 8 * em },
  dateTextCommon: {
    fontSize: 12 * em,
    color: '#6A8596',
    marginLeft: coverImageMargin + 12 * em,
    marginTop: 8 * em,
  },
  imageMarginLeft: {
    marginLeft: coverImageMargin,
  },
};
export default FriendListCard;
