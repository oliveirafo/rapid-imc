
import { View } from 'react-native';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';


const PUB_BANNER_ID = __DEV__ ? TestIds.BANNER : 'ca-app-pub-2213444535919704/6968576255'

export function Banner () {
  return (
    <View style={{ alignItems: 'center',justifyContent: 'center', backgroundColor: '#00000000' ,width: '100%', height: 50}}>
      <BannerAd
        unitId={PUB_BANNER_ID}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
      />
    </View>
  )
}
