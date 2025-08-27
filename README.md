## Mini Projeto — Controle de Tarefas (To-do list)
**Integrantes:** 
Nome Completo 1, 
Nome Completo 2, 
Nome Completo 3

## Como rodar
1. Certifique-se de ter o Node.js e o npm instalados.
2. Abra o terminal na pasta do projeto.
3. Instale a dependência `prompt-sync` com o comando:
   ```
   npm install
   ```
4. Execute o programa com o comando:
   ```
   node index.js
   ```

## Exemplo de execução
```
To-do List - Escolha uma opção:
[1] Adicionar tarefa
[2] Listar tarefas
[3] Concluir tarefa
[4] Remover tarefa
[0] Sair
> 1

=== Adicionar Tarefa ===
Descrição da tarefa: Estudar JavaScript
Tarefa "Estudar JavaScript" adicionada com ID 1!

To-do List - Escolha uma opção:
[1] Adicionar tarefa
[2] Listar tarefas
[3] Concluir tarefa
[4] Remover tarefa
[0] Sair
> 2

=== Listar Tarefas ===

Tarefas pendentes:
[ ] 1. Estudar JavaScript

Tarefas concluídas:
Nenhuma tarefa concluída.

To-do List - Escolha uma opção:
[1] Adicionar tarefa
[2] Listar tarefas
[3] Concluir tarefa
[4] Remover tarefa
[0] Sair
> 3

=== Concluir Tarefa ===

Tarefas pendentes:
[ ] 1. Estudar JavaScript

Tarefas concluídas:
Nenhuma tarefa concluída.
Digite o ID da tarefa a concluir: 1
Tarefa "Estudar JavaScript" marcada como concluída!

To-do List - Escolha uma opção:
[1] Adicionar tarefa
[2] Listar tarefas
[3] Concluir tarefa
[4] Remover tarefa
[0] Sair
> 0
Saindo da To-do List... Até logo!
```
