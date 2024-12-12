import React from 'react';
import { View } from 'react-native';
import { Card } from '../Card/Card';
import { Block } from '../Block/Block';
import { Chip } from '../Chip/Chip';
import { Typography } from '../Typography/Typography';

interface Props {
  data: { name: string; isOutline: boolean }[];
}

function AttendeesCard(props: Props) {
  return (
    <Card>
      <Block paddingHorizontal={24}>
        <Block height={10} />
        <Typography fontSize={22} lineHeight={48} color='#323C46'>
          Attendees
        </Typography>
        <Block height={6} />
        {props.data.length > 0 ? (
          <>
            <Block wrap row gap={8}>
              {props.data.map((attendee) => (
                <Chip key={attendee.name} text={attendee.name} isOutline={attendee.isOutline} />
              ))}
            </Block>
            <Block height={32} />
          </>
        ) : null}
      </Block>
    </Card>
  );
}

export { AttendeesCard };
