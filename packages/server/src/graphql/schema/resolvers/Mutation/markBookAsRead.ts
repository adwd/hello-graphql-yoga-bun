import type { MutationResolvers } from './../../../types.generated';
export const markBookAsRead: NonNullable<
  MutationResolvers['markBookAsRead']
> = async (_parent, arg, _ctx) => {
  const id = arg.id;

  return {
    __typename: 'Book',
    id: 'book:' + id,
    isbn: 'isbn',
  };
};
