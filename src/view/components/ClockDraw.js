import React from 'react';
import { View, Text, Image } from 'react-native';

const ClockDraw = (props) => {
  const { height, seconds, style } = props;
  return (
    <View style={[styles.canvas, style, { width: height * 2.33, height: height, borderRadius: height / 2 }]}>
      <Text style={[styles.secondsTxt, { fontSize: 0.5 * height, marginLeft: 0.38 * height }]}>{seconds}s</Text>
      <View
        style={{
          width: 0.79 * height,
          height: 0.79 * height,
          borderRadius: 0.79 * height/2,
          marginRight: 0.11 * height,
          backgroundColor: '#F9547B',
        }}
      />
    </View>
  );
};

const styles = {
  canvas: {
    backgroundColor: '#FEDDE4',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  secondsTxt: { color: '#F9547B', textAlign: 'left', textAlignVertical: 'center' },
};

export default ClockDraw;
