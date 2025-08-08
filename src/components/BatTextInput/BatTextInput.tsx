import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';

interface BatTextInputProps{
  pass: string,
}

export function BatTextInput(props: BatTextInputProps) {
  return (
    <TextInput placeholder='pass' multiline={true} value={props.pass} style={styles.input}></TextInput>
  );
}

