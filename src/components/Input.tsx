import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export const Input = (props: any) => {
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
