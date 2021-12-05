import React from 'react';
import { StyleSheet, Text, TextStyle } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: TextStyle;
};

export const TitleText = ({ style, children }: Props) => {
  return <Text style={{ ...styles.title, ...style }}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans',
    fontSize: 18,
  },
});
