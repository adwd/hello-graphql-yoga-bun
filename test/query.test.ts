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
