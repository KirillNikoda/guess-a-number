import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Card } from '../components/Card';
import { Input } from '../components/Input';
import { colors } from '../constants/colors';

type Props = {};

export const StartGameScreen = (props: Props) => {
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>The Game Screen</Text>
      <Card style={styles.inputContainer}>
        <Text>Select a number</Text>
        <Input
          style={styles.input}
          blurOnSubmit
          autoCapitalize='none'
          autoCorrect={false}
          keyboardType='number-pad'
          maxLength={2}
        />
        <View style={styles.buttonContainer}>
          <View>
            <Button title='Reset' onPress={() => {}} color={colors.primary} />
          </View>
          <View>
            <Button title='Confirm' onPress={() => {}} color={colors.accent} />
          </View>
        </View>
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
});
