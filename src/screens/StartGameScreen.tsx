import React, { useState } from 'react';
import {
  Alert,
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { BodyText } from '../components/BodyText';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { MainButton } from '../components/MainButton';
import { NumberContainer } from '../components/NumberContainer';
import { TitleText } from '../components/TitleText';
import { colors } from '../constants/colors';

type Props = {
  onStartGame: (selectedNumber: number) => void;
};

export const StartGameScreen = ({ onStartGame }: Props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const numberInputHandler = (selectedNumber: string) => {
    setEnteredValue(selectedNumber.replace(/[^0-9]/g, ''));
  };

  const confirmSelectedNumber = () => {
    const parsedNumber = parseInt(enteredValue);
    if (isNaN(parsedNumber) || parsedNumber < 1 || parsedNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be between 1 and 99.', [
        { text: 'Okay', style: 'destructive', onPress: resetSelectedNumber },
      ]);
      return;
    }

    setSelectedNumber(parsedNumber);
    setConfirmed(true);
  };

  const resetSelectedNumber = () => {
    setSelectedNumber(0);
    setEnteredValue('');
    setConfirmed(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <TitleText>The Game Screen</TitleText>
        <Card style={styles.inputContainer}>
          <BodyText>Select a number</BodyText>
          <Input
            style={styles.input}
            blurOnSubmit
            autoCapitalize='none'
            autoCorrect={false}
            keyboardType='numbers-and-punctuation'
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonContainer}>
            <Button
              title='Reset'
              onPress={resetSelectedNumber}
              color={colors.primary}
            />
            <Button
              title='Confirm'
              onPress={confirmSelectedNumber}
              color={colors.accent}
            />
          </View>
        </Card>
        {confirmed && (
          <Card style={styles.summaryContainer}>
            <BodyText>You selected</BodyText>
            <NumberContainer>{selectedNumber}</NumberContainer>
            <MainButton onPress={() => onStartGame(selectedNumber)}>
              START GAME
            </MainButton>
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    fontFamily: 'open-sans-bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: '80%',
    maxWidth: '95%',
    minWidth: 300,
    alignItems: 'center',
    marginVertical: 40,
  },
  input: {
    width: '100%',
    textAlign: 'center',
  },
  selectedNumber: {
    marginTop: 10,
  },
  summaryContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});
