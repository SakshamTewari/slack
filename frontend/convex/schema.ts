import { defineSchema, defineTable } from 'convex/server';
import { authTables } from '@convex-dev/auth/server';

const schema = defineSchema({
  ...authTables,
  // Other tables
});

export default schema;
