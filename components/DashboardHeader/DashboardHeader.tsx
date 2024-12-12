import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Block } from '../Block/Block';
import { Typography } from '../Typography/Typography';
import { Icon } from '../Icon/Icon';
import { DashboardUserHeader } from '../DashboardUserHeader/DashboardUserHeader';
import { DashboardCardSwitch } from '../DashboardCardSwitch/DashboardCardSwitch';
import { UserInitials } from '../UserInitials/UserInitials';

interface DashboardHeaderProps {
  firstName: string;
  lastName: string;
  onInitialsProfilePress?: () => void;
}

function DashboardHeader(props: DashboardHeaderProps) {
  return (
    <>
      <Block height={24} />

      <DashboardUserHeader>
        <UserInitials
          lastName={props.lastName}
          firstName={props.firstName}
          onPress={props.onInitialsProfilePress}
        />
      </DashboardUserHeader>

      <Block height={64} />

      <Block row justifyContent='space-between'>
        <Block row alignItems='center'>
          <Typography fontSize={12} lineHeight={24} color='#A9AEB4' fontWeight={500}>
            SHOW:
          </Typography>
          <Typography fontSize={12} lineHeight={24} color='#323C46' fontWeight={500}>
            {' '}
            ALL EVENTS
          </Typography>
          <Block width={8} />
          <Icon name='caret-down' color='#323C46' />
        </Block>
        <DashboardCardSwitch />
      </Block>

      <Block height={31} />
    </>
  );
}

export { DashboardHeader };
