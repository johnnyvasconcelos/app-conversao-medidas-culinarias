import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Dados from "./screens/Dados";
import { View, StyleSheet, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.main}>
      <StatusBar style="auto" />
      <View style={styles.decorator}>
        <Image
          source={require("./assets/images/hat.webp")}
          style={styles.hat}
        />
        <Image
          source={require("./assets/images/spoon.webp")}
          style={styles.spoon}
        />
        <Image
          source={require("./assets/images/tea.webp")}
          style={styles.tea}
        />
      </View>
      <View style={styles.conversor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Dados"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Dados" component={Dados} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#f0c993",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  decorator: {
    position: "absolute",
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  conversor: {
    backgroundColor: "#f8e2be",
    borderColor: "#4c2e1c",
    borderWidth: 4,
    borderRadius: 20,
    paddingHorizontal: 32,
    paddingVertical: 22,
    width: 300,
  },

  spoon: {
    position: "absolute",
    width: 55,
    height: 67,
    top: -45,
    left: 30,
  },
  hat: {
    width: 80,
    height: 83,
    position: "absolute",
    top: -70,
    right: 40,
  },
  tea: {
    width: 83,
    height: 61,
    position: "absolute",
    bottom: -25,
    right: -25,
  },
});
