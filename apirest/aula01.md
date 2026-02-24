\***\*O QUE É UMA API REST?\*\***

É uma api que segue os princípios da arquitetura REST(Representational State Transfer)

REST é um modelo de arquitetura que fornece diretrizes para criar aplicações distribuídas que se comuniquem utlizando os princípios protocolos WEB, exemplo: HTTP.

\***\*Quais são os Princípios\*\***

- Client-Server: Separa a Interface do Usuário(cliente) das preocupações de armazenamento(servidor)

- Stateless: Cada requisição deve conter todas as informações necessárias para os ervidor entender e processar a requisição, ele não armazena infos sobre o estado do cliente entre as requisições.

- Resource-Based: Ao projetar uma API de acordo com a abordagem "Resource-Based", você está seguindo a restrição de uma interface uniforme ao criar recursos claramente identificados e definir como eles podem ser manipulados usando métodos HTTP específicos.

- Manipulation of Resources Through Representations: Em uma arquitetura REST, os recursos são manipulados ou modificados não diretamente, mas sim por meio de representações desses recursos. Por exemplo, no formato JSON.
- Layered System: O princípio (sistema em camadas) ajuda a organizar e simplificar sistemas complexos, promovendo a modularidade, escalabilidade e flexibilidade. Isso ajuda na separação de responsabilidades para alcançar uma arquitetura eficaz e de fácil manutenção.

- Cacheable: Destaca a importância de permitir que as respostas da API sejam armazenadas em cache temporariamente no lado do cliente, melhorando o desempenho, a eficiência e a escalabilidade do sistema. Esse princípio incentiva a reutilização de recursos já obtidos em vez de buscar repetidamente as mesmas informações do servidor.
