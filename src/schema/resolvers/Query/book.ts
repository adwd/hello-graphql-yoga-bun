import type { QueryResolvers } from './../../../graphql/types.generated';
export const book: NonNullable<QueryResolvers['book']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  return {
    __typename: 'Book',
    id: 'book:1',
    isbn: 'isbn',
  };
};
