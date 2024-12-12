import { DashboardDetailResponse } from '@/api/apiTypes';
import { useGetDashboardListQuery } from '@/api/baseApi';
import { Block } from '@/components/Block/Block';
import { DashboardCard } from '@/components/DashboardCard/DashboardCard';
import { Screen } from '@/components/Screen/Screen';
import { useAppSelector } from '@/store/store';
import { Link } from 'expo-router';
import { FlatList, ListRenderItem } from 'react-native';
import { ProfileScreenHeader } from './components/ProfileScreenHeader';
import React from 'react';
import { useToggleAttendee } from '@/api/hooks/useToggleAttendee';

function ProfileScreen() {
  const user = useAppSelector((s) => s.auth.user);
  const { data } = useGetDashboardListQuery();
  const myEvents = data?.filter((event) => event.owner.id === user?.id);

  const { toggleAttendee, checkIsAttendingLoading } = useToggleAttendee();
  const [cardVariant, toggleCardVariant] = React.useReducer(
    (state) => (state === 'small' ? 'big' : 'small'),
    'big'
  );

  const renderItem: ListRenderItem<DashboardDetailResponse> = ({ item }) => (
    <Link href={{ pathname: '/dashboard/[id]', params: { id: item.id } }}>
      <Block paddingHorizontal={10} width='100%'>
        <DashboardCard
          data={item}
          userId={user?.id}
          variant={cardVariant}
          toggleAttendee={toggleAttendee}
          isToggleAttendLoading={checkIsAttendingLoading(item.id)}
        />
      </Block>
    </Link>
  );

  return (
    <Screen>
      <FlatList
        data={myEvents}
        renderItem={renderItem}
        ListFooterComponent={() => <Block height={16} />}
        ItemSeparatorComponent={() => <Block height={16} />}
        ListHeaderComponent={() => (
          <ProfileScreenHeader
            cardVariant={cardVariant}
            email={user?.email ?? ''}
            lastName={user?.lastName ?? ''}
            firstName={user?.firstName ?? ''}
            onCardVariantPress={toggleCardVariant}
          />
        )}
      />
    </Screen>
  );
}

export { ProfileScreen };
