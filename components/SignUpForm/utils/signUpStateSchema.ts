import { z } from 'zod';

const signUpStateSchema = z
  .object({
    email: z.string().email('Wrong email format').max(128, 'Too long email'),
    firstName: z.string().min(1, 'First name is required').max(128, 'First name is too long'),
    lastName: z.string().min(1, 'Last name is required').max(128, 'Last name is too long'),
    password: z.string().min(6, 'Password is required').max(128, 'Password is too long'),
    repeatPassword: z.string().min(6, 'Password is required').max(128, 'Password is too long'),
  })
  .refine((data) => data.password === data.repeatPassword, {
    message: 'Passwords do not match',
    path: ['repeatPassword'],
  });

export { signUpStateSchema };
