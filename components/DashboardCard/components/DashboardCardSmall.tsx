import React from 'react';
import { DashboardDetailResponse } from '@/api/apiTypes';
import { Card } from '@/components/Card/Card';
import { Block } from '@/components/Block/Block';
import { Typography } from '@/components/Typography/Typography';
import { getToggleVariant } from '../utils/getToggleVariant';
import { formatToFullReadableDate } from '@/utils/date/formatToFullReadableDate';
import { AttendVariant } from '@/api/types/AttendVariant';
import { isDefined } from '@/constants/isDefined';
import { DashboardCardActionButton } from './DashboardCardActionButton';

interface DashboardCardSmallProps {
  userId: string | undefined;
  data: DashboardDetailResponse;
  isToggleAttendLoading?: boolean;
  toggleAttendee?: (id: string, variant: AttendVariant) => void;
}

function DashboardCardSmall(props: DashboardCardSmallProps) {
  const { variant, toggleVariant } = getToggleVariant(props);
  const dateTime = formatToFullReadableDate(props.data.startsAt);

  return (
    <Card minHeight={136}>
      <Block height={3} />

      <Block row>
        <Block width={17} />
        <Block hasFlexOne>
          <Typography numberOfLines={1} fontSize={18} lineHeight={48} color='#323C46'>
            {props.data.title}
          </Typography>
          <Typography numberOfLines={1} fontSize={16} lineHeight={24} color='#949EA8' top={-8}>
            {props.data.description}
          </Typography>
        </Block>
        <Block width={65} />
      </Block>

      <Block height={8} />

      <Block row>
        <Block width={16} />

        <Block hasFlexOne>
          <Typography fontSize={14} lineHeight={24} color='#CACDD0' numberOfLines={1}>
            {dateTime ?? ''}
          </Typography>
          <Typography color='#949EA8' fontSize={14} lineHeight={24}>
            {props.data.attendees.length} of {props.data.capacity}
          </Typography>
        </Block>

        <Block width={8} />

        <Block>
          <Block height={8} />
          {isDefined(variant) ? (
            <DashboardCardActionButton
              variant={variant}
              onPress={toggleVariant}
              isLoading={props.isToggleAttendLoading}
            />
          ) : null}
        </Block>
        <Block width={16} />
      </Block>

      <Block height={16} />
    </Card>
  );
}

export { DashboardCardSmall };
