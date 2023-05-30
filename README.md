Documentação do Projeto Full Stack
===========================================

Introdução
--------------
Esta documentação tem como objetivo fornecer instruções completas para iniciar o seu projeto full stack utilizando as tecnologias React, TypeScript, Node.js, Express e PostgreSQL. O projeto envolve a criação de uma API para persistência de dados e um frontend para um quadro de Kanban. Serão utilizadas as bibliotecas TypeORM para a camada de acesso a dados e o PostgresSQL como banco de dados. O projeto também está dockerizado para facilitar a execução e o ambiente de desenvolvimento.

Pré-requisitos
--------------
Antes de iniciar o projeto, verifique se você tem as seguintes ferramentas instaladas em seu sistema:

1. Git (opcional, se você desejar clonar o repositório)
2. Node.js (versão 14 ou superior)
3. Gerenciador de pacotes NPM
4. PostgreSQL (instalado e configurado corretamente)
5. Docker e Docker-compose (instalado e configurado corretamente)

Configurando o Banco de Dados
-----------------------------
Antes de iniciar o projeto, você precisa configurar o banco de dados PostgreSQL.
## Backend

1. Abra o arquivo `.env` no diretório `BACK`.

2. Preencha as seguintes variáveis de ambiente com as informações necessárias:

   ```
   PORT=<Porta para execução do servidor (exemplo: 5000)>
   expiresIn=<Tempo de expiração do token (exemplo: "1h")>
   SECRET_KEY=<Chave secreta para geração de tokens>
   
   login=<Exemplo de variável de ambiente para login>
   senha=<Exemplo de variável de ambiente para senha>
   
   POSTGRES_HOST=<Host do banco de dados PostgreSQL (exemplo: postgres)>
   POSTGRES_USER=<Usuário do banco de dados PostgreSQL (exemplo: postgres)>
   POSTGRES_PASSWORD=<Senha do banco de dados PostgreSQL>
   POSTGRES_DB=<Nome do banco de dados PostgreSQL (exemplo: kanban)>
   ```

3. Salve o arquivo `.env`.

Executando o Projeto com Docker Compose
---------------------------------------
Certifique-se de ter o Docker e o Docker-compose instalado e em execução em seu sistema.

No diretório raiz do projeto, execute o seguinte comando para construir e iniciar os containers:

`docker-compose up --build`
Isso irá construir e iniciar os containers do backend e frontend.

Aguarde até que a construção e a inicialização dos containers sejam concluídas.

O frontend estará disponível em http://localhost:3000 e o backend em http://localhost:5000.

API Endpoints
--------------
A API possui os seguintes endpoints:

- (POST) http://localhost:5000/login/ - Rota para autenticação do usuário.
- (GET) http://localhost:5000/cards/ - Rota para obter todos os cards.
- (POST) http://localhost:5000/cards/ - Rota para criar um novo card.
- (PUT) http://localhost:5000/cards/{id} - Rota para atualizar um card pelo ID.
- (DELETE) http://localhost:5000/cards/{id} - Rota para excluir um card pelo ID.

Observação: Substitua `{id}` pelo ID real do card desejado.

Observação
--------------
Este projeto foi entregue de forma incompleta devido a algumas dificuldades encontradas durante o desenvolvimento. A seguir estão as principais áreas que não foram concluídas:

- A renderização automática dos cards após a criação, edição ou exclusão foi resolvida utilizando `window.location.reload()`, resultando em um recarregamento completo da página. Essa solução foi adotada como alternativa temporária devido a dificuldades encontradas em implementar a atualização dinâmica dos cards na tela.
- Ao atualizar a página, os cards que estavam nas colunas "Doing" ou "Done" retornam à coluna "To Do". Isso ocorre devido à falta de persistência dos dados no backend. No entanto, a estrutura do projeto permite a implementação dessa funcionalidade no futuro.

Apesar dessas limitações, este projeto pode ser utilizado como ponto de partida para o desenvolvimento do quadro de Kanban completo, adicionando as funcionalidades faltantes e aprimorando-o de acordo com as necessidades do usuário.

Agradeço sua compreensão e oportunidade de participar deste desafio.

Conclusão
--------------
Agora você possui um projeto full stack em funcionamento, com um backend desenvolvido em Node.js e Express, um banco de dados PostgreSQL para persistência de dados e um frontend construído em React e TypeScript.
