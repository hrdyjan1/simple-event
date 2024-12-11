import { Block } from '@/components/Block/Block';
import { Icon } from '@/components/Icon/Icon';
import { InitialsProfile } from '@/components/InitialsProfile/InitialsProfile';
import { Logo } from '@/components/Logo/Logo';
import { Pressable } from 'react-native';

interface Props {
  firstName: string;
  lastName: string;
  onInitialsProfilePress?: () => void;
}

function DashboardUserHeader(props: Props) {
  const initials = `${props.firstName[0]}${props.lastName[0]}`;

  return (
    <Block row alignItems='center' justifyContent='space-between'>
      <Logo position='relative' />

      <Pressable onPress={props.onInitialsProfilePress}>
        <Block row alignItems='center'>
          <InitialsProfile text={initials} />
          <Block width={8} />
          <Icon name='caret-down' color='#D9DCE1' />
        </Block>
      </Pressable>
    </Block>
  );
}

export { DashboardUserHeader };
