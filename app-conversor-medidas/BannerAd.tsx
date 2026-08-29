import mobileAds, {
  BannerAd,
  BannerAdSize,
} from "react-native-google-mobile-ads";

import { useEffect } from "react";

export function CustomBannerAd() {
  useEffect(() => {
    mobileAds()
      .initialize()
      .then(() => {
        console.log("AdMob inicializado");
      });
  }, []);

  return (
    <BannerAd
      unitId="ca-app-pub-1408168476808382/3847637207"
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
      requestOptions={{
        requestNonPersonalizedAdsOnly: true,
      }}
    />
  );
}
