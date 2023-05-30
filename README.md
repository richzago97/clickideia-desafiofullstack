Documentação do Projeto Full Stack
===========================================

Introdução
--------------
Esta documentação tem como objetivo fornecer instruções completas para iniciar o seu projeto full stack utilizando as tecnologias React, TypeScript, Node.js, Express e PostgreSQL. O projeto envolve a criação de uma API para persistência de dados e um frontend para um quadro de Kanban. Serão utilizadas as bibliotecas TypeORM para a camada de acesso a dados e o PostgresSQL como banco de dados.

Pré-requisitos
--------------
Antes de iniciar o projeto, verifique se você tem as seguintes ferramentas instaladas em seu sistema:

1. Node.js (versão 14 ou superior)
2. Gerenciador de pacotes Yarn ou NPM
3. PostgreSQL (instalado e configurado corretamente)

Setup do Projeto
--------------
Siga as etapas abaixo para configurar o projeto:

1. Clone o repositório do projeto em seu ambiente local.
2. Navegue até o diretório raiz do projeto através do terminal.

Backend
--------------

1. Navegue até a pasta `BACK` do projeto através do terminal.
2. Execute o comando `yarn` ou `npm install` para instalar as dependências do backend.

Configurando o Banco de Dados
--------------
Antes de iniciar o backend, você precisa configurar o banco de dados PostgreSQL.

1. Abra o arquivo `.env` no diretório `backend`.
2. Preencha as seguintes variáveis de ambiente com as informações do seu banco de dados:

   - POSTGRES_HOST: O host do banco de dados (exemplo: localhost)
   - PGPORT: A porta utilizada pelo PostgreSQL (exemplo: 5432)
   - POSTGRES_USER: O nome de usuário do PostgreSQL
   - POSTGRES_PASSWORD: A senha do usuário do PostgreSQL
   - POSTGRES_DB: O nome do banco de dados

3. Salve o arquivo `.env`.

Executando as Migrations
--------------
O TypeORM será utilizado para executar as migrations e criar as tabelas necessárias no banco de dados.

1. Certifique-se de que o banco de dados PostgreSQL esteja em execução.
2. No diretório `backend`, execute o comando `yarn typeorm migration:run -d src/data-source.ts` para executar as migrations e criar as tabelas.

Iniciando o Backend
--------------
1. No diretório `backend`, execute o comando `yarn dev` ou `npm run dev` para iniciar o backend.
2. O servidor estará disponível em `http://localhost:5000`.

Frontend
--------------
1. Navegue até a pasta `frontend` do projeto através do terminal.
2. Execute o comando `yarn` ou `npm install` para instalar as dependências do frontend.

Iniciando o Frontend
--------------
1. No diretório `FRONT`, execute o comando `yarn start` ou `npm start` para iniciar o frontend.
2. O aplicativo será aberto em

 seu navegador padrão e estará disponível em `http://localhost:3000`.

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
