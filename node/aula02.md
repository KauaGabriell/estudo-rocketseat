# API - Application Programming Interface

## O que é uma API?

Uma **API** (Application Programming Interface) oferece funcionalidades sem a necessidade de saber como foram implementadas.

---

## Componentes de uma API

A API é composta por **3 partes**:

1. **Cliente** - Aplicação Web, mobile, desktop, etc.
2. **API** - A interface que processa as requisições
3. **Servidor** - Onde os dados são processados e armazenados

---

## Fluxo de Requisição

```
Cliente → Requisição → API → Servidor → Resposta → API → Cliente
```

1. O **cliente** faz uma requisição para a API
2. A **API** processa essa requisição no servidor
3. O **servidor** retorna uma resposta para a API
4. A **API** retorna uma resposta para o cliente

> 💡 **Importante:** A API **sempre** irá retornar uma resposta.

---

## Rotas

**Rota** é o caminho pelo qual o servidor responde a requisições HTTP.

### Estrutura de uma URL

```
https://         meuservidor.com.br    /products
│                │                      │
└── Protocolo    └── Endereço           └── Rota
```

| Parte     | Exemplo              | Descrição                       |
| --------- | -------------------- | ------------------------------- |
| Protocolo | `https://`           | Protocolo de comunicação seguro |
| Endereço  | `meuservidor.com.br` | Domínio/IP do servidor          |
| Rota      | `/products`          | Caminho do recurso na API       |
