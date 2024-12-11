import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface Props {
  position: 'absolute' | 'relative';
}

function Logo(props: Props) {
  return <Text style={[styles.logo, styles[props.position]]}>E.</Text>;
}

const styles = StyleSheet.create({
  logo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '##323C46',
  },
  absolute: {
    position: 'absolute',
    left: 22,
    top: 22,
  },
  relative: {
    position: undefined,
  },
});

export { Logo };
