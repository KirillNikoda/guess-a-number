import React, { useEffect, useRef, useState } from 'react';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { Card } from '../components/Card';
import { NumberContainer } from '../components/NumberContainer';
import { Direction } from '../types/enums/Direction';

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
  onGameOver: (numberOfRounds: number) => void;
};

export const GameScreen = ({ userChoice, onGameOver }: Props) => {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice)
  );

  const guessRounds = useRef(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const nextGuessHandler = (direction: Direction) => {
    if (
      (direction === Direction.Lower && currentGuess < userChoice) ||
      (direction === Direction.Greater && currentGuess > userChoice)
    ) {
      Alert.alert("Dont't lie", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ]);
      return;
    }

    if (direction === Direction.Lower) {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    guessRounds.current++;
    setCurrentGuess(nextNumber);
  };

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(guessRounds.current);
    }
  }, [currentGuess, userChoice, onGameOver]);

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button
          title='LOWER'
          onPress={nextGuessHandler.bind(null, Direction.Lower)}
        />
        <Button
          title='GREATER'
          onPress={nextGuessHandler.bind(null, Direction.Greater)}
        />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
});
