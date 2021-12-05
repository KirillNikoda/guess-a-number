import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
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
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../../assets/success.png')}
        />
      </View>
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
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
