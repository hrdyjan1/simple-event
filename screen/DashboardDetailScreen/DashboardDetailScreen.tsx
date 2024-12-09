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
import { useToggleAttendee } from '@/api/hooks/useToggleAttendee';
import { UserInitials } from '@/components/UserInitials/UserInitials';

function DashboardDetailScreen() {
  const params = useLocalSearchParams();
  const user = useAppSelector((s) => s.auth.user);
  const { toggleAttendee, checkIsAttendingLoading } = useToggleAttendee();

  const id = Array.isArray(params.id) ? params.id[0] : params.id;
  const { data, isLoading, isError } = useGetDashboardDetailQuery({ id });

  const goToProfile = () => router.navigate('/profile');
  const gotToCreate = () => router.navigate('/dashboard/create');

  if (isError) {
    return <Redirect href='/' />;
  }

  const attendees = getAttendeeDetails(data?.attendees ?? [], user?.id ?? '');

  return (
    <Screen isScrollable onActionButtonPress={gotToCreate}>
      <Block hasFlexOne>
        <Block height={24} />
        <Block paddingHorizontal={24}>
          <DashboardUserHeader>
            <UserInitials
              lastName={user?.lastName ?? ''}
              firstName={user?.firstName ?? ''}
              onPress={goToProfile}
            />
          </DashboardUserHeader>
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
              <DashboardCard
                data={data}
                variant='big'
                userId={user?.id}
                toggleAttendee={toggleAttendee}
                isToggleAttendLoading={checkIsAttendingLoading(data.id)}
              />
            </Block>

            <Block height={16} />

            <Block paddingHorizontal={10} width='100%'>
              <AttendeesCard data={attendees} />
            </Block>
            <Block height={96} />
          </>
        ) : null}
      </Block>
    </Screen>
  );
}

export { DashboardDetailScreen };
