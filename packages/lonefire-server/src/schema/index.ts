import * as NexusSchema from 'nexus';
import { nexusPrisma } from 'nexus-plugin-prisma';
import * as path from 'path';

import * as types from './types';

export default NexusSchema.makeSchema({
  types,
  plugins: [
    nexusPrisma({
      experimentalCRUD: true,
    }),
    NexusSchema.connectionPlugin(),
  ],
  outputs: {
    schema: path.join(__dirname, '../../../lonefire-client/src/schema/schema.graphql'),
    typegen: path.join(__dirname, '../../node_modules/@types/nexus-typegen/index.d.ts'),
  },
  contextType: {
    module: require.resolve('../context'),
    export: 'Context',
  },
  sourceTypes: {
    modules: [
      {
        module: require.resolve('../../node_modules/.prisma/client/index.d.ts'),
        alias: 'prisma',
      },
    ],
  },
});