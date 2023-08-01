/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Book } from './schema/resolvers/Book';
import { CreateUserPayload } from './schema/resolvers/CreateUserPayload';
import { createUser as Mutation_createUser } from './schema/resolvers/Mutation/createUser';
import { markBookAsRead as Mutation_markBookAsRead } from './schema/resolvers/Mutation/markBookAsRead';
import { book as Query_book } from './schema/resolvers/Query/book';
import { user as Query_user } from './schema/resolvers/Query/user';
import { User } from './schema/resolvers/User';
export const resolvers: Resolvers = {
  Query: { book: Query_book, user: Query_user },
  Mutation: {
    createUser: Mutation_createUser,
    markBookAsRead: Mutation_markBookAsRead,
  },

  Book: Book,
  CreateUserPayload: CreateUserPayload,
  User: User,
};
