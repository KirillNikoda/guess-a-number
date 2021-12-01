import React from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';

export const Input = (props: TextInputProps) => {
  console.log(props.style);
  console.log(123);
  const { style } = props;

  return (
    <TextInput {...props} style={{ ...styles.input, ...(props.style as {}) }} />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
