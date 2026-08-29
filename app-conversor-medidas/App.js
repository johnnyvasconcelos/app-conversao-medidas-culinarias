import { StyleSheet, View, Platform, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import Home from "./screens/Home";
import Dados from "./screens/Dados";
import { CustomBannerAd } from "./BannerAd";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Dados" component={Dados} />
          </Stack.Navigator>
        </NavigationContainer>

        <View style={styles.bannerContainer}>
          <CustomBannerAd />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
