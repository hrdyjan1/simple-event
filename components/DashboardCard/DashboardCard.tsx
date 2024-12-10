import { DashboardDetailResponse } from '@/api/apiTypes';
import React from 'react';
import { Block } from '../Block/Block';
import { Typography } from '../Typography/Typography';
import { Pressable } from 'react-native';
import { isDefined } from '@/constants/isDefined';

interface Props {
  data: DashboardDetailResponse;
  onPress?: () => void;
}

function DashboardCard(props: Props) {
  return (
    <Pressable disabled={!isDefined(props.onPress)} onPress={props.onPress}>
      <Block>
        <Typography>{props.data.title}</Typography>
        <Typography>{props.data.description}</Typography>
      </Block>
    </Pressable>
  );
}

export { DashboardCard };
