import React from 'react';
import { Pressable } from 'react-native';
import { Typography } from '../Typography/Typography';

interface Props {
  text1: string;
  text2: string;
  onPress: () => void;
}

function InfoLink(props: Props) {
  return (
    <Pressable onPress={props.onPress}>
      <Typography fontSize={14} lineHeight={24} color='#C9CED3'>
        {props.text1}{' '}
        <Typography fontWeight={500} color='#949EA8'>
          {props.text2}
        </Typography>
      </Typography>
    </Pressable>
  );
}

export { InfoLink };
