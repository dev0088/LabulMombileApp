import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { em, WIDTH } from 'view/common/const';
import CommentText from 'view/components/text/CommentText';
import ServiceType from 'model/service/ServiceType';
import { getUserBadge } from 'view/common/icons';
import CommonListItem from 'view/components/adapter/CommonListItem';
import AvatarWithBadge from 'view/components/view/AvatarWithBadge';
import { CrossGray } from 'assets/svg/icons';
const coverImageMargin = 24 * em;
const horizontalMagin = 22 * em;
const userPhotoSize = 36 * em;

const FriendListCard = (props) => {
  const { data } = props;
  const userBadge = getUserBadge(data.type, data.subType);
  if (data.type === ServiceType.SELL) {
    return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={[styles.container, props.style]}>
          <View style={styles.containerIcon}>
            <View style={styles.closeIcon}>
              <CrossGray width={12 * em} height={12 * em} />
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>
            <Image source={data.coverImage} style={styles.coverImage} />
            <Image
              source={userBadge}
              style={{ position: 'absolute', width: 64 * em, height: 64 * em, bottom: -32 * em }}
            />
          </View>
          {data.date && <Text style={styles.dateTextCommon}>{data.date}</Text>}
          <View style={{ marginTop: 12 * em }}>
            <CommentText text={data.title} color="#1E2D60" />
            <Text style={[styles.userDescText, styles.imageMarginLeft, { marginTop: 8 * em }]}>{data.slogan}</Text>
            <CommentText
              align="left"
              text={data.comment}
              color="#1E2D60"
              style={[styles.imageMarginLeft, { marginTop: 4 * em }]}
            />
            <CommentText
              align="left"
              text={data.price}
              color="#1E2D60"
              style={[styles.imageMarginLeft, { marginTop: 12 * em }]}
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[styles.container, props.style]}>
        <View style={styles.containerIcon}>
          <View style={styles.closeIcon}>
            <CrossGray width={12 * em} height={12 * em} />
          </View>
        </View>
        <View>
          <Image source={data.coverImage} style={styles.coverImage} />
          {data.date && <Text style={styles.dateText}>01 Mar · 13h00</Text>}
        </View>

        <CommonListItem
          style={styles.bottomContent}
          icon={
            <AvatarWithBadge
              avatar={data.user.photo}
              badge={userBadge}
              avatarDiameter={35 * em}
              badgeDiameter={21 * em}
              style={{ marginLeft: coverImageMargin, width: userPhotoSize, zIndex: 1, marginRight: 16 * em }}
              onPress={() => props.onAvatarPress()}
            />
          }
          title={data.user.name}
          titleStyle={{ textAlign: 'left', color: '#1E2D60', fontSize: 12 * em }}
          subTitle={data.type === ServiceType.GIVE ? data.organName : data.title}
          subTitleStyle={styles.userDescText}
        />
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
    elevation: 3,
    shadowColor: '#254D5612',
    shadowOffset: {
      width: 0,
      height: 12 * em,
    },
    shadowRadius: 25 * em,
    marginBottom: 16 * em,
    paddingBottom: 18 * em,
  },
  containerIcon: {
    flexDirection: 'row-reverse',
  },
  closeIcon: { marginTop: 12 * em, marginRight: 12 * em },
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
  bottomContent: { marginTop: 16 * em },
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
