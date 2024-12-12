import { Block } from '@/components/Block/Block';
import { Logo } from '@/components/Logo/Logo';

interface DashboardUserHeaderProps extends React.PropsWithChildren {}

function DashboardUserHeader(props: DashboardUserHeaderProps) {
  return (
    <Block row alignItems='center' justifyContent='space-between'>
      <Logo position='relative' />
      {props.children}
    </Block>
  );
}

export { DashboardUserHeader };
