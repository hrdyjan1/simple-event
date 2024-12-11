import { DashboardDetailResponse } from '@/api/apiTypes';
import { useGetDashboardListQuery } from '@/api/baseApi';
import { Block } from '@/components/Block/Block';
import { DashboardCard } from '@/components/DashboardCard/DashboardCard';
import { Screen } from '@/components/Screen/Screen';
import { Separator } from '@/components/Separator/Separator';
import { Typography } from '@/components/Typography/Typography';
import { resetAuth } from '@/store/slices/auth';
import { useAppSelector } from '@/store/store';
import { Link } from 'expo-router';
import { Button, FlatList, ListRenderItem } from 'react-native';
import { useDispatch } from 'react-redux';

function ProfileScreen() {
  const dispatch = useDispatch();
  const user = useAppSelector((s) => s.auth.user);
  const { data } = useGetDashboardListQuery();
  const myEvents = data?.filter((event) => event.owner.id === user?.id);

  const renderItem: ListRenderItem<DashboardDetailResponse> = ({ item }) => (
    <Link href={{ pathname: '/dashboard/[id]', params: { id: item.id } }}>
      <Block paddingHorizontal={10} width='100%'>
        <DashboardCard data={item} />
      </Block>
    </Link>
  );

  return (
    <Screen>
      <Button title='Log out' onPress={() => dispatch(resetAuth())} />
      <Typography>{`${user?.firstName} ${user?.lastName}`}</Typography>
      <Typography>My Events</Typography>
      <FlatList data={myEvents} renderItem={renderItem} ItemSeparatorComponent={Separator} />
    </Screen>
  );
}

export { ProfileScreen };
