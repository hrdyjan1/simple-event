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
  const initials = `${user?.firstName?.[0]}${user?.lastName?.[0]}`;

  const renderItem: ListRenderItem<DashboardDetailResponse> = ({ item }) => (
    <Link href={{ pathname: '/dashboard/[id]', params: { id: item.id } }}>
      <DashboardCard data={item} userId={user?.id} />
    </Link>
  );

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
            initials={initials}
            onInitialsProfilePress={() => router.navigate('/profile')}
          />
        )}
      />
    </Screen>
  );
}

export { DashboardScreen };
