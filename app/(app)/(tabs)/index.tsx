import { Block } from '@/components/Block/Block';
import { Typography } from '@/components/Typography/Typography';
import { Separator } from '@/components/Separator/Separator';
import { useGetEventsQuery } from '@/api/baseApi';

function TabOneScreen() {
  const data = useGetEventsQuery();

  return (
    <Block hasFlexOne align='center'>
      <Typography>Tab One</Typography>
      <Separator />
      <Typography>Content</Typography>
    </Block>
  );
}

export default TabOneScreen;
