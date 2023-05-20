import Routes from './src/routes';
import { Loading } from './src/components/loading';
import { useFonts } from 'expo-font';
import { VisibilityProvider } from './src/context/visibilitycontext';
import { useEffect } from 'react';
import { Update } from './src/services/checkUpdate';
import { TestIds, AppOpenAd } from 'react-native-google-mobile-ads';

const PUB_OPEN_ID = __DEV__ ? TestIds.APP_OPEN : 'ca-app-pub-2213444535919704/3383426137'

const adOpen = AppOpenAd.createForAdRequest(PUB_OPEN_ID, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ['fashion', 'clothing'],
});



export default function App (): JSX.Element {

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
  });

  useEffect(() => {
    Update()
  }, [])

  useEffect(() => {
    adOpen.load()
    setTimeout(() => {
      adOpen.show()
    }, 1000)
  }, [])

  return (
      fontsLoaded ? 

        <VisibilityProvider>
          <Routes />
        </VisibilityProvider>

      :

        <Loading />
  )
}