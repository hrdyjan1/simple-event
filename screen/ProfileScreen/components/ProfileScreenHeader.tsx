import { Block } from '@/components/Block/Block';
import { DashboardUserHeader } from '@/components/DashboardUserHeader/DashboardUserHeader';
import { Typography } from '@/components/Typography/Typography';
import { Card } from '@/components/Card/Card';
import { DashboardCardSwitch } from '@/components/DashboardCardSwitch/DashboardCardSwitch';
import { router } from 'expo-router';

interface Props {
  lastName: string;
  firstName: string;
  email: string;
}

function ProfileScreenHeader(props: Props) {
  const initials = `${props.firstName[0]}${props.lastName[0]}`;

  return (
    <>
      <Block height={24} />
      <Block paddingHorizontal={24}>
        <DashboardUserHeader
          lastName={props.lastName ?? ''}
          firstName={props.firstName ?? ''}
          onInitialsProfilePress={() => router.navigate('/sign-out-modal')}
        />
      </Block>

      <Block height={120} />

      <Block paddingHorizontal={10}>
        <Card>
          <Block width='100%' alignItems='center'>
            <Block height={83} />

            <Block
              top={-60}
              width={120}
              height={120}
              radius={60}
              position='absolute'
              alignItems='center'
              justifyContent='center'
              backgroundColor='#D9DCE1'
            >
              <Typography top={5} fontSize={50} color='#949EA8' fontWeight={500}>
                {initials}
              </Typography>
            </Block>

            <Typography
              fontSize={18}
              lineHeight={48}
              color='#323C46'
            >{`${props.firstName} ${props.lastName}`}</Typography>

            <Typography fontSize={14} lineHeight={24} color='#949EA8' top={-12}>
              {props.email}
            </Typography>

            <Block height={41} />
          </Block>
        </Card>
      </Block>

      <Block height={18} />

      <Block row justifyContent='space-between'>
        <Block row>
          <Block width={24} />
          <Typography fontSize={22} lineHeight={48} color='#323C46'>
            My events
          </Typography>
        </Block>
        <Block row>
          <DashboardCardSwitch />
          <Block width={24} />
        </Block>
      </Block>

      <Block height={14} />
    </>
  );
}

export { ProfileScreenHeader };
