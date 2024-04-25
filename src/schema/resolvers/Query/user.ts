import type { QueryResolvers } from './../../../graphql/types.generated';

export const user: NonNullable<QueryResolvers['user']> = async (
  _parent,
  arg,
  ctx,
) => {
  const user = await ctx.prisma.user.findUnique({
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
