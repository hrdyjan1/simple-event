import React from 'react';
import {
  createDashboardDetailReducer,
  CreateDashboardDetailState,
} from './utils/createDashboardDetailReducer';
import { Alert, Button } from 'react-native';
import { Block } from '../Block/Block';
import { Typography } from '../Typography/Typography';
import { Input } from '../Input/Input';
import { isDefined } from '@/constants/isDefined';
import { combineDateAndTimeToUTC } from '@/utils/date/combineDateAndTimeToUTC';
import { useCreateDashboardDetailMutation } from '@/api/baseApi';
import { createDashboardDetailInitialState } from './utils/createDashboardInitialState';

function CreateDashboardDetailForm() {
  const [state, dispatch] = React.useReducer(
    createDashboardDetailReducer,
    createDashboardDetailInitialState
  );

  const [createDashboardDetail] = useCreateDashboardDetailMutation();

  const handleSubmit = () => {
    dispatch({ type: 'VALIDATE' });

    if (Object.values(state.errors).filter(isDefined).length === 0) {
      const startsAt = combineDateAndTimeToUTC(state.date, state.time);
      if (startsAt) {
        createDashboardDetail({
          title: state.title,
          description: state.description,
          capacity: Number(state.capacity),
          startsAt: startsAt.toISOString(),
        })
          .unwrap()
          .then(console.log);
      }
    } else {
      Alert.alert('Validation Error', 'Please fix the errors before submitting.');
    }
  };

  const handleChange = (field: keyof CreateDashboardDetailState) => (value: string) => {
    dispatch({ type: 'SET_FIELD', field, value });
  };

  return (
    <Block>
      <Typography>Create New Event</Typography>
      <Typography>Enter details below</Typography>

      <Block>
        <Input value={state.title} placeholder='Title' onChangeText={handleChange('title')} />
        {state.errors.title && <Typography>{state.errors.title}</Typography>}
      </Block>
      <Block>
        <Input
          value={state.description}
          placeholder='Description'
          onChangeText={handleChange('description')}
        />
        {state.errors.description && <Typography>{state.errors.description}</Typography>}
      </Block>
      <Block>
        <Input value={state.date} placeholder='Date' onChangeText={handleChange('date')} />
        {state.errors.date && <Typography>{state.errors.date}</Typography>}
      </Block>
      <Block>
        <Input value={state.time} placeholder='Time' onChangeText={handleChange('time')} />
        {state.errors.time && <Typography>{state.errors.time}</Typography>}
      </Block>
      <Block>
        <Input
          value={state.capacity}
          placeholder='Capacity'
          onChangeText={handleChange('capacity')}
        />
        {state.errors.capacity && <Typography>{state.errors.capacity}</Typography>}
      </Block>

      <Button title='Create New Event' onPress={handleSubmit} />
    </Block>
  );
}

export { CreateDashboardDetailForm };
