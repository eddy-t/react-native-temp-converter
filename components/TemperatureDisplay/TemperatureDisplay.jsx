import { s } from "./TemperatureDisplay.style";
import { Text } from "react-native";
export function TemperatureDisplay({ value, unit }) {
  return (
    <Text style={s.text}>
      {value} {unit}
    </Text>
  );
}
