import { z } from 'zod';

const signInStateSchema = z.object({
  email: z.string().email('Wrong email format').max(128, 'Too long email'),
  password: z.string().min(1, 'Password is required'),
});

export { signInStateSchema };
