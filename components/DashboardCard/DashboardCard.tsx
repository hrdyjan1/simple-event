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
import { Card } from '../Card/Card';
import { AttendVariant } from '@/api/types/AttendVariant';
import { getToggleVariant } from './utils/getToggleVariant';
import { DashboardCardSmall } from './components/DashboardCardSmall';

interface Props {
  variant: 'small' | 'big';
  userId: string | undefined;
  data: DashboardDetailResponse;
  isToggleAttendLoading?: boolean;
  toggleAttendee?: (id: string, variant: AttendVariant) => void;
}

function DashboardCard(props: Props) {
  if (props.variant === 'small') {
    return <DashboardCardSmall {...props} />;
  }

  const { variant, toggleVariant } = getToggleVariant(props);
  const dateTime = formatToFullReadableDate(props.data.startsAt);

  return (
    <Card minHeight={296}>
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
          <DashboardCardActionButton
            variant={variant}
            onPress={toggleVariant}
            isLoading={props.isToggleAttendLoading}
          />
        ) : null}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
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
