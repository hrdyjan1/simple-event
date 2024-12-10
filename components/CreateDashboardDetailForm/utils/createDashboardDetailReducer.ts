import { Nullish } from '@/types/Nullish';
import { createDashboardDetailStateSchema } from './createDashboardDetailSchema';

type CreateDashboardDetailState = {
  title: string;
  description: string;
  date: string;
  time: string;
  capacity: string;
  errors: Partial<Record<keyof Omit<CreateDashboardDetailState, 'errors'>, string | Nullish>>;
};


type SetFieldAction = { type: 'SET_FIELD'; field: keyof CreateDashboardDetailState; value: string };
type ValidateAction = { type: 'VALIDATE' };
type CreateDashboardDetailAction = SetFieldAction | ValidateAction;

function handleSetField(state: CreateDashboardDetailState, action: SetFieldAction) {
  return {
    ...state,
    [action.field]: action.value,
    errors: { ...state.errors, [action.field]: null },
  };
}

function handleValidate(state: CreateDashboardDetailState) {
  const validationResult = createDashboardDetailStateSchema.safeParse(state);
  if (!validationResult.success) {
    const errors = validationResult.error.errors.reduce(
      (acc, err) => ({
        ...acc,
        [err.path[0]]: err.message,
      }),
      {} as CreateDashboardDetailState['errors']
    );
    return { ...state, errors };
  }

  return state;
}

const createDashboardDetailReducer = (
  state: CreateDashboardDetailState,
  action: CreateDashboardDetailAction
): CreateDashboardDetailState => {
  switch (action.type) {
    case 'SET_FIELD':
      return handleSetField(state, action);
    case 'VALIDATE':
      return handleValidate(state);
    default:
      return state;
  }
};

export {
  type CreateDashboardDetailState,
  createDashboardDetailReducer,
};
