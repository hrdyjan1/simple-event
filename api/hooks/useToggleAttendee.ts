import React, { useCallback } from 'react';
import {
  useAttendEventMutation,
  useLazyGetDashboardDetailQuery,
  useLazyGetDashboardListQuery,
  useUnAttendEventMutation,
} from '../baseApi';
import { AttendVariant } from '../types/AttendVariant';
import { router } from 'expo-router';

function useToggleAttendee() {
  const [loadingIdList, setLoadingIdList] = React.useState<string[]>([]);

  const [attendEvent] = useAttendEventMutation();
  const [unAttendEvent] = useUnAttendEventMutation();
  const [getDashboardList] = useLazyGetDashboardListQuery();
  const [getDashboardDetail] = useLazyGetDashboardDetailQuery();

  const updateDashboardData = (id: string) =>
    Promise.allSettled([getDashboardList(), getDashboardDetail({ id })]);

  const toggleAttendee = useCallback(
    async (id: string, variant: AttendVariant) => {
      setLoadingIdList((ids) => [...ids, id]);
      if (variant === 'join') {
        await attendEvent({ id }).then(() => updateDashboardData(id));
      } else if (variant === 'leave') {
        await unAttendEvent({ id }).then(() => updateDashboardData(id));
      } else if (variant === 'edit') {
        router.navigate(`/dashboard/update/${id}`);
      }
      setLoadingIdList((ids) => ids.filter((i) => i !== id));
    },
    [attendEvent]
  );

  const checkIsAttendingLoading = (id: string) => loadingIdList.includes(id);

  return { toggleAttendee, checkIsAttendingLoading };
}

export { useToggleAttendee };
