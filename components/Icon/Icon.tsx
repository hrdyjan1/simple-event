import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { OpaqueColorValue } from 'react-native';

interface IconProps {
  size?: number;
  color?: string | OpaqueColorValue | undefined;
  name: React.ComponentProps<typeof Ionicons>['name'];
}

function Icon(props: IconProps) {
  return <Ionicons size={props.size} name={props.name} color={props.color} />;
}

export { Icon };
