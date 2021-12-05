import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export const Card = ({ children, style }: Props) => {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    padding: 15,
    borderRadius: 12,
    shadowColor: 'black',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
  },
});
