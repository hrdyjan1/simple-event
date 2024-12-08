import { Block } from '@/components/Block/Block';
import { Typography } from '@/components/Typography/Typography';
import { useAuthSession } from '@/context/auth/AuthProvider';
import { router } from 'expo-router';
import { Pressable } from 'react-native';

function SignIn() {
  const { signIn } = useAuthSession();
  return (
    <Block align='center' hasFlexOne>
      <Pressable
        onPress={() => {
          signIn();
          router.replace('/');
        }}
      >
        <Typography>Sign In</Typography>
      </Pressable>
    </Block>
  );
}

export default SignIn;
