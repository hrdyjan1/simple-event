import { useSignUpUserMutation } from '@/api/baseApi';
import { Block } from '@/components/Block/Block';
import { setUser } from '@/store/slices/auth';
import { router } from 'expo-router';
import React from 'react';
import { Button } from 'react-native';
import { signUpReducer, SignUpState } from './utils/signUpReducer';
import { signUpInitialState } from './utils/signUpInitialState';
import { useDispatch } from 'react-redux';
import { Typography } from '../Typography/Typography';
import { Input } from '../Input/Input';
import { isDefined } from '@/constants/isDefined';

function SignUpForm() {
  const [state, reducerDispatch] = React.useReducer(signUpReducer, signUpInitialState);
  const [signUpUser] = useSignUpUserMutation();

  const reduxDispatch = useDispatch();

  const handleSignUp = () => {
    reducerDispatch({ type: 'VALIDATE' });

    if (Object.values(state.errors).filter(isDefined).length === 0) {
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
        });
    } else {
      console.warn('Error');
    }
  };

  const handleChange = (field: keyof SignUpState) => (value: string) => {
    reducerDispatch({ type: 'SET_FIELD', field, value });
  };

  return (
    <Block>
      <Typography>Get started absolutely free.</Typography>
      <Typography>Enter your details below.</Typography>

      <Block>
        <Input
          value={state.firstName}
          placeholder='First name'
          onChangeText={handleChange('firstName')}
        />
        {state.errors.firstName && <Typography>{state.errors.firstName}</Typography>}
      </Block>
      <Block>
        <Input
          value={state.lastName}
          placeholder='Last name'
          onChangeText={handleChange('lastName')}
        />
        {state.errors.lastName && <Typography>{state.errors.lastName}</Typography>}
      </Block>
      <Block>
        <Input value={state.email} placeholder='Email' onChangeText={handleChange('email')} />
        {state.errors.email && <Typography>{state.errors.email}</Typography>}
      </Block>
      <Block>
        <Input
          secureTextEntry
          value={state.password}
          placeholder='Password'
          onChangeText={handleChange('password')}
        />
        {state.errors.password && <Typography>{state.errors.password}</Typography>}
      </Block>
      <Block>
        <Input
          secureTextEntry
          value={state.repeatPassword}
          placeholder='Repeat password'
          onChangeText={handleChange('repeatPassword')}
        />
        {state.errors.repeatPassword && <Typography>{state.errors.repeatPassword}</Typography>}
      </Block>

      <Button title='Create New Event' onPress={handleSignUp} />
    </Block>
  );
}

export { SignUpForm };
