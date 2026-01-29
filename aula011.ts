/**
 *  USO DE INTERFACES
 */

interface User {
  id: number;
  name: string;
  idade: number;
}

function createUser(user: User) {
  return user.id + user.name;
}

createUser({ id: 1, name: 'Peixe', idade: 21 });
