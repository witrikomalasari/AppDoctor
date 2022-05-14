import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ChatItem, Header, TxtInputChat} from '../../Components';
import {colors, fonts} from '../../Constant';

export default function ChatRoom({navigation}) {
  return (
    <View style={styles.container}>
      <Header
        title="Nairobi Putri Hayza"
        type="darkHeaderProfile"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.content}>
        <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
        <ChatItem isMe />
        <ChatItem />
        <ChatItem isMe />
      </View>
      <TxtInputChat />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  chatDate: {
    fontSize: 11,
    fontFamily: fonts.primary[400],
    color: colors.text.secondary,
    marginVertical: 20,
    textAlign: 'center',
  },
});
