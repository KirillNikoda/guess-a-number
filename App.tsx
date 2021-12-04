import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { Header } from './src/components/Header';
import { GameScreen } from './src/screens/GameScreen';
import { StartGameScreen } from './src/screens/StartGameScreen';

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);

  const startGame = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };

  return (
    <View style={styles.screen}>
      <Header title='Guess a number Game' />
      {!userNumber && <StartGameScreen onStartGame={startGame} />}
      {userNumber && <GameScreen userChoice={userNumber} />}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
