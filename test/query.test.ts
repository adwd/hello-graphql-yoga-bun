import { expect, test } from 'bun:test';
import { typeDefs } from '../src/graphql/typeDefs.generated';
import { resolvers } from '../src/graphql/resolvers.generated';
import { createYoga, createSchema } from 'graphql-yoga';
import { graphql } from './gql';
import { createExecuter } from './util.js';

const schema = createSchema({ typeDefs, resolvers });
const graphqlEndpoint = '/test-graphql';
const yoga = createYoga({ schema, graphqlEndpoint, logging: false });
const execute = createExecuter(yoga);

test('should handle a GraphQL operation', async () => {
  const UserQuery = graphql(/* GraphQL */ `
    query UserQuery {
      user(id: "1") {
        id
        fullName
      }
    }
  `);

  const result = await execute(UserQuery);

  expect(result.data?.user?.id).toEqual('1');
  expect(result.data?.user?.fullName).toEqual('John Doe');
});
