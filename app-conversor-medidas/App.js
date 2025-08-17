import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MobileAds, {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";
import Home from "./screens/Home";
import Dados from "./screens/Dados";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    MobileAds()
      .initialize()
      .then(() => console.log("AdMob Iniciado."));
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{ headerShown: false, tabBarStyle: { display: "none" } }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Dados" component={Dados} />
      </Tab.Navigator>
      <View style={{ alignItems: "center" }}>
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
