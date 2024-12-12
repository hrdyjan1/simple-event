export { ErrorBoundary } from 'expo-router';
import { Stack } from 'expo-router';

function DashboardLayout() {
  return (
    <Stack>
      <Stack.Screen name='[id]' options={{ headerShown: false }} />
      <Stack.Screen name='create' options={{ headerShown: false }} />
    </Stack>
  );
}

export default DashboardLayout;
