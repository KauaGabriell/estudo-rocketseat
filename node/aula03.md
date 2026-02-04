# Métodos HTTP

## O que são Métodos HTTP?

Os **métodos HTTP** (também chamados de verbos HTTP) indicam a **ação** que desejamos realizar em um recurso da API.

> 💡 Cada método tem um propósito específico e segue convenções do protocolo HTTP.

---

## Principais Métodos

| Método   | Ação           | Descrição                        |
| -------- | -------------- | -------------------------------- |
| `GET`    | **Ler/Buscar** | Obtém dados de um recurso        |
| `POST`   | **Criar**      | Cria um novo recurso             |
| `PUT`    | **Atualizar**  | Atualiza um recurso por completo |
| `PATCH`  | **Atualizar**  | Atualiza parcialmente um recurso |
| `DELETE` | **Deletar**    | Remove um recurso                |

---

## Detalhamento dos Métodos

### GET - Buscar dados

Utilizado para **obter** informações de um recurso.

```http
GET /products
GET /products/1
```

- ✅ **Não** altera dados no servidor
- ✅ Pode ser cacheado
- ✅ Fica registrado no histórico do navegador

---

### POST - Criar recurso

Utilizado para **criar** um novo recurso no servidor.

```http
POST /products
Content-Type: application/json

{
  "name": "Notebook",
  "price": 2500.00
}
```

- ✅ Envia dados no **corpo** da requisição
- ❌ **Não** é idempotente (cada chamada cria um novo recurso)

---

### PUT - Atualizar completamente

Utilizado para **substituir** um recurso por completo.

```http
PUT /products/1
Content-Type: application/json

{
  "name": "Notebook Gamer",
  "price": 3500.00,
  "category": "Electronics"
}
```

- ✅ Substitui **todos** os campos do recurso
- ✅ É idempotente (múltiplas chamadas = mesmo resultado)

---

### PATCH - Atualizar parcialmente

Utilizado para **modificar** apenas alguns campos de um recurso.

```http
PATCH /products/1
Content-Type: application/json

{
  "price": 2999.00
}
```

- ✅ Atualiza **apenas** os campos enviados
- ✅ Mais eficiente quando há poucos campos a alterar

---

### DELETE - Remover recurso

Utilizado para **excluir** um recurso do servidor.

```http
DELETE /products/1
```

- ✅ Remove o recurso especificado
- ✅ É idempotente

---

## Diferença entre PUT e PATCH

```
┌─────────────────────────────────────────────────────────────┐
│  PUT                          │  PATCH                      │
├───────────────────────────────┼─────────────────────────────┤
│  Substitui TUDO               │  Modifica PARTES            │
│  Envia objeto completo        │  Envia apenas alterações    │
│  Mais dados trafegados        │  Menos dados trafegados     │
└───────────────────────────────┴─────────────────────────────┘
```

---

## Resumo Visual

```
┌────────────────────────────────────────────────────────────┐
│                    CRUD vs HTTP Methods                    │
├────────────┬───────────────────────────────────────────────┤
│  CREATE    │  POST                                         │
│  READ      │  GET                                          │
│  UPDATE    │  PUT / PATCH                                  │
│  DELETE    │  DELETE                                       │
└────────────┴───────────────────────────────────────────────┘
```

> 📌 **CRUD** é o acrônimo para as 4 operações básicas: **C**reate, **R**ead, **U**pdate, **D**elete.
