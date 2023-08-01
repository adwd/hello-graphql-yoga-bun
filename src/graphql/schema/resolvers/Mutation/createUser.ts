import { PrismaClient } from '@prisma/client';
import type { MutationResolvers } from './../../../types.generated';
export const createUser: NonNullable<MutationResolvers['createUser']> = async (
  _parent,
  arg,
  _ctx,
) => {
  const client = new PrismaClient();

  const result = await client.user.create({
    data: {
      name: arg.input.fullName,
      email: arg.input.email,
    },
  });

  return {
    __typename: 'CreateUserPayload',
    user: {
      email: result.email,
      fullName: result.name,
      id: result.id.toString(),
      isAdmin: false,
      __typename: 'User',
    },
  };
};
