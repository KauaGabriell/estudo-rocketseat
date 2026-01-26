// ========== TIPAGEM DE OBJETOS ==========
// Em TypeScript, você pode definir o tipo de um objeto
// especificando quais propriedades ele deve ter e que tipo cada uma é

// EXEMPLO 1: Definir o tipo do objeto inline (direto)
let user: {
  name: string; // propriedade name deve ser texto
  age: number; // propriedade age deve ser número
  email: string; // propriedade email deve ser texto
};

// Agora a variável 'user' só pode receber um objeto com essas propriedades
// Se tentar adicionar uma propriedade que não existe, TypeScript vai reclamar

// EXEMPLO 2: Atribuir um valor válido
user = {
  name: 'João',
  age: 25,
  email: 'joao@email.com',
};

// EXEMPLO 3: Usando Type Alias (forma mais limpa e reutilizável)
type Usuario = {
  name: string;
  age: number;
  email: string;
};

let user2: Usuario = {
  name: 'Maria',
  age: 30,
  email: 'maria@email.com',
};

// EXEMPLO 4: Propriedades opcionais (usando ?)
type Produto = {
  nome: string;
  preco: number;
  descricao?: string; // Essa propriedade é opcional
};

let produto: Produto = {
  nome: 'Notebook',
  preco: 2500,
  // descricao não é obrigatória
};
