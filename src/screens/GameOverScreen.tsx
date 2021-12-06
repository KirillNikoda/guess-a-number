import React from 'react';
import {
  Button,
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BodyText } from '../components/BodyText';
import { MainButton } from '../components/MainButton';
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
      <MainButton onPress={onStartNewGame}>NEW GAME</MainButton>
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
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').width * 0.7,
    borderRadius: (Dimensions.get('window').width * 0.7) / 2,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
    marginVertical: Dimensions.get('window').height / 30,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
