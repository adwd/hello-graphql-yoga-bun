/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
import type { Resolvers } from './types.generated';
import { Book } from './schema/resolvers/Book';
import { CreateDiaryPayload } from './schema/resolvers/CreateDiaryPayload';
import { CreateUserPayload } from './schema/resolvers/CreateUserPayload';
import { Diary } from './schema/resolvers/Diary';
import { createDiary as Mutation_createDiary } from './schema/resolvers/Mutation/createDiary';
import { createUser as Mutation_createUser } from './schema/resolvers/Mutation/createUser';
import { markBookAsRead as Mutation_markBookAsRead } from './schema/resolvers/Mutation/markBookAsRead';
import { book as Query_book } from './schema/resolvers/Query/book';
import { diaries as Query_diaries } from './schema/resolvers/Query/diaries';
import { user as Query_user } from './schema/resolvers/Query/user';
import { users as Query_users } from './schema/resolvers/Query/users';
import { User } from './schema/resolvers/User';
export const resolvers: Resolvers = {
  Query: {
    book: Query_book,
    diaries: Query_diaries,
    user: Query_user,
    users: Query_users,
  },
  Mutation: {
    createDiary: Mutation_createDiary,
    createUser: Mutation_createUser,
    markBookAsRead: Mutation_markBookAsRead,
  },

  Book: Book,
  CreateDiaryPayload: CreateDiaryPayload,
  CreateUserPayload: CreateUserPayload,
  Diary: Diary,
  User: User,
};
