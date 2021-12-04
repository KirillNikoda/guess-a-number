import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';

import { Header } from './src/components/Header';
import { GameOverScreen } from './src/screens/GameOverScreen';
import { GameScreen } from './src/screens/GameScreen';
import { StartGameScreen } from './src/screens/StartGameScreen';

const fetchFonts = async () => {
  await Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(e) => console.log('error while loading fonts', e)}
      />
    );
  }

  const startNewGame = () => {
    setGuessRounds(0);
    setUserNumber(null);
  };

  const startGame = (selectedNumber: number) => {
    setUserNumber(selectedNumber);
  };

  const gameOverHandler = (numberOfRounds: number) => {
    setGuessRounds(numberOfRounds);
  };

  let content = <StartGameScreen onStartGame={startGame} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        guessRounds={guessRounds}
        guessedNumber={userNumber}
        onStartNewGame={startNewGame}
      />
    );
  }

  return (
    <View style={styles.screen}>
      <Header title='Guess a number Game' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
