import React from 'react';
import { Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { Typography } from '../Typography/Typography';

interface Props {
  title: string;
  isLoading?: boolean;
  onPress: () => void;
}

function Button(props: Props) {
  return (
    <Pressable style={styles.container} onPress={props.onPress} disabled={props.isLoading}>
      {props.isLoading ? (
        <ActivityIndicator size='small' color='#FFF' />
      ) : (
        <Typography
          color='#FFF'
          fontSize={16}
          lineHeight={32}
          fontWeight={500}
          textTransform='uppercase'
        >
          {props.title}
        </Typography>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 57,
    width: '100%',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#22D486',
  },
});

export { Button };
