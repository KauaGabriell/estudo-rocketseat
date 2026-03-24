import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // Cria a tabela "courses" — estrutura genérica para estudo
  await knex.schema.createTable("courses", (table) => {
    // Chave primária auto-incremento — identifica unicamente cada curso
    table.increments("id").primary();

    // Nome do curso — obrigatório, pois todo curso precisa de um título
    table.text("name").notNullable();

    // Descrição opcional — detalhes sobre o conteúdo do curso
    table.text("description").nullable();

    // Duração em horas — permite filtrar/ordenar cursos por tempo
    table.integer("duration_in_hours").nullable();

    // Timestamps automáticos — created_at e updated_at para rastreabilidade
    table.timestamps(true, true);
  });
}

export async function down(knex: Knex): Promise<void> {
  // Reverte a migration removendo a tabela inteira
  await knex.schema.dropTableIfExists("courses");
}

