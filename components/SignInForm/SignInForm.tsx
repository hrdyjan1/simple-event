import { useSignInUserMutation } from '@/api/baseApi';
import { Block } from '@/components/Block/Block';
import { setUser } from '@/store/slices/auth';
import { router } from 'expo-router';
import React from 'react';
import { Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { Typography } from '../Typography/Typography';
import { Input } from '../Input/Input';
import { useForm } from '@/hooks/useForm';
import { signInStateSchema } from './utils/signInSchema';
import { signInInitialState } from './utils/signInStateSchema';

function SignInForm() {
  const [signInError, setSignInError] = React.useState<string | null>(null);
  const resetError = () => setSignInError(null);

  const { state, checkIsValid, setField } = useForm(
    signInInitialState,
    signInStateSchema,
    resetError
  );

  const [signInUser] = useSignInUserMutation();
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

  return (
    <Block>
      <Typography>Sign in to Eventio.</Typography>
      <Typography>Enter your details below.</Typography>

      <Block>
        <Input value={state.email} placeholder='Email' onChangeText={setField('email')} />
        {state.errors.email && <Typography>{state.errors.email}</Typography>}
      </Block>
      <Block>
        <Input
          secureTextEntry
          value={state.password}
          placeholder='Password'
          onChangeText={setField('password')}
        />
        {state.errors.password && <Typography>{state.errors.password}</Typography>}
      </Block>

      <Button title='Sign in' onPress={handleSignIn} />
      {signInError && <Typography>{signInError}</Typography>}
    </Block>
  );
}

export { SignInForm };
