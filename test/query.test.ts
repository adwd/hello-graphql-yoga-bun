import { expect, test } from 'bun:test';
import { typeDefs } from '../src/graphql/typeDefs.generated';
import { resolvers } from '../src/graphql/resolvers.generated';

import { createYoga, createSchema } from 'graphql-yoga';

const schema = createSchema({ typeDefs, resolvers });
const graphqlEndpoint = '/test-graphql';
const yoga = createYoga({ schema, graphqlEndpoint, logging: false });

test('should handle a GraphQL operation', async () => {
  const response = await run(/* GraphQL */ `
    {
      user(id: "1") {
        id
        fullName
      }
    }
  `);

  expect(response.status).toBe(200);
  const body = await response.json();
  expect(body.errors).toBeUndefined();
  expect(body.data.user.id).toBe('1');
});

async function run(operation: string) {
  return await yoga.fetch(`http://yoga/test-graphql`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: operation,
    }),
  });
}
