import { ModalContent } from '@/components/ModalContent/ModalContent';
import { Typography } from '@/components/Typography/Typography';
import { useRouter } from 'expo-router';
import { Button } from 'react-native';

export default function TransparentModal() {
  const router = useRouter();

  return (
    <ModalContent>
      <Typography>This is a transparent modal</Typography>
      {/* TODO: Fix go back  */}
      <Button title='Close Modal' onPress={() => router.back()} />
    </ModalContent>
  );
}
