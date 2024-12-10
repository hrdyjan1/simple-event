import { router } from 'expo-router';
import { Button } from 'react-native';
import { Block } from '@/components/Block/Block';
import { SignInForm } from '@/components/SignInForm/SignInForm';

function SignIn() {
  const goToSignUp = () => {
    router.replace('/sign-up');
  };

  return (
    <Block hasFlexOne>
      <SignInForm />
      <Block height={10} />
      <Button onPress={goToSignUp} title='Sign Up' />
    </Block>
  );
}

export default SignIn;
