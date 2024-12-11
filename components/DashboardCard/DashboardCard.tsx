import { DashboardDetailResponse } from '@/api/apiTypes';
import React from 'react';
import { Block } from '../Block/Block';
import { Typography } from '../Typography/Typography';
import { StyleSheet, Text, View } from 'react-native';
import { DashboardCardActionButton } from './components/DashboardCardActionButton';
import { isDefined } from '@/constants/isDefined';
import { Nullish } from '@/types/Nullish';
import { formatToFullReadableDate } from '@/utils/date/formatToFullReadableDate';
import { Icon } from '../Icon/Icon';

interface Props {
  data: DashboardDetailResponse;
  onPress?: () => void;
  userId?: string;
}

function getActionVariant(userId: string | Nullish, data: DashboardDetailResponse) {
  if (userId === data.ownerId) {
    return 'edit' as const;
  } else if (data.attendees.find((a) => userId === a.id)) {
    return 'leave' as const;
  } else if (data.attendees.length < data.capacity) {
    return 'join' as const;
  } else {
    return null;
  }
}

function DashboardCard(props: Props) {
  const variant = getActionVariant(props.userId, props.data);
  const dateTime = formatToFullReadableDate(props.data.startsAt);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.content}>
          {isDefined(dateTime) ? (
            <>
              <Typography fontSize={14} lineHeight={24} color='#CACDD0'>
                {dateTime}
              </Typography>
              <Block height={8} />
            </>
          ) : null}
          <Typography fontSize={22} lineHeight={48} color='#323C46'>
            {props.data.title}
          </Typography>
          <Typography fontSize={14} lineHeight={24} color='#7D7878' top={-10}>
            {props.data.owner.firstName} {props.data.owner.lastName}
          </Typography>
          <Block height={32} />
          <Text style={styles.description}>{props.data.description}</Text>
        </View>
        <View style={styles.footer}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Icon name='person' size={16} color='#949EA8' />
            <Block width={8} />
            <Typography color='#949EA8' fontSize={14} lineHeight={24}>
              {props.data.attendees.length} of {props.data.capacity}
            </Typography>
          </View>
          {isDefined(variant) ? (
            <DashboardCardActionButton variant={variant} onPress={() => {}} />
          ) : null}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: '100%',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    minHeight: 296,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },
  content: {
    paddingLeft: 24,
    paddingTop: 24,
    paddingBottom: 16,
    paddingRight: 53,
  },
  date: {
    fontSize: 12,
    color: '#888',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  author: {
    fontSize: 14,
    color: '#555',
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  footer: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  participants: {
    fontSize: 14,
    color: '#555',
  },
  editButton: {
    backgroundColor: '#eee',
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  editText: {
    fontSize: 14,
    color: '#007BFF',
    fontWeight: 'bold',
  },
});

export { DashboardCard };
