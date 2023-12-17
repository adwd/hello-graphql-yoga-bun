import { expect, test } from 'bun:test';
import { typeDefs } from '../src/graphql/typeDefs.generated';
import { resolvers } from '../src/graphql/resolvers.generated';
import { createYoga, createSchema } from 'graphql-yoga';
import { graphql } from './gql/index.js';
import { createExecuter } from './util.js';
import { createContext } from '../src/context';

const schema = createSchema({ typeDefs, resolvers });
const graphqlEndpoint = '/test-graphql';
const yoga = createYoga({
  schema,
  context: createContext,
  graphqlEndpoint,
  logging: true,
});
const execute = createExecuter(yoga);

test('should handle a GraphQL operation', async () => {
  const BookQuery = graphql(/* GraphQL */ `
    query BookQuery {
      book(id: "1") {
        id
        isbn
      }
    }
  `);

  const result = await execute(BookQuery);

  expect(result.data?.book?.id).toEqual('book:1');
  expect(result.data?.book?.isbn).toEqual('isbn');
});

test('should create a user and get it', async () => {
  const CreateUserMutation = graphql(/* GraphQL */ `
    mutation CreateUserMutation {
      createUser(input: { fullName: "Test", email: "example@example.com" }) {
        user {
          id
          fullName
          email
          isAdmin
        }
      }
    }
  `);

  const result = await execute(CreateUserMutation);

  expect(result.data?.createUser?.user?.id).toEqual('1');
  expect(result.data?.createUser?.user?.fullName).toEqual('Test');

  const UserQuery = graphql(/* GraphQL */ `
    query UserQuery {
      user(id: "1") {
        id
        fullName
        email
        isAdmin
      }
    }
  `);

  const result2 = await execute(UserQuery);

  expect(result2.data?.user?.id).toEqual('1');
  expect(result2.data?.user?.fullName).toEqual('Test');
  expect(result2.data?.user?.email).toEqual('example@example.com');
  expect(result2.data?.user?.isAdmin).toEqual(true);
});
