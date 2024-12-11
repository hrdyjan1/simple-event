import { format, parseISO } from 'date-fns';

function formatToFullReadableDate(data: string): string | null {
  try {
    const date = parseISO(data);
    return format(data, 'MMMM d, yyyy – h:mm a');
  } catch {
    return null;
  }
}

export { formatToFullReadableDate };
