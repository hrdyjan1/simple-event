import { parse, add, isValid } from 'date-fns';

function combineDateAndTimeToUTC(date: string, time: string): Date | null {
  const parsedDate = parse(date, 'MMMM d, yyyy', new Date());

  const [hours, minutes] = parse(time, 'h:mm a', new Date()).toTimeString().split(':').map(Number);

  // Combine date and time
  const dateTime = add(parsedDate, {
    hours,
    minutes,
  });

  return isValid(dateTime) ? dateTime : null;
}

export { combineDateAndTimeToUTC };
