import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Card } from '../components/Card';
import { NumberContainer } from '../components/NumberContainer';

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

  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title='LOWER' onPress={() => {}} />
        <Button title='GREATER' onPress={() => {}} />
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
