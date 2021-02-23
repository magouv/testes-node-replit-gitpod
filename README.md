# testes-replit-gitpod

Fazendo testes com Node.js usando repl.it e gitpod


## Preparação

Antes de executar no repl.it ou gitpod, execute no terminal:

```shell
$ npm install   # para instalar todos os pacotes definidos em package.json
```

## Variáveis de ambiente

Como estamos usando repositório público do GitHub, não devemos salvar senhas e outras informações privadas no repositório. Se isso acontecer, podemos ter problemas como aconteceu com o bot do GitHub que nos enviou email dizendo que nossas informações do ElephantSQL estavam abertas em um repositório público.

Vamos então colocar essas informações privadas em um arquivo `config.env`, que adicionamos ao `.gitignore` para não ser versionado pelo git.

Clone o arquivo `docs/config.env.example` com o nome `config.env` e edite as variáveis de ambiente. O arquivo `config.env` deve ser colocado na raiz do projeto (no mesmo diretório de `index.js`)

## Execução dos scripts

```shell
$ node <script-a-executar.js>
```

## Enviar alterações para o repositório no GitHub

Executar no terminal:

```shell
$ git status                    # para ver as alterações pendentes
$ git add <arquivo a enviar>
$ git commit -m "explicação resumida das alterações"
$ git push -u origin master
```

## Executar no Gitpod

Abra o browser e acesse a URL:

```shell
gitpod.io/#https://github.com/magouv/testes-replit-gitpod
```
