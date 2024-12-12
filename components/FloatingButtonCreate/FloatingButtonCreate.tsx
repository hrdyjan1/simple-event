import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Icon } from '../Icon/Icon';

interface FloatingButtonCreateProps {
  onPress: () => void;
}

function FloatingButtonCreate(props: FloatingButtonCreateProps) {
  return (
    <Pressable style={styles.container} onPress={props.onPress}>
      <Icon name='add' color='#fff' size={20} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    bottom: 16,
    right: 16,
    zIndex: 999,
    width: 56,
    height: 56,
    borderRadius: 28,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#323C46',
  },
});

export { FloatingButtonCreate };
