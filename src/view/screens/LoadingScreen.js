import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { em, WIDTH } from '../common/const';
import LinearGradient from 'react-native-linear-gradient';

const LoadingScreen = (props) => {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    if (percent < 100) {
      increasePercent();
    }
  }, [percent]);

  function increasePercent() {
    setTimeout(() => {
      var newPercent = percent + 1.5;
      if (newPercent > 100) {
        newPercent = 100;
      }
      setPercent(newPercent);
    }, 40);
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{ x: 0.5, y: 0.0 }}
        end={{ x: 0.5, y: 1.0 }}
        useAngle={true}
        angle={180}
        colors={['#64E4F4', '#4BD8E9']}
        style={styles.linearGradient}>
        <View style={styles.topHalfContainer}>
          <Text>Habule Title</Text>
          <Text>Habule Logo</Text>
        </View>
        <View style={styles.bottomHalfContainer}>
          <Text>Habule Title</Text>
          <View style={styles.progressContainer}>
            <View style={[{ width: ((WIDTH - 120 * em) / 100) * percent }, styles.progressBar]} />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  },
  topHalfContainer: {
    flex: 0.5,
    flexDirection: 'column-reverse',
    alignItems: 'center',
  },
  bottomHalfContainer: {
    flex: 0.5,
    alignItems: 'center',
  },
  progressBar: {
    height: 6 * em,
    backgroundColor: '#FFFFFF',
    borderRadius: 3 * em,
  },
  progressContainer: {
    width: WIDTH - 120 * em,
    height: 6 * em,
    backgroundColor: '#A4E4F4',
    borderRadius: 3 * em,
  },
  title: {
    fontSize: 40 * em,
  },
  linearGradient: {
    flex: 1,
    width: '100%',
  },
};

export default LoadingScreen;
