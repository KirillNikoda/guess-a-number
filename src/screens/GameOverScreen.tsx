import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { BodyText } from '../components/BodyText';
import { TitleText } from '../components/TitleText';

type Props = {
  guessRounds: number;
  guessedNumber: number | null;
  onStartNewGame: () => void;
};

export const GameOverScreen = ({
  guessRounds,
  guessedNumber,
  onStartNewGame,
}: Props) => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over!</TitleText>
      <BodyText>Number of rounds: {guessRounds}</BodyText>
      <BodyText>Number was: {guessedNumber}</BodyText>
      <Button title='NEW GAME' onPress={onStartNewGame} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
