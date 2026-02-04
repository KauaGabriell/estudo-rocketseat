Como o Node lida com a Requisição?


Quando um cliente envia uma Requisição HTTP através dos [[Métodos HTTP]]  para um servidor, essa requisição pode incluir dados em um corpo(body).

##### **Como o Corpo da Requisição chega ao servidor?

Ela não chega de forma completa e não está disponível quando chega devido ao tamanho que ela pode chegar, e pode ser grande demais, então ele chega em um fluxo(stream) de dados, divididos em vários pedaços(chunks), e quando esses chunks chega na [[API]] nós precisamos remontá-los novamente.
