import { Block } from '@/components/Block/Block';
import { useGetDashboardListQuery } from '@/api/baseApi';
import { DashboardCard } from '@/components/DashboardCard/DashboardCard';
import { FlatList, ListRenderItem } from 'react-native';
import { DashboardDetailResponse } from '@/api/apiTypes';
import { Link } from 'expo-router';
import { Typography } from '@/components/Typography/Typography';
import { Screen } from '@/components/Screen/Screen';

function Dashboard() {
  const { data } = useGetDashboardListQuery();

  const renderItem: ListRenderItem<DashboardDetailResponse> = ({ item }) => (
    <Link href={{ pathname: '/dashboard/[id]', params: { id: item.id } }}>
      <DashboardCard data={item} />
    </Link>
  );

  return (
    <Screen>
      <Link href='/profile'>
        <Typography>Profile</Typography>
      </Link>
      <Block height={16} backgroundColor='transparent' />
      <FlatList
        data={data}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <Block height={16} backgroundColor='transparent' />}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </Screen>
  );
}

export default Dashboard;
