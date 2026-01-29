/**
 *
 * /////////
 * Uso de Partial
 * /////////
 *
 * Faz com que nós possamos usar todas as propriedades de uma Interface, porém atribuindo a "opcionalidade" para todas elas.
 */

interface User {
  id: number;
  nome: string;
  age: number;
}

const newUser = { id: 1, nome: 'Peixe', idade: 21 };

const updateUser: Partial<User> = { nome: 'Peixe' };

export {}