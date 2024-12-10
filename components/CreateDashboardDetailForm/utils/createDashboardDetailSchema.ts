import { z } from 'zod';

const CreateDashboardDetailStateSchema = z.object({
  title: z.string().min(3, 'Title is required').max(128, 'Title is too long'),
  description: z.string().min(6, 'Description is required').max(256, 'Description is too long'),
  date: z.string().regex(/^[A-Za-z]+ (\d{1,2}), \d{4}$/, {
    message: 'Invalid date format (e.g., April 7, 2017)',
  }),
  time: z.string().regex(/^((0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM|am|pm))$/, {
    message: 'Invalid time format (e.g., 2:17 PM)',
  }),
  capacity: z
    .string()
    .refine((val) => !isNaN(Number(val)), { message: 'Invalid number' })
    .refine((val) => Number(val) === Math.floor(Number(val)), { message: 'Invalid number' })
    .refine((val) => Number(val) > 0, { message: 'Invalid number' }),
});

export { CreateDashboardDetailStateSchema };
