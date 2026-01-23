// ===========================================
// AULA 06 - Tipagem em Arrays
// ===========================================

// Sintaxe 1: tipo[]
let numeros: number[] = [1, 2, 3, 4, 5];
let nomes: string[] = ['Ana', 'João', 'Maria'];

// Sintaxe 2: Array<tipo> (genéricos)
let valores: Array<number> = [10, 20, 30];
let palavras: Array<string> = ['olá', 'mundo'];

// Array misto (união de tipos)
let misturado: (string | number)[] = ['texto', 42, 'outro', 100];

// Array de objetos
let usuarios: { nome: string; idade: number }[] = [
  { nome: 'Kauã', idade: 25 },
  { nome: 'Ana', idade: 30 },
];

// Métodos de array funcionam com autocompletar!
numeros.push(6); // ✅ OK
// numeros.push("sete"); // ❌ Erro: string não é number

// Iterando com tipo automático
nomes.forEach((nome) => {
  console.log(nome.toUpperCase()); // TypeScript sabe que "nome" é string!
});

export {};
