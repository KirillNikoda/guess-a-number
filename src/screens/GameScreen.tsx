import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

const generateRandomBetween = (
  min: number,
  max: number,
  exclude: number
): number => {
  min = Math.ceil(min);
  max = Math.floor(max);

  const generatedRandomNum = Math.floor(Math.random() * (max - min)) - min;

  if (generatedRandomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }

  return generatedRandomNum;
};

type Props = {
  userChoice: number;
};

export const GameScreen = ({ userChoice }: Props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );
};

const styles = StyleSheet.create({});
