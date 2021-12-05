import React, { useEffect, useRef, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Card } from '../components/Card';
import { MainButton } from '../components/MainButton';
import { NumberContainer } from '../components/NumberContainer';
import { TitleText } from '../components/TitleText';
import { Direction } from '../types/enums/Direction';
import { BodyText } from '../components/BodyText';

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
  const initialGuess = generateRandomBetween(1, 100, userChoice);

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  const [pastGuesses, setPastGuesses] = useState<number[]>([initialGuess]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const makeAGuess = (direction: Direction) => {
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
      currentLow.current = currentGuess + 1;
    }

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    setPastGuesses((previousPastGuesses) => [
      nextNumber,
      ...previousPastGuesses,
    ]);
  };

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  return (
    <View style={styles.screen}>
      <TitleText>Opponent's Guess</TitleText>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton onPress={makeAGuess.bind(null, Direction.Lower)}>
          <Ionicons name='md-remove' size={24} color='white' />
        </MainButton>
        <MainButton onPress={makeAGuess.bind(null, Direction.Greater)}>
          <Ionicons name='md-add' size={24} color='white' />
        </MainButton>
      </Card>
      <View style={styles.guessesList}>
        <ScrollView>
          {pastGuesses.map((guess) => (
            <View style={styles.guessesListItem} key={guess}>
              <BodyText>{guess}</BodyText>
            </View>
          ))}
        </ScrollView>
      </View>
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
    width: 400,
    maxWidth: '90%',
  },
  guessesListContainer: {
    width: '80%',
    flex: 1,
  },
  guessesList: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  guessesListItem: {
    borderColor: '#ccc',
    padding: 15,
    marginVertical: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
