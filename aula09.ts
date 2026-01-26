// ============ NULL E UNDEFINED EM TYPESCRIPT ============

// NULL - representa a ausência intencional de um valor
// É um valor que você atribui deliberadamente

let user: string | null = null; // Pode ser string OU null
user = 'João'; // Agora é string
user = null; // Voltou a ser null

// UNDEFINED - representa uma variável que não foi inicializada
// TypeScript a atribui automaticamente

let age: number | undefined; // Não tem valor atribuído
console.log(age); // undefined

age = 25; // Agora tem valor
age = undefined; // Voltou a ser undefined

// ============ DIFERENÇA PRÁTICA ============

// NULL: você escolhe atribuir null
let person: { name: string } | null = null; // Objeto pode ser null
person = { name: 'Maria' };

// UNDEFINED: variável declarada mas sem valor
function greet(name?: string) {
  // ? significa que name é opcional
  if (name === undefined) {
    console.log('Olá, anônimo!');
  } else {
    console.log(`Olá, ${name}!`);
  }
}

greet(); // undefined - "Olá, anônimo!"
greet('Pedro'); // "Olá, Pedro!"

// ============ VERIFICANDO NULL E UNDEFINED ============

// Forma 1: Verificar especificamente cada um
let value: string | null | undefined = 'teste';

if (value === null) {
  console.log('É null');
} else if (value === undefined) {
  console.log('É undefined');
} else {
  console.log('Tem valor:', value);
}

// Forma 2: Verificar se tem algum valor (null coalescing)
let username: string | null = null;
let displayName = username ?? 'Usuário anônimo'; // ?? = usa o lado direito se left for null ou undefined

// Forma 3: Optional chaining (?) - seguro para acessar propriedades
interface User {
  name?: string;
  email?: string;
}

let currentUser: User | null = null;
console.log(currentUser?.name); // undefined (não dá erro, retorna undefined)

// ============ STRICT NULL CHECKS ============
// Se ativar "strictNullChecks" no tsconfig.json:
// - Você é obrigado a verificar null/undefined antes de usar
// - Previne muitos bugs

// COM strictNullChecks ativado:
let text: string = 'Olá';
// text = null;  // ERRO! string não pode ser null

// Se quiser permitir null:
let optionalText: string | null = null; // OK!
optionalText = 'Olá'; // OK!

// ============ DICA: USE VALORES PADRÃO ============

// Ao invés de null, use valores padrão
let maxAttempts: number = 3; // Mais claro que maxAttempts: number | null
let userName: string = 'Anônimo'; // Mais claro que userName: string | null
let items: string[] = []; // Array vazio é melhor que null
