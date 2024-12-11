import React from 'react';
import { View } from 'react-native';
import { Typography } from '../Typography/Typography';

interface Props {
  title: string;
  subTitle: string;
}

function AuthFormHeader(props: Props) {
  return (
    <>
      <Typography fontSize={22} lineHeight={48} color='#323C46'>
        {props.title}
      </Typography>
      <Typography fontSize={14} lineHeight={24} color='#949EA8'>
        {props.subTitle}
      </Typography>
    </>
  );
}

export { AuthFormHeader };
