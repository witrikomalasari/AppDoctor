import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {fonts} from '../../../Constant/Fonts';
import {colors} from '../../../Constant/Color';

export default function CustomInput({
  label,
  value,
  onChangeText,
  secureTextEntry,
  height,
  disable,
}) {
  const [border, setBorder] = useState(colors.border.primary);

  const onFocusForm = () => {
    setBorder(colors.border.secondary);
  };

  const onBlurForm = () => {
    setBorder(colors.border.primary);
  };

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onFocus={onFocusForm}
        onBlur={onBlurForm}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        style={styles.input(border, height)}
        editable={!disable}
        selectTextOnFocus={!disable}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: border => ({
    borderRadius: 10,
    borderColor: border,
    borderWidth: 1,
    padding: 12,
    color: colors.black,
    // backgroundColor: disable !== 'true' ? colors.disable : colors.black,
  }),

  label: {
    fontSize: 16,
    color: colors.text.secondary,
    marginBottom: 6,
    fontFamily: fonts.primary[600],
  },
});
