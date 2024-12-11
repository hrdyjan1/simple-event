import { router } from 'expo-router';
import { Button } from 'react-native';
import { Block } from '@/components/Block/Block';
import { SignInForm } from '@/components/SignInForm/SignInForm';
import { SignInScreen } from '@/screen/SignInScreen/SignInScreen';

function SignIn() {
  const goToSignUp = () => {
    router.replace('/sign-up');
  };

  return <SignInScreen />;

  //   return (
  //     <Block hasFlexOne>
  //       <SignInForm />
  //       <Block height={10} />
  //       <Button onPress={goToSignUp} title='Sign Up' />
  //     </Block>
  //   );
}

export default SignIn;
