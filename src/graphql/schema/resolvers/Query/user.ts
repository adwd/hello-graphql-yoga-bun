import type { QueryResolvers } from './../../../types.generated';
export const user: NonNullable<QueryResolvers['user']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return {
    __typename: 'User',
    fullName: 'John Doe',
    id: '1',
    isAdmin: true,
  };
};
