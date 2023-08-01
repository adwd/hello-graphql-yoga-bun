import type { QueryResolvers } from './../../../types.generated';
import { PrismaClient } from '@prisma/client';
export const user: NonNullable<QueryResolvers['user']> = async (
  _parent,
  arg,
  _ctx,
) => {
  const prisma = new PrismaClient();

  const user = await prisma.user.findUnique({
    where: {
      id: parseInt(arg.id),
    },
  });

  if (!user) {
    return null;
  }

  return {
    __typename: 'User',
    fullName: user.name,
    email: user.email,
    id: user.id.toString(),
    isAdmin: true,
  };
};
