import { createYoga, createSchema } from 'graphql-yoga';
import { typeDefs } from './graphql/typeDefs.generated';
import { resolvers } from './graphql/resolvers.generated';
import { useSofaWithSwaggerUI } from '@graphql-yoga/plugin-sofa';

const yoga = createYoga({
  schema: createSchema({ typeDefs, resolvers }),
  plugins: [
    useSofaWithSwaggerUI({
      basePath: '/rest',
      swaggerUIEndpoint: '/swagger',
      servers: [
        {
          url: '/', // Specify Server's URL.
          description: 'Development server',
        },
      ],
      info: {
        title: 'Example API',
        version: '1.0.0',
      },
    }),
  ],
});
const server = Bun.serve(yoga);

console.info(`Server is running on ${new URL(yoga.graphqlEndpoint, `http://${server.hostname}:${server.port}`)}`);
