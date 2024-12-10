import { Block } from '@/components/Block/Block';
import { Separator } from '@/components/Separator/Separator';
import { useGetDashboardListQuery } from '@/api/baseApi';
import { DashboardCard } from '@/components/DashboardCard/DashboardCard';
import { Button, FlatList, ListRenderItem } from 'react-native';
import { DashboardDetailResponse } from '@/api/apiTypes';
import { Link } from 'expo-router';

function Dashboard() {
  const { data } = useGetDashboardListQuery();

  const renderItem: ListRenderItem<DashboardDetailResponse> = ({ item }) => (
    <Link href={{ pathname: '/dashboard/[id]', params: { id: item.id } }}>
      <DashboardCard data={item} />
    </Link>
  );

  return (
    <Block hasFlexOne align='center'>
      <FlatList data={data} renderItem={renderItem} ItemSeparatorComponent={Separator} />
    </Block>
  );
}

export default Dashboard;
