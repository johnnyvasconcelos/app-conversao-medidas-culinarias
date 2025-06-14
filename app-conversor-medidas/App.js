import React, { useState, useEffect, useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Dados from "./screens/Dados";
import { StyleSheet, Image, Animated, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const Stack = createNativeStackNavigator();

export default function App() {
  const [splashVisible, setSplashVisible] = useState(true);
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    setTimeout(() => {
      Animated.timing(opacity, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => setSplashVisible(false));
    }, 2000);
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {splashVisible ? (
        <Animated.View style={[styles.splashContainer, { opacity }]}>
          <Image
            source={require("./assets/images/intro.webp")}
            style={styles.image}
            resizeMode="cover"
          />
        </Animated.View>
      ) : (
        <>
          <StatusBar style="auto" />
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Dados" component={Dados} />
            </Stack.Navigator>
          </NavigationContainer>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdeed3",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  splashContainer: {
    ...StyleSheet.absoluteFillObject,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
