import { createYoga, createSchema } from 'graphql-yoga';
import { typeDefs } from './graphql/typeDefs.generated';
import { resolvers } from './graphql/resolvers.generated';

const yoga = createYoga({ schema: createSchema({ typeDefs, resolvers }) });
const server = Bun.serve(yoga);

console.info(`Server is running on ${new URL(yoga.graphqlEndpoint, `http://${server.hostname}:${server.port}`)}`);
