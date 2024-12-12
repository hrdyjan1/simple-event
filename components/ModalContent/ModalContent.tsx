import { useRouter } from 'expo-router';
import { StyleSheet, Pressable } from 'react-native';
import { Block } from '../Block/Block';

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
