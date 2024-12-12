import { Block } from '@/components/Block/Block';
import { Typography } from '@/components/Typography/Typography';

interface Props {
  id: string;
}

function DashboardDetailScreenLowerHeader(props: Props) {
  return (
    <Block row>
      <Block width={24} />
      <Block>
        <Typography
          fontSize={12}
          lineHeight={24}
          color='#A9AEB4'
          fontWeight={500}
          textTransform='uppercase'
        >
          Detail Event:
        </Typography>
        <Typography
          fontSize={12}
          lineHeight={24}
          color='#A9AEB4'
          fontWeight={500}
          textTransform='uppercase'
        >
          #{props.id}
        </Typography>
      </Block>
    </Block>
  );
}

export { DashboardDetailScreenLowerHeader };
