import { Block } from '@/components/Block/Block';
import { Typography } from '@/components/Typography/Typography';
import { Separator } from '@/components/Separator/Separator';
import { Button } from 'react-native';
import { useAppSelector } from '@/store/store';

function TabTwoScreen() {
  const state = useAppSelector((s) => s);

  return (
    <Block hasFlexOne align='center'>
      <Typography>Tab Two</Typography>
      <Separator />
      <Button onPress={() => console.log(state)} title='State log' />
    </Block>
  );
}

export default TabTwoScreen;
