import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

interface IconProps {
  isPressed?: boolean;
  name: React.ComponentProps<typeof FontAwesome>['name'];
}

function Icon(props: IconProps) {
  const colorScheme = useColorScheme();

  return (
    <FontAwesome
      size={25}
      name={props.name}
      color={Colors[colorScheme ?? 'light'].text}
      style={{ marginRight: 15, opacity: props.isPressed ? 0.5 : 1 }}
    />
  );
}

export { Icon };
