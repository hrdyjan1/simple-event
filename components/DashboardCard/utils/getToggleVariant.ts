import { DashboardDetailResponse } from '@/api/apiTypes';
import { isDefined } from '@/constants/isDefined';
import { Nullish } from '@/types/Nullish';
import { AttendVariant } from '@/api/types/AttendVariant';

function getActionVariant(
  userId: string | Nullish,
  data: DashboardDetailResponse
): AttendVariant | null {
  if (userId === data.ownerId) {
    return 'edit';
  } else if (data.attendees.find((a) => userId === a.id)) {
    return 'leave';
  } else if (data.attendees.length < data.capacity) {
    return 'join';
  } else {
    return null;
  }
}

type ToggleVariantParams = {
  userId?: string;
  data: DashboardDetailResponse;
  toggleAttendee?: (id: string, variant: AttendVariant) => void;
};

function getToggleVariant(params: ToggleVariantParams) {
  const variant = getActionVariant(params.userId, params.data);

  const toggleVariant = () => {
    if (isDefined(params.toggleAttendee) && variant) {
      params.toggleAttendee(params.data.id, variant);
    }
  };

  return { variant, toggleVariant };
}

export { getToggleVariant };
