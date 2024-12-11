import { Block } from '@/components/Block/Block';
import { useGetDashboardListQuery } from '@/api/baseApi';
import { DashboardCard } from '@/components/DashboardCard/DashboardCard';
import { FlatList, ListRenderItem } from 'react-native';
import { DashboardDetailResponse } from '@/api/apiTypes';
import { Link, router } from 'expo-router';
import { Screen } from '@/components/Screen/Screen';
import { useAppSelector } from '@/store/store';
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader';

function DashboardScreen() {
  const { data } = useGetDashboardListQuery();
  const user = useAppSelector((s) => s.auth.user);

  const renderItem: ListRenderItem<DashboardDetailResponse> = ({ item }) => (
    <Link href={{ pathname: '/dashboard/[id]', params: { id: item.id } }}>
      <Block paddingHorizontal={10} width='100%'>
        <DashboardCard data={item} userId={user?.id} />
      </Block>
    </Link>
  );

  const goToProfile = () => router.navigate('/profile');

  return (
    <Screen>
      <FlatList
        data={data}
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
    </Screen>
  );
}

export { DashboardScreen };
