import { Block } from '@/components/Block/Block';
import { Icon } from '@/components/Icon/Icon';
import { InitialsProfile } from '@/components/InitialsProfile/InitialsProfile';
import { Pressable } from 'react-native';

interface UserInitialsProps {
  firstName: string;
  lastName: string;
  onPress?: () => void;
}

function UserInitials(props: UserInitialsProps) {
  const initials = `${props.firstName[0]}${props.lastName[0]}`;

  return (
    <Pressable onPress={props.onPress}>
      <Block row alignItems='center'>
        <InitialsProfile text={initials} />
        <Block width={8} />
        <Icon name='caret-down' color='#D9DCE1' />
      </Block>
    </Pressable>
  );
}

export { UserInitials };
