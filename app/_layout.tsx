import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Provider } from 'react-redux';

import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Slot } from 'expo-router';
import { Block } from '@/components/Block/Block';

import { useColorScheme } from '@/hooks/useColorScheme';
import { persistor, store } from '@/store/store';
import { PersistGate } from 'redux-persist/integration/react';

export { ErrorBoundary } from 'expo-router';

// FIXME: This is a workaround for a bug in the current version of `expo-router`.
const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(app)',
};

SplashScreen.preventAutoHideAsync();

function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded, error] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return <Block hasFlexOne />;
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Block hasFlexOne>
            <Slot />
          </Block>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export { unstable_settings };
export default RootLayout;
