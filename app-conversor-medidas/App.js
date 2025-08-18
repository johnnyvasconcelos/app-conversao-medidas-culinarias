import { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
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

export default function App() {
  useEffect(() => {
    MobileAds()
      .initialize()
      .then(() => console.log("AdMob Iniciado."));
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Dados" component={Dados} />
        </Tab.Navigator>
      </NavigationContainer>

      <View style={styles.bannerContainer}>
        <BannerAd
          unitId={TestIds.BANNER}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bannerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});
