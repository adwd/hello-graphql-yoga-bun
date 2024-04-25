import type { QueryResolvers } from './../../../graphql/types.generated';
export const books: NonNullable<QueryResolvers['books']> = async (
  _parent,
  _arg,
  _ctx,
) => {
  /* Implement Query.books resolver logic here */
  throw new Error('Resolver not implemented');
};
