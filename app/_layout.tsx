import LiberioTheme from '@/constants/LiberioTheme';
import { ClerkProvider } from '@clerk/clerk-expo';
import { ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack, } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import CloseModalButton from '@/components/CloseModalButton';
import useSecureStorage from '@/hooks/useSecureStorage';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: '(tabs)',
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

const RootLayout = () => {
  const [loaded, error] = useFonts({
    'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-b': require('../assets/fonts/OpenSans-Bold.ttf'),
    'open-sans-sb': require('../assets/fonts/OpenSans-SemiBold.ttf'),
    'open-sans-eb': require('../assets/fonts/OpenSans-ExtraBold.ttf')
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

const RootLayoutNav = () => {
  const { tokenCache } = useSecureStorage()
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY ?? ''}
    >
      <ThemeProvider value={LiberioTheme}>
        <Stack>
          <Stack.Screen
            name='(stack)/(tabs)'
            options={{ headerShown: false, headerTransparent: true }}
          />
          <Stack.Screen
            name='(stack)/(auth)'
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='(modals)/oauth-native-callback'
            options={{
              presentation: 'modal',
              headerTitle: '',
              headerLeft: () => <CloseModalButton />
            }}
          />
        </Stack>
      </ThemeProvider>
    </ClerkProvider >

  );
}

export default RootLayout
