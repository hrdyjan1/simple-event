export { ErrorBoundary } from 'expo-router';

import { Text } from 'react-native';
import { Redirect, Stack } from 'expo-router';
import { useAuthSession } from '@/context/auth/AuthProvider';
import { Typography } from '@/components/Typography/Typography';

function AppLayout() {
  const { session, isLoading } = useAuthSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href='/sign-in' />;
  }

  return (
    <Stack>
      <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
      <Stack.Screen
        name='modal'
        options={{ presentation: 'transparentModal', animation: 'fade', headerShown: false }}
      />
    </Stack>
  );
}

export default AppLayout;
