import { Typography } from '@/components/Typography/Typography';
import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { match } from 'ts-pattern';

interface Props {
  onPress: () => void;
  variant: 'edit' | 'join' | 'leave';
}

function getText(variant: Props['variant']): string {
  return match(variant)
    .with('join', () => 'JOIN')
    .with('edit', () => 'EDIT')
    .with('leave', () => 'LEAVE')
    .exhaustive();
}

function DashboardCardActionButton(props: Props) {
  return (
    <Pressable
      style={[buttonStyles.container, buttonStyles[props.variant]]}
      onPress={props.onPress}
    >
      <Typography color={textStyle[props.variant]['color']}>{getText(props.variant)}</Typography>
    </Pressable>
  );
}

const buttonStyles = StyleSheet.create({
  container: {
    height: 32,
    width: 100,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  edit: {
    backgroundColor: '#D9DCE1',
  },
  join: {
    backgroundColor: '#21CF83',
  },
  leave: {
    backgroundColor: '#FF4081',
  },
});

const textStyle = StyleSheet.create({
  edit: {
    color: '#A9AEB4',
  },
  join: {
    color: '#fff',
  },
  leave: {
    color: '#fff',
  },
});

export { DashboardCardActionButton };
