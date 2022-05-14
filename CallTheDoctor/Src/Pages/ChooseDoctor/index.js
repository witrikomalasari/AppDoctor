import React from 'react';
import {StyleSheet, View} from 'react-native';
import {DummyDoctor1} from '../../Assets';
import {Header, List} from '../../Components';

export default function ChooseDoctor({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        title="Pilih Dokter Anak"
        type="darkHeader"
        onPress={() => navigation.goBack()}
      />
      <List
        photoDoctor={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
        type="nextIcon"
        onPress={() => navigation.navigate('ChatRoom')}
      />
      <List
        photoDoctor={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
        type="nextIcon"
      />
      <List
        photoDoctor={DummyDoctor1}
        name="Alexander Jannie"
        desc="Wanita"
        type="nextIcon"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
