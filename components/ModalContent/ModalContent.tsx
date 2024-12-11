import { useRouter } from 'expo-router';
import { View, Text, Button, StyleSheet, Pressable } from 'react-native';
import { Block } from '../Block/Block';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Typography } from '../Typography/Typography';

interface ModalContentProps extends React.PropsWithChildren {}

function ModalContent(props: ModalContentProps) {
  const router = useRouter();

  return (
    <Block
      hasFlexOne
      alignItems='center'
      justifyContent='center'
      backgroundColor='rgba(0, 0, 0, 0.5)'
    >
      <Pressable style={styles.background} onPress={router.back} />
      {/* <View style={[styles.modal, { backgroundColor }]}>{props.children}</View> */}
      <Block
        width='80%'
        paddingHorizontal={20}
        paddingVertical={20}
        radius={10}
        backgroundColor='#fff'
      >
        {props.children}
      </Block>
    </Block>
  );
}

const styles = StyleSheet.create({
  background: StyleSheet.absoluteFillObject,
});

export { ModalContent };
