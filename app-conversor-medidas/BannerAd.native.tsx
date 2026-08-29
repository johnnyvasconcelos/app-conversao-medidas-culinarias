import MobileAds, {
  BannerAd,
  BannerAdSize,
} from "react-native-google-mobile-ads";
import { useEffect, useState } from "react";

export function CustomBannerAd() {
  const [adsInitialized, setAdsInitialized] = useState(false);

  useEffect(() => {
    MobileAds()
      .initialize()
      .then(() => setAdsInitialized(true))
      .catch((err) => console.log("Erro ao iniciar AdMob", err));
  }, []);

  if (!adsInitialized) return null;

  return (
    <BannerAd
      unitId="ca-app-pub-1408168476808382/3847637207"
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{ requestNonPersonalizedAdsOnly: true }}
    />
  );
}
