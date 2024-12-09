export { ErrorBoundary } from 'expo-router';
import { Stack } from 'expo-router';

function DashboardLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='[id]' />
      <Stack.Screen name='create' />
    </Stack>
  );
}

export default DashboardLayout;
