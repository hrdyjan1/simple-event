import React from 'react';
import { Block } from '../Block/Block';
import { Icon } from '../Icon/Icon';
import { Pressable } from 'react-native';

interface DashboardCardSwitchProps {
  onPress: () => void;
  cardVariant: 'small' | 'big';
}

function DashboardCardSwitch(props: DashboardCardSwitchProps) {
  return (
    <Pressable onPress={props.onPress}>
      <Block row alignItems='center' justifyContent='center'>
        <Icon
          name={props.cardVariant === 'small' ? 'grid-outline' : 'grid'}
          size={17}
          color='#555'
        />
        <Block width={15} />
        <Icon
          size={17}
          color='#555'
          name={props.cardVariant === 'small' ? 'albums' : 'albums-outline'}
        />
      </Block>
    </Pressable>
  );
}

export { DashboardCardSwitch };
