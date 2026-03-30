import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Limpa a tabela antes de inserir para evitar duplicatas em re-execuções
    await knex("courses").del();

    await knex("courses").insert([
        {
            name: "JavaScript Avançado",
            description: "Closures, prototypes, event loop e padrões assíncronos",
            duration_in_hours: 40,
            certificate: true,
        },
        {
            name: "React do Zero",
            description: "Componentes, hooks, estado e ciclo de vida",
            duration_in_hours: 60,
            certificate: true,
        },
        {
            name: "Node.js com Express",
            description: "APIs REST, middlewares e autenticação JWT",
            duration_in_hours: 35,
            certificate: false,
        },
        {
            name: "SQL para Devs",
            description: "Joins, subqueries, índices e otimização de queries",
            duration_in_hours: 20,
            certificate: true,
        },
        {
            name: "TypeScript Fundamentos",
            description: null,
            duration_in_hours: 15,
            certificate: false,
        },
    ]);
};
