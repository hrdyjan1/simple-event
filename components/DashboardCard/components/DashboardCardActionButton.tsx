import { AttendVariant } from '@/api/types/AttendVariant';
import { Block } from '@/components/Block/Block';
import { Typography } from '@/components/Typography/Typography';
import React from 'react';
import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import { match } from 'ts-pattern';

interface Props {
  onPress: () => void;
  variant: AttendVariant;
  isLoading?: boolean;
}

function getText(variant: AttendVariant): string {
  return match(variant)
    .with('join', () => 'JOIN')
    .with('edit', () => 'EDIT')
    .with('leave', () => 'LEAVE')
    .exhaustive();
}

function DashboardCardActionButton(props: Props) {
  return (
    <Pressable disabled={props.isLoading} onPress={props.onPress}>
      <Block
        height={32}
        width={100}
        radius={4}
        alignItems='center'
        justifyContent='center'
        backgroundColor={buttonStyles[props.variant].backgroundColor}
      >
        {props.isLoading ? (
          <ActivityIndicator />
        ) : (
          <Typography color={textStyle[props.variant]['color']}>
            {getText(props.variant)}
          </Typography>
        )}
      </Block>
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
