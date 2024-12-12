import React from 'react';
import { Block } from '../Block/Block';
import { Pressable } from 'react-native';
import { GridSvg } from '@/assets/svg/GridSvg';
import { AlbumSvg } from '@/assets/svg/AlbumSvg';

interface DashboardCardSwitchProps {
  onPress: () => void;
  cardVariant: 'small' | 'big';
}

function DashboardCardSwitch(props: DashboardCardSwitchProps) {
  return (
    <Pressable onPress={props.onPress}>
      <Block row alignItems='center' justifyContent='center'>
        <GridSvg color={props.cardVariant === 'small' ? '#D9DCE1' : '#323C46'} />
        <Block width={10} />
        <AlbumSvg color={props.cardVariant === 'small' ? '#323C46' : '#D9DCE1'} />
      </Block>
    </Pressable>
  );
}

export { DashboardCardSwitch };
