import React from 'react';
import { Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Logo } from '../Logo/Logo';
import { Block } from '../Block/Block';
import { Typography } from '../Typography/Typography';
import { Icon } from '../Icon/Icon';
import { InitialsProfile } from '../InitialsProfile/InitialsProfile';

interface DashboardHeaderProps {
  initials: string;
  onInitialsProfilePress?: () => void;
}

function DashboardHeader(props: DashboardHeaderProps) {
  return (
    <>
      <Block height={24} />
      <Block row alignItems='center' justifyContent='space-between'>
        <Logo position='relative' />

        <Pressable onPress={props.onInitialsProfilePress}>
          <Block row alignItems='center'>
            <InitialsProfile text={props.initials} />
            <Block width={8} />
            <Icon name='caret-down' color='#D9DCE1' />
          </Block>
        </Pressable>
      </Block>
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
        <Block row alignItems='center' justifyContent='center'>
          <Ionicons name='grid' size={17} color='#555' />
          <Block width={15} />
          <Ionicons name='albums-outline' size={17} color='#555' />
        </Block>
      </Block>
      <Block height={31} />
    </>
  );
}

export { DashboardHeader };
