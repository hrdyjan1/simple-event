import { UserResponse } from '@/api/apiTypes';
import { isDefined } from '@/constants/isDefined';

// TODO: Test this function
function getAttendeeDetails(attendees: UserResponse[], userId: string) {
  return attendees
    .reduce(
      (result, attendee) => (attendee.id === userId ? result : [...result, attendee]),
      [attendees.find((attendee) => attendee.id === userId)]
    )
    .filter(isDefined)
    .map((attendee) => ({
      name: attendee.id === userId ? 'You' : `${attendee.firstName} ${attendee.lastName}`,
      isOutline: attendee.id === userId,
    }));
}

export { getAttendeeDetails };
