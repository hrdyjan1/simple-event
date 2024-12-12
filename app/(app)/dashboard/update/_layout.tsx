import { Stack } from 'expo-router';

function UpdateLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name='[id]' />
    </Stack>
  );
}

export default UpdateLayout;
