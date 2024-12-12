import { Block } from '@/components/Block/Block';
import { Screen } from '@/components/Screen/Screen';
import { Typography } from '@/components/Typography/Typography';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';

function DashboardUpdateScreen() {
  const { id } = useLocalSearchParams();

  return (
    <Screen>
      <Block hasFlexOne justifyContent='center' alignItems='center'>
        <Typography>TODO</Typography>
        <Typography>ID: ${id}</Typography>
      </Block>
    </Screen>
  );
}

export { DashboardUpdateScreen };
