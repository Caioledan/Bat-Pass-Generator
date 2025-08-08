import React, { useState } from "react";
import { Pressable, Text } from "react-native";
import { styles } from "./styles";
import { BatTextInput } from "../BatTextInput/BatTextInput";
import generatePass from "../../services/passwordService";
import * as clipboard from "expo-clipboard";

export function BatButton() {
  const [pass, setPass] = useState('');

  function handleGenerateButton(){
    setPass(generatePass());
  }

  function handleCopyButton(){
    clipboard.setStringAsync(pass)
  }

  return (
    <>
      <BatTextInput pass={pass}/>
      <Pressable
        onPress={handleGenerateButton}
        style={styles.button}
      >
        <Text style={styles.text}>Generate</Text>
      </Pressable>
      <Pressable
        onPress={handleCopyButton}
        style={styles.button}
      >
        <Text style={styles.text}>🦇 COPY</Text>
      </Pressable>
    </>
  );
}
