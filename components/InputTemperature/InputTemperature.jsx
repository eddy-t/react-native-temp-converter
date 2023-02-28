import { TextInput, Text, View } from "react-native";
import { s } from "./InputTemperature.style.js";

export function InputTemperature({ defaultValue, onChangeText, unit }) {
  return (
    <View style={s.container}>
      <TextInput
        style={s.input}
        keyboardType="numeric"
        placeholder="Tappez une température"
        maxLength={4}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
      />
      <Text style={s.unit}>{unit}</Text>
    </View>
  );
}
