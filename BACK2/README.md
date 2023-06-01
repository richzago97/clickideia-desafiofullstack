## Pré-requisitos

Certifique-se de ter os seguintes requisitos instalados em sua máquina:

- PHP 8
- Composer
- PostgreSQL
- Git

## Passo 1: Clonar o repositório

Clone o repositório do GitHub para o diretório de sua escolha:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

## Passo 2: Configurar as variáveis de ambiente

Renomeie o arquivo `.env.example` para `.env` e abra-o em um editor de texto. Configure as seguintes variáveis de ambiente:

```dotenv
DB_CONNECTION=pgsql
DB_HOST=host_do_seu_banco
DB_PORT=porta_do_seu_banco
DB_DATABASE=nome_do_banco
DB_USERNAME=nome_de_usuario
DB_PASSWORD=senha_do_usuario

JWT_SECRET=chave_secreta_do_JWT
```

Certifique-se de preencher corretamente as informações do banco de dados e gerar uma chave secreta para o JWT.

## Passo 3: Instalar as dependências

Abra o terminal na pasta do projeto e execute o seguinte comando para instalar as dependências do Composer:

```bash
composer install
```

## Passo 4: Gerar as migrations

Execute o seguinte comando para gerar as migrations:

```bash
php artisan migrate
```

Isso criará as tabelas necessárias no banco de dados.

## Passo 5: Gerar o JWT

Execute esse comando no terminal, na raiz do projeto Laravel. Ele irá gerar uma chave JWT única e atualizá-la no arquivo .env automaticamente na variável JWT_SECRET:

```bash
    php artisan jwt:secret
```


## Passo 6: Executar a aplicação

Agora você pode executar a aplicação Laravel. Utilize o seguinte comando para iniciar o servidor:

```bash
php artisan serve
```

A aplicação estará disponível em `http://localhost:8000`.

Ou se você preferir, pode escolher uma porta para rodar:

```bash
    php artisan serve --port=NUMERODAPORTA 
```

## Passo 7: Testar as rotas

Agora você pode testar as rotas da aplicação usando uma ferramenta como o Postman ou o cURL. Aqui estão as URLs das rotas disponíveis:

- (POST) http://localhost:8000/login
- (GET) http://localhost:8000/cards
- (POST) http://localhost:8000/cards
- (PUT) http://localhost:8000/cards/{id}
- (DELETE) http://localhost:8000/cards/{id}

Certifique-se de passar os dados corretos nas requisições e verificar as respostas recebidas.

## Observações finais

- Se você preferir usar um banco de dados diferente do PostgreSQL, certifique-se de atualizar as configurações do banco de dados no arquivo `.env`.
- Caso queira usar um servidor web diferente do servidor embutido do Laravel, você pode configurar um servidor como o Apache ou o Nginx para apontar para a pasta pública do projeto.

Isso conclui a documentação para instalar as dependências e executar a aplicação em PHP 8 + Laravel + PostgreSQL. Certifique-se de seguir os passos cuidadosamente e adaptar as configurações de acordo com o seu ambiente.
