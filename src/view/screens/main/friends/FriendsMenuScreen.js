import React from 'react';
import { View, ImageBackground, DeviceEventEmitter, Image, TouchableOpacity } from 'react-native';
import { em } from '../../../common/const';
import { Actions } from 'react-native-router-flux';
import { Animals, Bricolage, HomeCare, Interview, Workshop, Path, Return2Point, Alert } from 'assets/svg/icons';
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
    top: 164 * em,
    left: 181 * em,
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

      <View style={{ position: 'absolute', top: 203 * em, left: 34 * em }}>
        <Path width={76 * em} height={48 * em} />
      </View>
      <View
        style={{
          position: 'absolute',
          top: 213 * em,
          left: 309 * em,
          alignItems: 'center',
          justifyContent: 'center',
          elevation: 3,
          shadowColor: '#254D5612',
          shadowOffset: {
            width: 0,
            height: 5 * em,
          },
          shadowRadius: 9 * em,
        }}>
        <Image source={require('assets/images/img_alert.png')} />
      </View>
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
          elevation: 3,
          shadowColor: '#254D5612',
          shadowOffset: {
            width: 0,
            height: 10 * em,
          },
          shadowRadius: 12 * em,
        }}>
        {Interview(servicIconSize)}
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
          shadowColor: '#254D5612',
          shadowOffset: {
            width: 0,
            height: 10 * em,
          },
          shadowRadius: 12 * em,
        }}>
        {Return2Point(servicIconSize)}
      </View>
      <TouchableOpacity
        onPress={() => Actions.alertCircles()}
        style={{
          position: 'absolute',
          top: 463 * em,
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
          shadowColor: '#254D5612',
          shadowOffset: {
            width: 0,
            height: 10 * em,
          },
          shadowRadius: 12 * em,
        }}>
        {Alert({ width: 26.45 * em, height: 22.31 * em })}
      </TouchableOpacity>
      <Image        
        source={require('assets/images/img_navigator.png')}
        style={{ postion: 'absolute', top: 316 * em, zIndex: 0,opacity:1 }}
      />
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
          shadowColor: '#254D5612',
          shadowOffset: {
            width: 0,
            height: 10 * em,
          },
          shadowRadius: 12 * em,
        }}>
        {Workshop(servicIconSize)}
      </View>
    </View>
  );
};

const PositionView = ({ top, left, avatar, serviceIcon, bgColor, id }) => (
  <>
    <View style={{ position: 'absolute', top: top - 2 * em, left: left - 2 * em, zIndex: 1 }} key={id}>
      <Path width={76 * em} height={48 * em} />
    </View>
    <View key={id + 'also'} style={[styles.tagInView, { top: top, left: left, backgroundColor: bgColor }]}>
      <Image source={avatar} style={{ width: 36 * em, height: 36 * em }} />
      <View style={{ marginRight: 8.83 * em }}>{serviceIcon}</View>
    </View>
  </>
);
const styles = {
  container: { flex: 1, alignItems: 'center', backgroundColor: '#F0F5F7' },
  tagInView: {
    zIndex: 1,
    position: 'absolute',
    width: 72 * em,
    height: 36 * em,
    borderRadius: 18 * em,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
