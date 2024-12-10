import { useGetDashboardDetailQuery } from '@/api/baseApi';
import { Block } from '@/components/Block/Block';
import { Typography } from '@/components/Typography/Typography';
import { Link, useLocalSearchParams } from 'expo-router';
import { Button } from 'react-native';

function DashboardDetail() {
  const params = useLocalSearchParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const { data } = useGetDashboardDetailQuery({ id });

  return (
    <Block hasFlexOne>
      <Typography>ID: {id}</Typography>
      <Typography>Title: {data?.title}</Typography>
      <Typography>Capacity: {data?.capacity}</Typography>
      <Link href={'/(app)/dashboard/create'} asChild>
        <Button title='Create' onPress={() => {}} />
      </Link>
    </Block>
  );
}

export default DashboardDetail;
