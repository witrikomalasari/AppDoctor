import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILGetStarted, ILLogo} from '../../Assets';
import {CustomButton, Gap} from '../../Components';
import {colors, fonts} from '../../Constant';

export default function GetStarted({navigation}) {
  return (
    <ImageBackground source={ILGetStarted} style={styles.container}>
      <View>
        <ILLogo />
        <Text style={styles.title}>
          Konsultasi dengan dokter jadi lebih mudah & fleksibel
        </Text>
      </View>
      <View>
        <CustomButton
          type="primary"
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <CustomButton
          type="secondary"
          title="Sign In"
          onPress={() => navigation.replace('Login')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 28,
    color: colors.text.white,
    marginTop: 91,
    fontFamily: fonts.primary[600],
  },
});
