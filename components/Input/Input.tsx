import React from 'react';
import { Pressable, StyleSheet, TextInput, View } from 'react-native';
import { Icon } from '../Icon/Icon';

interface Props extends React.ComponentProps<typeof TextInput> {
  icon?: {
    name: React.ComponentProps<typeof Icon>['name'];
    onPress: () => void;
  };
}

function Input(props: Props) {
  return (
    <View style={styles.container}>
      <TextInput {...props} style={styles.input} placeholderTextColor='#C9CED3' />
      {props.icon ? (
        <Pressable onPress={props.icon.onPress} style={styles.icon}>
          <Icon size={24} name={props.icon.name} color='#E1E4E6' />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    flex: 1,
    fontFamily: 'HindRegular',
    width: '100%',
    height: 42,
    textAlignVertical: 'top',
    borderBottomWidth: 1,
    borderBottomColor: '#DAE1E7',
    fontSize: 16,
    lineHeight: 24,
    color: '#2D3436',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  icon: {
    position: 'absolute',
    right: 0,
  },
});

export { Input };
