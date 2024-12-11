import { useGetDashboardDetailQuery } from '@/api/baseApi';
import { Block } from '@/components/Block/Block';
import { DashboardCard } from '@/components/DashboardCard/DashboardCard';
import { DashboardUserHeader } from '@/components/DashboardUserHeader/DashboardUserHeader';
import { Screen } from '@/components/Screen/Screen';
import { isDefined } from '@/constants/isDefined';
import { useAppSelector } from '@/store/store';
import { Redirect, router, useLocalSearchParams } from 'expo-router';
import { ActivityIndicator } from 'react-native';
import { DashboardDetailScreenLowerHeader } from './components/DashboardDetailScreenLoweHeader';
import { AttendeesCard } from '@/components/AttendeesCard/AttendeesCard';
import { getAttendeeDetails } from './utils/getAttendeeDetails';

function DashboardDetailScreen() {
  const params = useLocalSearchParams();
  const user = useAppSelector((s) => s.auth.user);

  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const { data, isLoading, isError } = useGetDashboardDetailQuery({ id });

  const goToProfile = () => router.navigate('/profile');

  if (isError) {
    return <Redirect href='/' />;
  }

  const attendees = getAttendeeDetails(data?.attendees ?? [], user?.id ?? '');

  return (
    <Screen>
      <Block height={24} />
      <Block paddingHorizontal={24}>
        <DashboardUserHeader
          lastName={user?.lastName ?? ''}
          firstName={user?.firstName ?? ''}
          onInitialsProfilePress={goToProfile}
        />
      </Block>

      <Block height={49} />

      {isLoading ? (
        <Block hasFlexOne justifyContent='center' alignItems='center'>
          <ActivityIndicator />
        </Block>
      ) : null}

      {isDefined(data) ? (
        <>
          <DashboardDetailScreenLowerHeader id={data.id} />

          <Block height={23} />

          <Block paddingHorizontal={10} width='100%'>
            <DashboardCard data={data} />
          </Block>

          <Block height={16} />

          <Block paddingHorizontal={10} width='100%'>
            <AttendeesCard data={attendees} />
          </Block>
        </>
      ) : null}
    </Screen>
  );
}

export { DashboardDetailScreen };
