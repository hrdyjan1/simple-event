import React from 'react';
import { Block } from '../Block/Block';
import { Typography } from '../Typography/Typography';
import { Icon } from '../Icon/Icon';
import { DashboardUserHeader } from '../DashboardUserHeader/DashboardUserHeader';
import { DashboardCardSwitch } from '../DashboardCardSwitch/DashboardCardSwitch';
import { UserInitials } from '../UserInitials/UserInitials';
import { Pressable } from 'react-native';

interface DashboardHeaderProps {
  firstName: string;
  lastName: string;
  cardVariant: 'small' | 'big';
  onCardVariantPress: () => void;
  onEventsTimelinePress: () => void;
  onInitialsProfilePress?: () => void;
  eventsTimeline: 'ALL' | 'PAST' | 'FUTURE';
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
        <Pressable onPress={props.onEventsTimelinePress}>
          <Block row alignItems='center'>
            <Typography fontSize={12} lineHeight={24} color='#A9AEB4' fontWeight={600}>
              SHOW:
            </Typography>
            <Typography fontSize={12} lineHeight={24} color='#323C46' fontWeight={600}>
              {` ${props.eventsTimeline} EVENTS`}
            </Typography>
            <Block width={8} />
            <Icon name='caret-down' color='#323C46' />
          </Block>
        </Pressable>
        <DashboardCardSwitch onPress={props.onCardVariantPress} cardVariant={props.cardVariant} />
      </Block>

      <Block height={31} />
    </>
  );
}

export { DashboardHeader };
