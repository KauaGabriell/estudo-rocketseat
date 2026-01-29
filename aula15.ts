type UserResponse = {
  id: number;
  name: string;
};

let userResponse = {} as UserResponse;

// Cenário	O que acontece
// Sem "as"	TypeScript infere como any → aceita qualquer coisa, perde a segurança de tipos
// Com "as"	TypeScript confia em você → não valida se os dados reais batem com o tipo
