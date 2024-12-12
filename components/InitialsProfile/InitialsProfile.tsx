import React from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { Typography } from '../Typography/Typography';
import { isDefined } from '@/constants/isDefined';

interface Props {
  text: string;
  onPress?: () => void;
}

function InitialsProfile(props: Props) {
  return (
    <Pressable disabled={!isDefined(props.onPress)} onPress={props.onPress}>
      <View style={styles.profileButton}>
        <Typography color='#949EA8' fontSize={11.2}>
          {props.text}
        </Typography>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  profileButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#D9DCE1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export { InitialsProfile };
