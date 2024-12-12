import React from 'react';
import { Typography } from '../Typography/Typography';

interface AuthFormHeaderProps {
  title: string;
  subTitle: string;
}

function AuthFormHeader(props: AuthFormHeaderProps) {
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
