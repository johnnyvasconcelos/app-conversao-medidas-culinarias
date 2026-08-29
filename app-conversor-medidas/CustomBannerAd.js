import { View, Text } from "react-native";

export function CustomBannerAd() {
  return (
    <View
      style={{
        width: 320,
        height: 50,
        backgroundColor: "#ddd",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: "#666" }}>
        [Espaço do Banner - AdMob Desativado na Web]
      </Text>
    </View>
  );
}
