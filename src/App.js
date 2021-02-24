import React, { useEffect } from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { RootSiblingParent } from 'react-native-root-siblings';
import RootRoutes from './routes';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2500);
  }, []);

  return (
    <RootSiblingParent>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <RootRoutes />
        </View>
      </SafeAreaView>
    </RootSiblingParent>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
});

export default App;
