import React from 'react';
import { Block } from '../Block/Block';
import { Typography } from '../Typography/Typography';

interface Props {
  text: string;
  isOutline: boolean;
}

function Chip(props: Props) {
  if (props.isOutline) {
    return (
      <Block
        radius={100}
        borderWidth={1}
        borderColor='#D9DCE1'
        backgroundColor='#fff'
        paddingHorizontal={16}
      >
        <Typography lineHeight={32} fontSize={13} color='#949EA8'>
          {props.text}
        </Typography>
      </Block>
    );
  }

  return (
    <Block paddingHorizontal={16} backgroundColor='#D9DCE1' radius={100}>
      <Typography lineHeight={32} fontSize={13} color='#949EA8'>
        {props.text}
      </Typography>
    </Block>
  );
}

export { Chip };
