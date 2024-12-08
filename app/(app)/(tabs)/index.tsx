import { useAuthSession } from '@/context/auth/AuthProvider';
import { Block } from '@/components/Block/Block';
import { Typography } from '@/components/Typography/Typography';
import { Separator } from '@/components/Separator/Separator';

function TabOneScreen() {
  const { signOut } = useAuthSession();

  return (
    <Block hasFlexOne align='center'>
      <Typography>Tab One</Typography>
      <Separator />
      <Typography>Content</Typography>
    </Block>
  );
}

export default TabOneScreen;
