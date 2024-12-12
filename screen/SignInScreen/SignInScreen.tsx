import { Block } from '@/components/Block/Block';
import { router } from 'expo-router';
import { Screen } from '@/components/Screen/Screen';
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, KeyboardAvoidingView } from 'react-native';
import { Input } from '@/components/Input/Input';
import { Button } from '@/components/Button/Button';
import { Typography } from '@/components/Typography/Typography';
import { useForm } from '@/hooks/useForm';
import { signInInitialState } from './utils/signInStateSchema';
import { signInStateSchema } from './utils/signInSchema';
import { useSignInUserMutation } from '@/api/baseApi';
import { useDispatch } from 'react-redux';
import { setUser } from '@/store/slices/auth';
import { Logo } from '@/components/Logo/Logo';

function SignInScreen() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);

  const [signInError, setSignInError] = React.useState<string | null>(null);
  const resetError = () => setSignInError(null);

  const { state, checkIsValid, setField } = useForm(
    signInInitialState,
    signInStateSchema,
    resetError
  );

  const [signInUser, { isLoading, ...rest }] = useSignInUserMutation();
  const reduxDispatch = useDispatch();

  const handleSignIn = () => {
    const isValid = checkIsValid();

    if (isValid) {
      signInUser({ email: state.email, password: state.password })
        .unwrap()
        .then((data) => {
          router.replace('/');
          reduxDispatch(setUser(data));
        })
        .catch((error) => setSignInError(error.data.message));
    }
  };

  const goToSignUp = () => {
    router.replace('/sign-up');
  };

  return (
    <Screen isScrollable>
      <Block>
        <Block height={24} />
        <Block row>
          <Block width={24} />
          <Logo />
        </Block>
      </Block>

      <Block hasFlexOne justifyContent='center' alignItems='center' paddingHorizontal={24}>
        <Typography fontSize={22} lineHeight={48} color='#323C46'>
          Sign in to Eventio.
        </Typography>
        <Typography fontSize={14} lineHeight={24} color='#949EA8'>
          Enter your details below.
        </Typography>

        <Block width='100%' height={48} backgroundColor='transparent' />
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
          icon={{ name: passwordVisible ? 'eye' : 'eye-off', onPress: togglePasswordVisibility }}
        />

        {signInError && (
          <>
            <Block height={12} backgroundColor='transparent' />
            <Typography fontWeight={300} color='red'>
              {signInError}
            </Typography>
          </>
        )}

        <Block width='100%' height={24} backgroundColor='transparent' />

        <Pressable onPress={goToSignUp}>
          <Typography fontSize={14} lineHeight={24} color='#C9CED3'>
            Don’t have an account?{' '}
            <Typography fontWeight={500} color='#949EA8'>
              SIGN UP
            </Typography>
          </Typography>
        </Pressable>

        <Block width='100%' height={40} backgroundColor='transparent' />

        <Button title='SIGN IN' onPress={handleSignIn} isLoading={isLoading} />
      </Block>
    </Screen>
  );
}

export { SignInScreen };
