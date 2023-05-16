import Routes from './src/routes';
import { Loading } from './src/components/loading';
import { useFonts } from 'expo-font';
import { VisibilityProvider } from './src/context/visibilitycontext';
import { useEffect } from 'react';
import { Update } from './src/services/checkUpdate';


export default function App (): JSX.Element {

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
  });

  useEffect(() => {
    Update()
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