import React from 'react';
import {StyleSheet, View} from 'react-native';

export default function Gap({height, width}) {
  return <View style={styles.container(height, width)} />;
}

const styles = StyleSheet.create({
  container: (height, width) => ({
    height: height,
    width: width,
  }),
});
