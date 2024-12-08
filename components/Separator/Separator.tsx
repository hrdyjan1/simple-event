import React from 'react';
import { View } from 'react-native';
import { Block } from '../Block/Block';

interface SeparatorProps {}

function Separator({}: SeparatorProps) {
  return <Block height={1} width='80%' lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />;
}

export { Separator };
