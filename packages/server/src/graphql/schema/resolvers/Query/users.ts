import type { QueryResolvers } from './../../../types.generated';
export const users: NonNullable<QueryResolvers['users']> = async (
  _parent,
  _arg,
  ctx,
) => {
  const users = await ctx.prisma.user.findMany();

  return users.map((u) => ({
    __typename: 'User',
    id: u.id.toString(),
    email: u.email,
    fullName: u.name,
    isAdmin: true,
  }));
};
