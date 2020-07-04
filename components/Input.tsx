import React, { FC } from 'react';
import { TextInput, StyleSheet } from 'react-native';

type Props = {
  style: any;
  blurOnSubmit: boolean;
  autoCapitalize: any;
  autoCorrect: boolean;
  keyboardType: any;
  maxLength: number;
  onChangeText: (inputText: string) => void;
  value: string
};

const Input: FC<Props> = (props) => {
  return <TextInput {...props} style={{ ...styles.input, ...props.style }} />;
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});

export default Input;
