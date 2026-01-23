/**
 * ===========================================
 * AULA 03 - Tipos Primitivos em TypeScript
 * ===========================================
 *
 * Os tipos primitivos mais comuns são:
 * - string: texto
 * - number: números (inteiros e decimais)
 * - boolean: verdadeiro ou falso
 */

// -------------------------------------------
// 1. VARIÁVEIS SEM TIPAGEM EXPLÍCITA (any implícito)
// -------------------------------------------

/**
 * Quando NÃO definimos o tipo da variável, ela aceita qualquer tipo.
 * Isso acontece porque o TypeScript infere o tipo como "any".
 * Obs: Evite usar isso em projetos reais!
 */
let username;

username = 'Peixe'; // string
username = 12; // number
username = true; // boolean

// -------------------------------------------
// 2. VARIÁVEIS COM TIPAGEM EXPLÍCITA
// -------------------------------------------

/**
 * Quando definimos o tipo da variável, o TypeScript
 * não permite atribuir valores de outros tipos.
 * Isso nos ajuda a evitar erros em tempo de desenvolvimento!
 */
let msg: string;

// msg = 12; // ❌ Erro: Type 'number' is not assignable to type 'string'

msg = 'Olá eu sou uma String'; // ✅ Correto!
