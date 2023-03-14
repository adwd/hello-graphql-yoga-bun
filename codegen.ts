import type { CodegenConfig } from '@graphql-codegen/cli';
import { preset } from '@eddeee888/gcg-typescript-resolver-files';

const config: CodegenConfig = {
  schema: 'src/schema/*.graphql',
  generates: {
    'src/graphql': {
      preset,
      presetConfig: {
        typesPluginsConfig: {
          contextType: './context#Context',
        },
      },
    },
    './test/gql/': {
      documents: ['test/**/*.ts'],
      preset: 'client-preset',
    },
  },
  hooks: { afterAllFileWrite: ['prettier --write'] },
};
export default config;
