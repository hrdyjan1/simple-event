import { useCreateDashboardDetailMutation } from '@/api/baseApi';
import { Block } from '@/components/Block/Block';
import { Button } from '@/components/Button/Button';
import { Card } from '@/components/Card/Card';
import { createDashboardDetailStateSchema } from '@/components/CreateDashboardDetailForm/utils/createDashboardDetailSchema';
import { createDashboardDetailInitialState } from '@/components/CreateDashboardDetailForm/utils/createDashboardInitialState';
import { DashboardUserHeader } from '@/components/DashboardUserHeader/DashboardUserHeader';
import { Icon } from '@/components/Icon/Icon';
import { Input } from '@/components/Input/Input';
import { Screen } from '@/components/Screen/Screen';
import { Typography } from '@/components/Typography/Typography';
import { useForm } from '@/hooks/useForm';
import { combineDateAndTimeToUTC } from '@/utils/date/combineDateAndTimeToUTC';
import { router } from 'expo-router';
import React from 'react';
import { Pressable } from 'react-native';

interface DashboardCreateScreenProps {}

function DashboardCreateScreen({}: DashboardCreateScreenProps) {
  const [createError, setCreateError] = React.useState<string | null>(null);
  const resetError = () => setCreateError(null);

  const [createDashboardDetail, { isLoading }] = useCreateDashboardDetailMutation();

  const { checkIsValid, setField, state } = useForm(
    createDashboardDetailInitialState,
    createDashboardDetailStateSchema,
    resetError
  );

  const handleCreate = () => {
    const isValid = checkIsValid();

    if (isValid) {
      const startsAt = combineDateAndTimeToUTC(state.date, state.time);

      if (startsAt) {
        createDashboardDetail({
          title: state.title,
          description: state.description,
          capacity: Number(state.capacity),
          startsAt: startsAt.toISOString(),
        })
          .unwrap()
          .then(router.back)
          .catch((error) => {
            setCreateError(error.data.message);
          });
      } else {
        setCreateError('Invalid date or time');
      }
    }
  };

  return (
    <Screen>
      <Block height={27} />

      <Block paddingHorizontal={24}>
        <DashboardUserHeader>
          <Pressable onPress={router.back}>
            <Icon name='close' color='#323C46' size={24} />
          </Pressable>
        </DashboardUserHeader>
      </Block>

      <Block height={29} />

      <Block paddingHorizontal={8}>
        <Card>
          <Block height={18} />

          <Block justifyContent='center' alignItems='center'>
            <Typography fontSize={22} lineHeight={48} color='#323C46'>
              Create new event
            </Typography>
            <Typography fontSize={14} lineHeight={24} color='#949EA8' top={-2}>
              Enter details below.
            </Typography>
          </Block>

          <Block height={24} />

          <Block paddingHorizontal={16}>
            <Input
              value={state.title}
              placeholder='Title'
              onChangeText={setField('title')}
              error={state.errors.title}
            />
            <Block height={24} />
            <Input
              value={state.description}
              placeholder='Description'
              onChangeText={setField('description')}
              error={state.errors.description}
            />
            <Block height={24} />
            <Input
              value={state.date}
              placeholder='Date'
              onChangeText={setField('date')}
              error={state.errors.date}
            />
            <Block height={24} />
            <Input
              value={state.time}
              placeholder='Time'
              onChangeText={setField('time')}
              error={state.errors.time}
            />
            <Block height={24} />
            <Input
              value={state.capacity}
              placeholder='Capacity'
              onChangeText={setField('capacity')}
              error={state.errors.capacity}
            />
            <Block height={23} />
            <Button title='Create New Event' onPress={handleCreate} isLoading={isLoading} />
            {createError ? (
              <Block alignItems='center'>
                <Typography fontSize={12} color='#d91f29'>
                  {createError}
                </Typography>
              </Block>
            ) : null}
            <Block height={24} />
          </Block>
        </Card>

        <Block height={15} />
      </Block>
    </Screen>
  );
}

export { DashboardCreateScreen };
