import { createYoga, createSchema } from 'graphql-yoga';
import { bench, run } from 'mitata';
import { typeDefs } from '../src/graphql/typeDefs.generated';
import { resolvers } from '../src/graphql/resolvers.generated';

bench('setup', () => {
  const schema = createSchema({ typeDefs, resolvers });
  const graphqlEndpoint = '/test-graphql';
  const _yoga = createYoga({ schema, graphqlEndpoint });
});

bench('setup w/o cache', () => {
  const schema = createSchema({ typeDefs, resolvers });
  const graphqlEndpoint = '/test-graphql';
  const _yoga = createYoga({
    schema,
    graphqlEndpoint,
    parserCache: false,
    validationCache: false,
  });
});

(() => {
  const schema = createSchema({ typeDefs, resolvers });
  const graphqlEndpoint = '/test-graphql';
  const yoga = createYoga({ schema, graphqlEndpoint, logging: false });

  bench('query', async () => {
    const _res = await yoga.fetch(`http://yoga/test-graphql`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: /* GraphQL */ `
          {
            user(id: "1") {
              id
              fullName
            }
          }
        `,
      }),
    });
  });
})();

(() => {
  const schema = createSchema({ typeDefs, resolvers });
  const graphqlEndpoint = '/test-graphql';
  const yoga = createYoga({ schema, graphqlEndpoint, logging: false, parserCache: false, validationCache: false });

  bench('query w/o cache', async () => {
    const _res = await yoga.fetch(`http://yoga/test-graphql`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: /* GraphQL */ `
          {
            user(id: "1") {
              id
              fullName
            }
          }
        `,
      }),
    });
  });
})();

await run();
