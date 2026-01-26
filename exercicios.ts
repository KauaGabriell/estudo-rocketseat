// ============================================
// EXERCÍCIOS - FIXAR OS CONTEÚDOS
// ============================================

// EXERCÍCIO 1: Tipagem de Variáveis
// --------------------------------
// Crie variáveis com os tipos corretos:
// - nome (string)
// - idade (number)
// - ativo (boolean)

// SEU CÓDIGO AQUI:
let name: string;
let idade: number;
let ativo: boolean;

// EXERCÍCIO 2: Tipagem em Funções
// --------------------------------
// Crie uma função que:
// - Receba dois números como parâmetro
// - Some os dois números
// - Retorne o resultado

// SEU CÓDIGO AQUI:
function soma(num1: number, num2: number) {
  return num1 + num2;
}

// EXERCÍCIO 3: Tipagem de Objetos
// --------------------------------
// Crie um type "Pessoa" que tenha:
// - nome (string)
// - email (string)
// - telefone (string - OPCIONAL)
//
// Depois crie uma variável do tipo Pessoa com dados

// SEU CÓDIGO AQUI:
type Pessoa = {
  nome: string;
  email: string;
  telefone?: string;
};

let pessoa01: Pessoa = { nome: 'Peixe', email: 'peixe@gmail.com' };
console.log(pessoa01);

// EXERCÍCIO 4: Union Types
// --------------------------------
// Crie uma função que aceite string OU número como parâmetro
// Se for string, retorne o texto em MAIÚSCULA
// Se for número, retorne o número multiplicado por 2

// SEU CÓDIGO AQUI:

function UnionTypes(elemento: string | number) {
  if (typeof elemento == 'string') {
    return elemento.toLocaleUpperCase();
  } else {
    return elemento * 2;
  }
}

// EXERCÍCIO 5: Array com Tipos
// --------------------------------
// Crie um array de números
// Crie uma função que receba esse array e retorne a soma de todos os números

// SEU CÓDIGO AQUI:

let numbers: number[] = [1, 2, 3, 4];
function somaTudo(arrayNumbers: number[]) {
  const somaTotal = arrayNumbers.reduce((acc, numeros) => acc + numeros, 0);
  return somaTotal;
}

// EXERCÍCIO 6: null e undefined
// --------------------------------
// Crie uma função que:
// - Receba um parâmetro "nome" que pode ser string ou null
// - Se for null, retorne "Nome não informado"
// - Se for string, retorne "Olá, {nome}!"

// SEU CÓDIGO AQUI:

function ex06(element: string | null) {
  if (element === null) {
    return 'Nome não informado';
  } else {
    return `Olá ${element}`;
  }
}

// EXERCÍCIO 7: Type Alias para Produto
// --------------------------------
// Crie um type "Produto" com:
// - id (number)
// - titulo (string)
// - preco (number)
// - estoque (number - OPCIONAL)
//
// Crie uma função que receba um array de Produtos
// e retorne apenas os produtos com preço menor que 100

// SEU CÓDIGO AQUI:

type Produto = {
  id: number;
  titulo: string;
  preco: number;
  estoque?: number;
};

function precoMenorQue100(produtos: Produto[]) {
  return produtos.filter((produto) => produto.preco < 100);
}

// EXERCÍCIO 8: any vs unknown
// --------------------------------
// Crie uma função que receba um parâmetro do tipo "unknown"
// e verifique qual tipo é (string, number, boolean ou array)
// Retorne uma mensagem diferente para cada tipo

// SEU CÓDIGO AQUI:

function ex08(element: unknown) {
  if (typeof element === 'string') {
    return 'É uma string';
  } else if (typeof element === 'number') {
    return 'É um número';
  } else if (typeof element === 'boolean') {
    return 'É um bolean';
  } else if (Array.isArray(element)) {
    return 'É um array';
  }
}

// EXERCÍCIO 9: Função com Parâmetro Opcional
// --------------------------------
// Crie uma função "apresentar" que:
// - Receba "nome" (obrigatório, string)
// - Receba "idade" (opcional, number)
// Se age for informado, retorne: "Olá, sou {nome} e tenho {idade} anos"
// Se age NÃO for informado, retorne: "Olá, sou {nome}"

// SEU CÓDIGO AQUI:

function apresentar(nome: string, idade?: number) {
  if (idade !== undefined) {
    return `Olá, sou ${nome} e tenho ${idade} anos.`;
  }
  return `Olá, sou ${nome}`;
}

// EXERCÍCIO 10: Combinação de Tudo
// --------------------------------
// Crie um type "Usuário" com:
// - id (number)
// - nome (string)
// - email (string)
// - telefone? (string - opcional)
// - ativo (boolean)
//
// Crie uma função "filtrarUsuarios" que:
// - Receba um array de Usuários
// - Receba um parâmetro "ativo" (boolean)
// - Retorne apenas os usuários que têm o status "ativo" igual ao parâmetro
//
// Teste a função com um array de pelo menos 3 usuários

// SEU CÓDIGO AQUI:

type Usuario = {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  ativo: boolean;
};

let users: Usuario[] = [
  { id: 1, nome: 'Peixe', email: 'peixe@gmail.com', ativo: true },
  { id: 2, nome: 'Mari', email: 'mari@gmail.com', ativo: true },
  { id: 3, nome: 'João', email: 'joao@gmail.com', ativo: true },
];

function filtrarUsuarios(usuarios: Usuario[], ativo: boolean) {
  return usuarios.filter((usuario) => usuario.ativo === ativo);
}
filtrarUsuarios(users, true);

// ============================================
// GABARITO (Descomente para ver as soluções)
// ============================================

/*
// EXERCÍCIO 1
let nome: string = "João";
let idade: number = 25;
let ativo: boolean = true;

// EXERCÍCIO 2
function somar(a: number, b: number): number {
  return a + b;
}

// EXERCÍCIO 3
type Pessoa = {
  nome: string;
  email: string;
  telefone?: string;
};

let pessoa: Pessoa = {
  nome: "Maria",
  email: "maria@email.com"
};

// EXERCÍCIO 4
function processar(valor: string | number): string | number {
  if (typeof valor === "string") {
    return valor.toUpperCase();
  }
  return valor * 2;
}

// EXERCÍCIO 5
let numeros: number[] = [1, 2, 3, 4, 5];

function somarArray(arr: number[]): number {
  return arr.reduce((total, num) => total + num, 0);
}

// EXERCÍCIO 6
function saudacao(nome: string | null): string {
  if (nome === null) {
    return "Nome não informado";
  }
  return `Olá, ${nome}!`;
}

// EXERCÍCIO 7
type Produto = {
  id: number;
  titulo: string;
  preco: number;
  estoque?: number;
};

function filtrarProdutosBaratos(produtos: Produto[]): Produto[] {
  return produtos.filter(p => p.preco < 100);
}

// EXERCÍCIO 8
function identificarTipo(valor: unknown): string {
  if (typeof valor === "string") {
    return `String: ${valor}`;
  }
  if (typeof valor === "number") {
    return `Number: ${valor}`;
  }
  if (typeof valor === "boolean") {
    return `Boolean: ${valor}`;
  }
  if (Array.isArray(valor)) {
    return `Array com ${valor.length} elementos`;
  }
  return "Tipo desconhecido";
}

// EXERCÍCIO 9
function apresentar(nome: string, idade?: number): string {
  if (idade !== undefined) {
    return `Olá, sou ${nome} e tenho ${idade} anos`;
  }
  return `Olá, sou ${nome}`;
}

// EXERCÍCIO 10
type Usuario = {
  id: number;
  nome: string;
  email: string;
  telefone?: string;
  ativo: boolean;
};

function filtrarUsuarios(usuarios: Usuario[], ativo: boolean): Usuario[] {
  return usuarios.filter(u => u.ativo === ativo);
}

// Teste
const usuarios: Usuario[] = [
  { id: 1, nome: "Ana", email: "ana@email.com", ativo: true },
  { id: 2, nome: "Bob", email: "bob@email.com", ativo: false },
  { id: 3, nome: "Carlos", email: "carlos@email.com", ativo: true }
];

console.log(filtrarUsuarios(usuarios, true));
*/

export {};
