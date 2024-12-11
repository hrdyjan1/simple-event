import { useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { Block } from '../Block/Block';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Typography } from '../Typography/Typography';

interface ModalContentProps extends React.PropsWithChildren {}

function ModalContent(props: ModalContentProps) {
  const router = useRouter();
  const backgroundColor = useThemeColor({}, 'background');

  return (
    <Block
      hasFlexOne
      alignItems='center'
      justifyContent='center'
      backgroundColor='rgba(0, 0, 0, 0.5)'
    >
      <Pressable style={styles.background} onPress={router.back} />
      <View style={[styles.modal, { backgroundColor }]}>{props.children}</View>
    </Block>
  );
}

const styles = StyleSheet.create({
  background: StyleSheet.absoluteFillObject,
  modal: {
    width: '80%',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export { ModalContent };
