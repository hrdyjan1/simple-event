import { Block } from '@/components/Block/Block';
import { Typography } from '@/components/Typography/Typography';
import { Link, Stack } from 'expo-router';

function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Block align='center' hasFlexOne>
        <Typography>This screen doesn't exist.</Typography>

        <Link href='/'>
          <Typography variant='alternative'>Go to home screen!</Typography>
        </Link>
      </Block>
    </>
  );
}

export default NotFoundScreen;
