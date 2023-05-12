import Routes from './src/routes';
import { Loading } from './src/components/loading';
import { useFonts } from 'expo-font';
import { VisibilityProvider } from './src/context/visibilitycontext';


export default function App (): JSX.Element {

  const [fontsLoaded] = useFonts({
    'Montserrat-Regular': require('./src/assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./src/assets/fonts/Montserrat-Bold.ttf'),
  });

  return (
      fontsLoaded ? 

        <VisibilityProvider>
          <Routes />
        </VisibilityProvider>

      :

        <Loading />
  )
}