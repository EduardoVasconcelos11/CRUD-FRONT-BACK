# Back e Front - CRUD

Este é um projeto de CRUD (Create, Read, Update, Delete) simples para criação de uma lista de usuários, utilizando TypeScript, Node.js, Express, PostgreSQL e Ember.js.

## Instalação

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Ember CLI](https://ember-cli.com/)

Siga as etapas abaixo para configurar e executar o projeto:

1. Clone este repositório:
    ```bash
    git clone https://github.com/EduardoVasconcelos11/CRUD.git
    ```

2. Navegue até o diretório do projeto do backend:
    ```bash
    cd backend
    ```

3. Instale as dependências:
    ```bash
    npm install
    ```

4. Execute a importação do servidor no PGAdmin 4 e execute os scripts para criação da tabela e da sequence, localizados em `backend/database`.

5. Navegue até o diretório do projeto do frontend:
    ```bash
    cd frontend
    ```

6. Instale as dependências:
    ```bash
    npm install
    ```

## Uso

1. Importe a collection no Postman a partir do arquivo `backend/CRUD.postman_collection.json`.

2. Inicie o servidor backend:
    ```bash
    cd backend
    npm start
    ```

3. Inicie o servidor frontend:
    ```bash
    cd frontend
    ember serve
    ```

4. Utilize o Postman para realizar as requisições HTTP para criar, atualizar, deletar e listar os usuários.

## Contribuição

Contribuições são bem-vindas! Se você quiser contribuir com este projeto, por favor, abra um pull request. Certifique-se de discutir grandes mudanças antes de enviá-las.

## Licença

Este projeto é licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT) - veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## Contato

Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato comigo via [e-mail](mailto:seuemail@example.com).
