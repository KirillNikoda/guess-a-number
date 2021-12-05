import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
};

export const BodyText = ({ style, children }: Props) => {
  return <Text style={{ ...styles.body, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  body: {
    fontFamily: 'open-sans',
  },
});
