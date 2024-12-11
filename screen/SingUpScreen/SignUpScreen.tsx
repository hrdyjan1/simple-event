import { useSignUpUserMutation } from '@/api/baseApi';
import { Block } from '@/components/Block/Block';
import { Button } from '@/components/Button/Button';
import { InfoLink } from '@/components/InfoLink/InfoLink';
import { router } from 'expo-router';
import { Input } from '@/components/Input/Input';
import { Screen } from '@/components/Screen/Screen';
import { signUpInitialState } from '@/components/SignUpForm/utils/signUpInitialState';
import { signUpStateSchema } from '@/components/SignUpForm/utils/signUpStateSchema';
import { Typography } from '@/components/Typography/Typography';
import { useForm } from '@/hooks/useForm';
import React, { useReducer } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/auth';
import { AuthFormHeader } from '@/components/AuthFormHeader/AuthFormHeader';
import { Logo } from '@/components/Logo/Logo';

function SignUpScreen() {
  const reduxDispatch = useDispatch();
  const [signUpUser, { isLoading }] = useSignUpUserMutation();
  const [signUpError, setSignUpError] = React.useState<string | null>(null);
  const [passwordVisible, togglePasswordVisible] = useReducer((s) => !s, false);
  const { state, checkIsValid, setField } = useForm(signUpInitialState, signUpStateSchema);

  const goToSignIn = () => router.replace('/sign-in');

  const handleSignUp = () => {
    const isValid = checkIsValid();

    if (isValid) {
      signUpUser({
        email: state.email,
        password: state.password,
        firstName: state.firstName,
        lastName: state.lastName,
      })
        .unwrap()
        .then((data) => {
          router.replace('/');
          reduxDispatch(setUser(data));
        })
        .catch((error) => setSignUpError(error.data.message));
    }
  };

  return (
    <Screen>
      <Block hasFlexOne justifyContent='center' alignItems='center' paddingHorizontal={24}>
        <Logo position='absolute' />
        <AuthFormHeader title='Get started absolutely free.' subTitle='Enter your details below.' />

        <Block width='100%' height={48} backgroundColor='transparent' />
        <Input
          placeholder='First name'
          value={state.firstName}
          onChangeText={setField('firstName')}
        />
        <Block width='100%' height={40} backgroundColor='transparent' />
        <Input placeholder='Last name' value={state.lastName} onChangeText={setField('lastName')} />
        <Block width='100%' height={40} backgroundColor='transparent' />
        <Input
          placeholder='Email'
          value={state.email}
          keyboardType='email-address'
          onChangeText={setField('email')}
        />
        <Block width='100%' height={40} backgroundColor='transparent' />
        <Input
          placeholder='Password'
          value={state.password}
          onChangeText={setField('password')}
          secureTextEntry={!passwordVisible}
          icon={{ name: passwordVisible ? 'eye' : 'eye-off', onPress: togglePasswordVisible }}
        />
        <Block width='100%' height={40} backgroundColor='transparent' />
        <Input
          placeholder='Repeat password'
          value={state.repeatPassword}
          onChangeText={setField('repeatPassword')}
          secureTextEntry={!passwordVisible}
          icon={{ name: passwordVisible ? 'eye' : 'eye-off', onPress: togglePasswordVisible }}
        />

        {signUpError && (
          <>
            <Block height={12} backgroundColor='transparent' />
            <Typography fontWeight={300} color='red'>
              {signUpError}
            </Typography>
          </>
        )}

        <Block width='100%' height={24} />
        <InfoLink onPress={goToSignIn} text1='Already have an account?' text2='SIGN IN' />
        <Block width='100%' height={40} />
        <Button title='SIGN UP' onPress={handleSignUp} isLoading={isLoading} />
      </Block>
    </Screen>
  );
}

export { SignUpScreen };
