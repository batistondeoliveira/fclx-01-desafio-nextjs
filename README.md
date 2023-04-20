# Desafio nextjs

Como executar a aplicação
------------

Existe duas maneiras de executar o projeto, a **forma mais rápida** que você baixa apenas a imagem e faz as requisições html ou a **forma mais demorada** que você baixa o projeto na sua máquina. Abaixo segue as duas formas para você escolher a melhor.

# Forma mais rápida

**Passo 1:** Clone o projeto

```
https://github.com/batistondeoliveira/fclx-01-desafio-nextjs
```

**Passo 2:** Entre na pasta do projeto

**Passo 3:** Execute o comando abaixo para baixar a imagem do projeto

```
docker pull batistondeoliveira/desafio-nextjs
```

**Passo 4:** Execute o comando abaixo para subir o container

```
docker run -it -d -p3000:3000 batistondeoliveira/desafio-nextjs 
```

**Passo 5:** Abra o projeto no VSCode e execute a api a partir do arquivo api.http do projeto

**OBSERVAÇÃO:** Você precisa da extensão Rest Client para executar o arquivo api.http dentro do VSCode

# Forma mais demorada

**Passo 1:** Clone o projeto

```
https://github.com/batistondeoliveira/fclx-01-desafio-nextjs
```

**Passo 2:** Entre na pasta do projeto

**Passo 3:** Crie o arquivo .env a partir do .env.example

**Passo 4:** Execute o docker-compose

```
docker-compose up -d
```

**Passo 5:** Entre no container fclx-01-desafio-nextjs_app_1

```
docker exec -it fclx-01-desafio-nextjs_app_1 bash
```

**Passo 6:** Instale as dependencias do node

```
npm install
```

**Passo 7:** Levante o servidor node

```
npm run dev
```

**Passo 8:** Abra o projeto no VSCode e execute a api a partir do arquivo api.http do projeto

**OBSERVAÇÃO:** Você precisa da extensão Rest Client para executar o arquivo api.http dentro do VSCode
