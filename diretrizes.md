**Mini Projeto Guiado em Grupo \+ Configuração de Git**

**Objetivos de aprendizagem:**

* Consolidar o aprendizado de variáveis, condicionais, loops, funções, arrays e objetos.

* Aplicar todos os conceitos em um **mini projeto simples**, feito em grupo.

* Configurar Git no VS Code (Linux) e fazer a primeira entrega em repositório.

**Atividades propostas:**

1. **Organização em grupos** (misturar alunos com mais/menos facilidade).  
2. Cada grupo escolhe 1 mini-projeto dentre as opções dadas.  
3. **Uma máquina por grupo** (ou uma branch única).  
4. Requisito obrigatório de README.md.  
   O **README.md** deve conter, no topo:  
* **Tema escolhido** (ex.: Cadastro de alunos / Lista de produtos / Agenda de contatos / To-do / Biblioteca).

* **Integrantes do grupo** (nome completo).

* **Como rodar** (passos: instalar dependências, comando de execução).

* **Exemplo de uso** (uma sessão de exemplo do console).

  Exemplo de cabeçalho do arquivo README.md:

  `## Mini Projeto — [TEMA ESCOLHIDO]`  
  `**Integrantes:** Nome 1, Nome 2, Nome 3`  
  `## Como rodar`  
  `` 1. `npm install` ``  
  `` 2. `node index.js` ``  
  `## Exemplo de execução`  
  `> 1`  
  `Nome: Ana`  
  `Nota1: 7`  
  `Nota2: 8`

**Cinco temas para os mini projetos**

1. **Cadastro de alunos**

   * Inserir nome e duas notas.

   * Calcular média e indicar aprovado/reprovado.

2. **Lista de produtos**

   * Inserir nome, preço e quantidade.

   * Exibir lista e calcular valor total em estoque.

3. **Agenda de contatos**

   * Inserir nome e telefone.

   * Permitir listar todos e buscar por nome.

4. **Controle de tarefas (To-do list)**

   * Inserir tarefas e marcar como concluídas.

   * Listar pendentes e concluídas.

5. **Biblioteca simples**

   * Inserir título e autor do livro.

   * Listar todos e permitir buscar por título.

# **Escopo mínimo da aplicação**

Independente do tema escolhido, a aplicação deve conter:

* **Entrada de dados**: usar `prompt-sync` para receber informações do usuário.

* **Estruturas de decisão**: `if/else` para validar entradas ou definir situações (ex.: aprovado/reprovado, pendente/concluído).

* **Laços de repetição**: um menu simples que continue rodando até o usuário escolher sair.

* **Funções**: separar o código em funções para cada operação principal (ex.: `cadastrarAluno()`, `listarProdutos()`).

* **Arrays de objetos**: armazenar as informações de forma organizada.

* **Saída formatada**: exibir dados no console de forma clara (listagem em linhas, totais, mensagens).

* **Entrega em Git**: repositório com commit inicial, README.md explicando como rodar, e push no GitHub.

## **Passo a passo**

* No terminal ( Ctrl+j no VS Code abre o terminal integrado) e cole cada comando um por um:

  `# Se precisar, instale Node e npm`

  `sudo apt update`

  `sudo apt install -y nodejs npm`


  `# checar versões`

  `node -v`

  `npm -v`

* `Criar pasta do projeto (abra no VS Code):`  
  * `Arquivo > Abrir Pasta... (ou code nome-da-pasta)`  
* `Inicializar e instalar prompt-sync:`  
  `npm init -y`  
  `npm i prompt-sync`  
* Criar um arquivo de nome **“**`index.j`s”. É nele que vão escrever todo o código da atividade  
* Dentro da pasta do projeto (junto com o `index.js`), crie um arquivo chamado **`.gitignore`**. Coloque dentro dele apenas essa linha e salve o arquivo:

  node\_modules/

* **Quando finalizarem,** usem o comando “`node index.js”` no terminal do VS Code para testar seu programa.  
* **Entrega no Git (1 commit no VS Code)**  
  * Source Control → **Stage All** → mensagem **“entrega-aula7”** → **Commit ✔** → **Sync**.

## Escolha 1 só biblioteca de entrada. Ou readline-sync ou prompt-sync

## Exemplo mínimo do uso do **prompt-sync**

`// importar no início`

`const prompt = require('prompt-sync')({ sigint: true });`

`// exemplo de uso`

`const nome = prompt("Digite seu nome: ");`

`console.log("Olá,", nome);`

`// função menu`

`function menu() {`

  `console.log("\n[1] Cadastrar  [2] Listar  [0] Sair");`

  `return prompt("> ").trim();`

`}`

`console.log("Opção escolhida:", menu());`

## Exemplo mínimo do uso do **readline-sync**

`// importar no início`

`const readline = require('readline-sync');`

`// exemplo de uso`

`const nome = readline.question("Digite seu nome: ");`

`console.log("Olá,", nome);`

`// função menu`

`function menu() {`

  `console.log("\n[1] Cadastrar  [2] Listar  [0] Sair");`

  `return readline.question("> ").trim();`

`}`

`console.log("Opção escolhida:", menu());`

