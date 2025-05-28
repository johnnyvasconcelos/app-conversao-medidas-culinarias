import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";

export default function Dados() {
  return (
    <ScrollView contentContainerStyle={styles.body}>
      <Text style={styles.bodyText}>
        {/* AQUI coloca conteúdo grande pra testar */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. {"\n\n"}
        (repete esse texto várias vezes pra testar o crescimento)
      </Text>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  body: {
    padding: 10,
    backgroundColor: "#fd1d12",
    flexGrow: 1, // ESSENCIAL pro ScrollView crescer junto
  },
  bodyText: {
    fontSize: 16,
    color: "#fff",
  },
});
