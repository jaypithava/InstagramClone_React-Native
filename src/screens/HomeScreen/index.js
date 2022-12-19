import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import React from 'react';

import Feed from '../../components/Feed';

const HomeScreen = () => {
  return (
    <SafeAreaView>
      {/* <Text style={styles.mainText}>Instagram</Text> */}
      <Feed />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainText: {
    fontWeight: '700',
    fontSize: 25,
    margin: 10,
    color: '#00000',
  },
});
export default HomeScreen;
