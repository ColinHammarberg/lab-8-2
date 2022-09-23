import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import React from "react";

export default function App() {
  const [ifBirth, set_birth] = React.useState(null);
  const [speed, set_speed] = React.useState(null);
  const [result, set_result] = React.useState(null);

  function caughtSpeeding() {
    if (ifBirth.toLowerCase() == "true") {
      speedCalculation(speed - 5);
    } else {
      speedCalculation(speed);
    }
  }
  function speedCalculation(speed) {
    if (speed <= 60) {
      set_result(0);
    } else if (speed >= 61 && speed < 81) {
      set_result(1);
    } else if (speed >= 81) {
      set_result(2);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text_style}>If Ticket?</Text>
      <TextInput
        style={styles.input_style}
        onChangeText={(ifBirth) => set_birth(ifBirth)}
        placeholder="True or False?"
      />
      <TextInput
        style={styles.input_style}
        onChangeText={(speed) => set_speed(speed)}
        placeholder="Enter Car Speed"
      />
      <Button title="Check" onPress={caughtSpeeding} />
      <Text style={styles.text_style}>Ticket: {result}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  text_style: {
    fontSize: 30,
  },
  input_style: {
    height: 40,
    width: 300,
    backgroundColor: "lightyellow",
    textAlign: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
