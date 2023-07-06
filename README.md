Comandos para rodar a aplicação (Observação: O back deve ser rodado primeiro na porta 3000)

Back (comandos a serem rodados na pasta back)

1_ Dar yarn install para instalar as dependências

2_ Criar o arquivo .env e configurar com a sua conta e db conforme no exemplo

3_ Fazer as migrações com os comandos(para criar as tabelas):

-yarn typeorm migration:generate ./src/migrations/createTables -d ./src/data-source
-yarn typeorm migration:run -d ./src/data-source

4_ Rodar este comando na pasta Back
- npm run start:dev

// Extra
Pode rodar o comando para visualizar as tabelas e dados
- npx prisma studio



Front (comandos a serem rodados na pasta front)

1_ Rodar estes comandos na pasta Front

- yarn install
- yarn dev
