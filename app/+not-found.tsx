import { Block } from '@/components/Block/Block';
import { Typography } from '@/components/Typography/Typography';
import { Link, Stack } from 'expo-router';

function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Block justifyContent='center' alignItems='center' hasFlexOne>
        <Typography>This screen doesn't exist.</Typography>

        <Link href='/'>
          <Typography>Go to home screen!</Typography>
        </Link>
      </Block>
    </>
  );
}

export default NotFoundScreen;
