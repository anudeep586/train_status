import { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
        return knex.schema.createTable('bookgram', (table: Knex.TableBuilder) => {
        table.uuid('id').primary().notNullable().unique();
        table.string('bookName').notNullable().unique();
        table.string('author').notNullable();
        table.integer('pages').notNullable();
      })
}


export async function down(knex: Knex): Promise<void> {
}

