export { ErrorBoundary } from 'expo-router';
import { Redirect, Stack } from 'expo-router';
import { useAppSelector } from '@/store/store';

function AppLayout() {
  const user = useAppSelector((s) => s.auth.user);

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!user) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href='/sign-in' />;
  }

  return (
    <Stack>
      <Stack.Screen name='index' options={{ headerShown: false }} />
      <Stack.Screen name='profile' options={{ headerShown: false }} />
      <Stack.Screen name='dashboard' options={{ headerShown: false }} />
      <Stack.Screen
        name='sign-out-modal'
        options={{ presentation: 'transparentModal', animation: 'fade', headerShown: false }}
      />
    </Stack>
  );
}

export default AppLayout;
