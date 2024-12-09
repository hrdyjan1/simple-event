import { z } from 'zod';

const responseHeadersSchema = z.object({
  headers: z.object({
    get: z.function().args(z.string()).returns(z.string().optional()),
  }),
});

const metaSchema = z.object({
  response: responseHeadersSchema.optional(),
});

const userSchema = z.object({
  id: z.string().uuid(),
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  createdAt: z.string().datetime(),
  updatedAt: z.string().datetime(),
});

export { metaSchema, userSchema };
