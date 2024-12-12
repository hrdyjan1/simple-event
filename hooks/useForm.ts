import { Nullish } from '@/types/Nullish';
import React from 'react';
import { ZodEffects, ZodObject, ZodRawShape } from 'zod';

type FormState<T> = T & { errors: Partial<Record<keyof T, string | Nullish>> };

type SetFieldAction<T> = { type: 'SET_FIELD'; field: keyof T; value: string };
type SetErrorsAction<T> = { type: 'SET_ERRORS'; errors: FormState<T>['errors'] };
type FormAction<T> = SetFieldAction<T> | SetErrorsAction<T>;

function reducer<T>(state: FormState<T>, action: FormAction<T>): FormState<T> {
  switch (action.type) {
    case 'SET_FIELD':
      return {
        ...state,
        [action.field]: action.value,
        errors: { ...state.errors, [action.field]: null },
      };
    case 'SET_ERRORS':
      return { ...state, errors: action.errors };
    default:
      return state;
  }
}

function useForm<T>(
  initialState: T,
  schema: ZodObject<ZodRawShape> | ZodEffects<ZodObject<ZodRawShape>>,
  setFieldCallback?: () => void
) {
  const [state, dispatch] = React.useReducer(reducer<T>, {
    ...initialState,
    errors: {},
  } as FormState<T>);

  const setField = (field: keyof T) => (value: string) => {
    dispatch({ type: 'SET_FIELD', field, value });
    setFieldCallback && setFieldCallback();
  };

  const checkIsValid = (): boolean => {
    const validationResult = schema.safeParse(state);

    if (!validationResult.success) {
      const errors = validationResult.error.errors.reduce(
        (acc, err) => ({ ...acc, [err.path[0]]: err.message }),
        {} as FormState<T>['errors']
      );

      dispatch({ type: 'SET_ERRORS', errors });
    }

    return validationResult.success;
  };

  return { state, setField, checkIsValid };
}

export { useForm };
