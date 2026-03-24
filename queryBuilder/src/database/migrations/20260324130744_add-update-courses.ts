import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.alterTable('courses', (table) => {
    table.boolean('certificate').after('timestamps');
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.alterTable('courses', (table) => {
    table.dropColumn('certificate');
  });
}
