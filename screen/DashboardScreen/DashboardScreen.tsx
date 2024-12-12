import { Block } from '@/components/Block/Block';
import { useGetDashboardListQuery } from '@/api/baseApi';
import { DashboardCard } from '@/components/DashboardCard/DashboardCard';
import { FlatList, ListRenderItem, Pressable } from 'react-native';
import { DashboardDetailResponse } from '@/api/apiTypes';
import { Link, router } from 'expo-router';
import { Screen } from '@/components/Screen/Screen';
import { useAppSelector } from '@/store/store';
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader';
import { useToggleAttendee } from '@/api/hooks/useToggleAttendee';
import React from 'react';
import { toggleTimelineReducer } from './utils/toggleTimelineReducer';
import { getTimelineFilter } from './utils/getTimelineFilter';

function DashboardScreen() {
  const [cardVariant, toggleCardVariant] = React.useReducer(
    (state) => (state === 'small' ? 'big' : 'small'),
    'big'
  );

  const user = useAppSelector((s) => s.auth.user);
  const { data: dashboardData, refetch, isFetching } = useGetDashboardListQuery();
  const { toggleAttendee, checkIsAttendingLoading } = useToggleAttendee();
  const [eventsTimeline, toggleEventsTimeline] = React.useReducer(toggleTimelineReducer, 'ALL');

  const renderItem: ListRenderItem<DashboardDetailResponse> = ({ item }) => (
    <Link href={{ pathname: '/dashboard/[id]', params: { id: item.id } }} asChild>
      <Pressable>
        <Block paddingHorizontal={10} width='100%'>
          <DashboardCard
            data={item}
            userId={user?.id}
            variant={cardVariant}
            toggleAttendee={toggleAttendee}
            isToggleAttendLoading={checkIsAttendingLoading(item.id)}
          />
        </Block>
      </Pressable>
    </Link>
  );

  const data = dashboardData?.filter(getTimelineFilter(eventsTimeline));

  const goToProfile = () => router.navigate('/profile');
  const gotToCreate = () => router.navigate('/dashboard/create');

  return (
    <Screen onActionButtonPress={gotToCreate}>
      <Block hasFlexOne>
        <FlatList
          data={data}
          onRefresh={refetch}
          refreshing={isFetching}
          renderItem={renderItem}
          ListFooterComponent={() => <Block height={96} />}
          ItemSeparatorComponent={() => <Block height={16} />}
          ListHeaderComponentStyle={{ paddingHorizontal: 24 }}
          ListHeaderComponent={() => (
            <DashboardHeader
              cardVariant={cardVariant}
              eventsTimeline={eventsTimeline}
              lastName={user?.lastName ?? ''}
              firstName={user?.firstName ?? ''}
              onInitialsProfilePress={goToProfile}
              onCardVariantPress={toggleCardVariant}
              onEventsTimelinePress={toggleEventsTimeline}
            />
          )}
        />
      </Block>
    </Screen>
  );
}

export { DashboardScreen };
