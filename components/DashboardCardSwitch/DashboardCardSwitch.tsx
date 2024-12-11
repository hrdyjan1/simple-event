import React from 'react';
import { View } from 'react-native';
import { Block } from '../Block/Block';
import { Icon } from '../Icon/Icon';

interface DashboardCardSwitchProps {}

function DashboardCardSwitch({}: DashboardCardSwitchProps) {
  return (
    <Block row alignItems='center' justifyContent='center'>
      <Icon name='grid' size={17} color='#555' />
      <Block width={15} />
      <Icon name='albums-outline' size={17} color='#555' />
    </Block>
  );
}

export { DashboardCardSwitch };
