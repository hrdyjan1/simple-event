import { Nullish } from '@/types/Nullish';
import { signUpStateSchema } from './signUpStateSchema';

type SignUpState = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  repeatPassword: string;
  errors: Partial<Record<keyof Omit<SignUpState, 'errors'>, string | Nullish>>;
};

type SetFieldAction = { type: 'SET_FIELD'; field: keyof SignUpState; value: string };
type ValidateAction = { type: 'VALIDATE' };
type SignUpAction = SetFieldAction | ValidateAction;

function handleSetField(state: SignUpState, action: SetFieldAction) {
  return {
    ...state,
    [action.field]: action.value,
    errors: { ...state.errors, [action.field]: null },
  };
}

function handleValidate(state: SignUpState) {
  const validationResult = signUpStateSchema.safeParse(state);
  if (!validationResult.success) {
    const errors = validationResult.error.errors.reduce(
      (acc, err) => ({
        ...acc,
        [err.path[0]]: err.message,
      }),
      {} as SignUpState['errors']
    );
    return { ...state, errors };
  }

  return state;
}

const signUpReducer = (state: SignUpState, action: SignUpAction): SignUpState => {
  switch (action.type) {
    case 'SET_FIELD':
      return handleSetField(state, action);
    case 'VALIDATE':
      return handleValidate(state);
    default:
      return state;
  }
};

export { type SignUpState, signUpReducer };
