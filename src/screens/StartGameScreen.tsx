import React, { useState } from 'react';
import {
  Button,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { colors } from '../constants/colors';

type Props = {};

export const StartGameScreen = (props: Props) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [selectedNumber, setSelectedNumber] = useState(0);
  const [confirmed, setConfirmed] = useState(false);

  const numberInputHandler = (selectedNumber: string) => {
    setEnteredValue(selectedNumber.replace(/[^0-9]/g, ''));
  };

  const confirmSelectedNumber = () => {
    const parsedNumber = parseInt(enteredValue);
    if (isNaN(parsedNumber) || parsedNumber < 1 || parsedNumber > 99) {
      return;
    }

    setSelectedNumber(parsedNumber);
    setConfirmed(true);
  };

  const resetSelectedNumber = () => {
    setSelectedNumber(0);
    setConfirmed(false);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={styles.screen}>
        <Text style={styles.title}>The Game Screen</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number</Text>
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
          <Text style={styles.selectedNumber}>{selectedNumber}</Text>
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
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    textAlign: 'center',
  },
  selectedNumber: {
    marginTop: 10,
  },
});
