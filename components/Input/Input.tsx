import React from 'react';
import { TextInput, View } from 'react-native';

interface Props extends React.ComponentProps<typeof TextInput> {}

function Input(props: Props) {
  return <TextInput {...props} />;
}

export { Input };
