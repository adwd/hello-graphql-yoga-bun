import { createYoga, createSchema } from 'graphql-yoga';
import { typeDefs } from './graphql/typeDefs.generated';
import { resolvers } from './graphql/resolvers.generated';
import { GraphQLContext, createContext } from './context';
// import { useSofa } from '@graphql-yoga/plugin-sofa';

const yoga = createYoga({
  schema: createSchema<GraphQLContext>({ typeDefs, resolvers }),
  context: createContext,
  plugins: [
    // useSofa({
    //   basePath: '/rest',
    //   swaggerUI: {
    //     endpoint: '/swagger',
    //   },
    // }),
  ],
});

const server = Bun.serve(yoga);

console.info(
  `Server is running on ${new URL(
    yoga.graphqlEndpoint,
    `http://${server.hostname}:${server.port}`,
  )}`,
);
