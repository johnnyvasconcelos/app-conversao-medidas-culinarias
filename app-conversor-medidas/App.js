import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import Dados from "./screens/Dados";
import { StyleSheet, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import MobileAds, {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    MobileAds()
      .initialize()
      .then(() => console.log("AdMob Iniciado."));
  }, []);

  return (
    <>
      <StatusBar style="auto" />
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Dados" component={Dados} />
          </Stack.Navigator>
        </NavigationContainer>
        <View style={{ alignItems: "center" }}>
          <BannerAd
            unitId={TestIds.BANNER}
            size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
            requestOptions={{
              requestNonPersonalizedAdsOnly: true,
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
