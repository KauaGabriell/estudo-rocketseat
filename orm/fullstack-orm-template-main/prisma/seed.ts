import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // 💡 Por que usar upsert para criar Seeds no padrão de mercado?
  // Se executarmos este script duas vezes (ou o CI/CD rodar novamente), o método .create() comum 
  // daria erro tentando inserir um e-mail duplicado (já que é @unique).
  // O método .upsert() torna a inserção 'idempotente' (pode ser repetida mil vezes com segurança).

  const userAdmin = await prisma.user.upsert({
    where: { email: "admin@rocketseat.com.br" }, // O "Porquê": Identificador de busca. "Este usuário já existe?"
    update: {}, // O "Porquê": Se ele encontrar o e-mail, atualiza nada (mantém como está).
    create: {   // O "Porquê": Se não encontrar o e-mail, cria o usuário junto com uma pergunta (Cascade Insert).
      name: "Admin Rocketseat",
      email: "admin@rocketseat.com.br",
      questions: {
        create: [
          {
            title: "Como fazer um seed padrão mercado?",
            content: "Usando upsert para garantir a idempotência! Assim garantimos consistência.",
          },
        ],
      },
    },
  });

  const userTest = await prisma.user.upsert({
    where: { email: "teste@rocketseat.com.br" },
    update: {},
    create: {
      name: "Usuário Teste",
      email: "teste@rocketseat.com.br",
    },
  });

  console.log("✅ Seed executado com sucesso!", { userAdmin, userTest });
}

// 💡 Tratativa padrão estruturada pelo ORM
main()
  .then(async () => {
    // Desconecta assim que termina para liberar a "pool" (conexões simultâneas) do banco.
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    // Caso de falha (ex: Banco de Dados offline)
    console.error("Falha ao executar o Seed:", e);
    await prisma.$disconnect();
    
    // Mata o processo do NodeJs apontando que finalizou com Erro (código 1)
    process.exit(1);
  });
