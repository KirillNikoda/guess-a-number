import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

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
      <Text>The Game is over!</Text>
      <Text>Number of rounds: {guessRounds}</Text>
      <Text>Number was: {guessedNumber}</Text>
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
