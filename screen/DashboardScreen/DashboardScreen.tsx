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
import { FloatingButtonCreate } from '@/components/FloatingButtonCreate/FloatingButtonCreate';

function DashboardScreen() {
  const { data, refetch, isFetching } = useGetDashboardListQuery();
  const { toggleAttendee, checkIsAttendingLoading } = useToggleAttendee();
  const user = useAppSelector((s) => s.auth.user);

  const renderItem: ListRenderItem<DashboardDetailResponse> = ({ item }) => (
    <Link href={{ pathname: '/dashboard/[id]', params: { id: item.id } }} asChild>
      <Pressable>
        <Block paddingHorizontal={10} width='100%'>
          <DashboardCard
            data={item}
            userId={user?.id}
            toggleAttendee={toggleAttendee}
            isToggleAttendLoading={checkIsAttendingLoading(item.id)}
          />
        </Block>
      </Pressable>
    </Link>
  );

  const goToProfile = () => router.navigate('/profile');
  const gotToCreate = () => router.navigate('/dashboard/create');

  return (
    <Screen>
      <Block hasFlexOne>
        <FloatingButtonCreate onPress={gotToCreate} />
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
              lastName={user?.lastName ?? ''}
              firstName={user?.firstName ?? ''}
              onInitialsProfilePress={goToProfile}
            />
          )}
        />
      </Block>
    </Screen>
  );
}

export { DashboardScreen };
