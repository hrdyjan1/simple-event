import { SignUpState } from './signUpReducer';

const signUpInitialState: SignUpState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  repeatPassword: '',
  errors: {},
};

export { signUpInitialState };
