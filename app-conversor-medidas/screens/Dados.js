import React from "react";
import { View, Text } from "react-native";

export default function Dados({ route }) {
  const { quantidade, ingrediente, medida } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Quantidade: {quantidade}</Text>
      <Text>Ingrediente: {ingrediente}</Text>
      <Text>Medida: {medida}</Text>
    </View>
  );
}
