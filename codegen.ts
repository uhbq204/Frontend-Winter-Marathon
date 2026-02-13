
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  ignoreNoDocuments: true,
  schema: "http://localhost:3200/graphql",
  documents: ["src/shared/graphql/**/*.graphql", "src/features/**/*.graphql"],
  generates: {
    'src/__generated__/output.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo'
      ],
      config: {
        enumAsConst: true
      }
    },
    'schema.json': {
      plugins: ['introspection']
    }
  }
};

export default config;
