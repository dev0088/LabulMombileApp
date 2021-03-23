import React from 'react';
import { View, ImageBackground, DeviceEventEmitter, Image, TouchableOpacity } from 'react-native';
import { em } from '../../../common/const';
import { Actions } from 'react-native-router-flux';
import { Animals, Bricolage, HomeCare, Interview, Workshop, Path, Return2Point } from 'assets/svg/icons';
const servicIconSize = { width: 18 * em, height: 18 * em };
const locationList = [
  {
    id: '0',
    top: 205 * em,
    left: 36 * em,
    avatar: require('assets/images/sample_user_2.png'),
    serviceIcon: Animals(servicIconSize),
    bgColor: 'rgba(56, 194, 255, 0.2)',
  },
  {
    id: '1',
    top: 183 * em,
    left: 166 * em,
    avatar: require('assets/images/sample_ic_plant.png'),
    serviceIcon: Interview(servicIconSize),
    bgColor: 'rgba(170, 135, 229, 0.2)',
  },
  {
    id: '2',
    top: 273 * em,
    left: 211 * em,
    avatar: require('assets/images/sample_user_2.png'),
    serviceIcon: Bricolage(servicIconSize),
    bgColor: 'rgba(56, 194, 255, 0.2)',
  },
  {
    id: '3',
    top: 321 * em,
    left: 149 * em,
    avatar: require('assets/images/avatar.png'),
    serviceIcon: Bricolage(servicIconSize),
    bgColor: 'rgba(56, 194, 255, 0.2)',
  },
  {
    id: '4',
    top: 396 * em,
    left: 72 * em,
    avatar: require('assets/images/sample_ic_hair.png'),
    serviceIcon: HomeCare(servicIconSize),
    bgColor: 'rgba(170, 135, 229, 0.2)',
  },
  {
    id: '5',
    top: 490 * em,
    left: 170 * em,
    avatar: require('assets/images/sample_user_2.png'),
    serviceIcon: Animals(servicIconSize),
    bgColor: 'rgba(253, 198, 65, 0.2)',
  },
];

const FriendsMenuScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.TabControlContainer} source={require('assets/images/bg_map.png')} />
      <TouchableOpacity style={styles.alertImg} onPress={() => Actions.alertCircles()}>
        <Image source={require('assets/images/ic_alert.png')} />
      </TouchableOpacity>
      <View style={{ position: 'absolute', top: 203 * em, left: 34 * em }}>
        <Path width={76 * em} height={48 * em} />
      </View>
      <Image
        style={{ position: 'absolute', top: 212 * em, left: 318 * em }}
        source={require('assets/images/img_alert.png')}
      />
      {locationList.map((location) => PositionView(location))}
      <View
        style={{
          position: 'absolute',
          top: 335 * em,
          width: 36 * em,
          height: 36 * em,
          left: 297 * em,
          borderRadius: 18 * em,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(238, 231, 250, 1)',
          borderColor: '#ffffff',
          borderWidth: 2 * em,
        }}>
        {HomeCare(servicIconSize)}
      </View>
      <View
        style={{
          position: 'absolute',
          top: 529 * em,
          width: 46 * em,
          height: 46 * em,
          left: 309 * em,
          borderRadius: 23 * em,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ffffff',
          borderColor: '#ffffff',
          borderWidth: 2 * em,
          elevation: 3,
        }}>
        {Return2Point(servicIconSize)}
      </View>
      <View
        style={{
          position: 'absolute',
          top: 463 * em,
          width: 46 * em,
          height: 46 * em,
          left: 34 * em,
          borderRadius: 23 * em,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255, 244, 217, 1)',
          borderColor: '#ffffff',
          borderWidth: 2 * em,
          elevation: 3,
        }}>
        {Workshop(servicIconSize)}
      </View>
    </View>
  );
};

const PositionView = ({ top, left, avatar, serviceIcon, bgColor, id }) => (
  <>
    <View style={{ position: 'absolute', top: top - 2 * em, left: left - 2 * em }} key={id}>
      <Path width={76 * em} height={48 * em} />
    </View>
    <View
      style={{
        position: 'absolute',
        top: top,
        left: left,
        width: 72 * em,
        height: 36 * em,
        borderRadius: 18 * em,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: bgColor,
      }}>
      <Image source={avatar} style={{ width: 36 * em, height: 36 * em }} />
      <View style={{ marginRight: 8.83 * em }}>{serviceIcon}</View>
    </View>
  </>
);
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F0F5F7',
  },
  TabControlContainer: { position: 'absolute', flex: 1, width: '100%', height: '100%', backgroundColor: '#ff0000' },
  alertImg: {
    width: 46 * em,
    height: 46 * em,
    position: 'absolute',
    resizeMode: 'contain',
    top: 463 * em,
    left: 309 * em,
  },
};

export default FriendsMenuScreen;
