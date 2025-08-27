// index.js - Sistema de To-do List (Controle de Tarefas)

// Importa a biblioteca prompt-sync para receber entrada do usuário no console
const prompt = require('prompt-sync')({ sigint: true });

// Array de objetos para armazenar as tarefas. Cada tarefa terá id, descrição e um status 'concluida'.
let tarefas = [];
// Variável para controlar o ID sequencial e único de cada tarefa
let idAtual = 1;

// --- FUNÇÕES DO CRUD (Create, Read, Update, Delete) --- 

/**
 * Adiciona uma nova tarefa à lista.
 * Pede uma descrição ao usuário e cria um novo objeto de tarefa.
 */
function adicionarTarefa() {
  console.log("\n====== Adicionar Tarefa =======\n");
  const descricao = prompt("Descrição da tarefa: ").trim();

  // Valida se a descrição não está vazia
  if (!descricao) {
    console.log(">> A descrição não pode ser vazia!\n");
    return; // Encerra a função se a descrição for inválida
  }

  // Adiciona a nova tarefa ao array 'tarefas'
  tarefas.push({
    id: idAtual++, // Usa o idAtual e depois incrementa
    descricao,
    concluida: false // Toda nova tarefa começa como não concluída
  });

  console.log(`>> Tarefa "${descricao}" adicionada com ID ${idAtual - 1}!\n`);
}

/**
 * Lista todas as tarefas, separando-as em pendentes e concluídas.
 * Melhora a visualização para o usuário.
 */
function listarTarefas() {
  console.log("\n======= Listar Tarefas =======\n");

  // Filtra as tarefas que ainda não foram concluídas
  const pendentes = tarefas.filter(t => !t.concluida);
  // Filtra as tarefas que já foram concluídas
  const concluidas = tarefas.filter(t => t.concluida);

  console.log("\nTarefas pendentes:");
  if (pendentes.length === 0) {
    console.log(">> Nenhuma tarefa pendente.\n");
  } else {
    // Exibe cada tarefa pendente formatada
    pendentes.forEach(t => {
      console.log(`[ ] ${t.id}. ${t.descricao}`);
    });
  }

  console.log("\nTarefas concluídas:");
  if (concluidas.length === 0) {
    console.log(">> Nenhuma tarefa concluída.\n");
  } else {
    // Exibe cada tarefa concluída formatada
    concluidas.forEach(t => {
      console.log(`[X] ${t.id}. ${t.descricao}`);
    });
  }
}

/**
 * Marca uma tarefa como concluída.
 * Pede o ID da tarefa que o usuário deseja concluir.
 */
function concluirTarefa() {
  console.log("\n======= Concluir Tarefa =======\n");
  listarTarefas(); // Mostra a lista para o usuário saber qual ID escolher

  // Se não houver tarefas pendentes, não há o que concluir
  if (tarefas.filter(t => !t.concluida).length === 0) {
    return;
  }

  const id = parseInt(prompt(">> Digite o ID da tarefa a concluir: "));
  // Valida se o ID é um número
  if (isNaN(id)) {
    console.log(">> ID inválido!\n");
    return;
  }

  // Encontra a tarefa com o ID correspondente que ainda não foi concluída
  const tarefa = tarefas.find(t => t.id === id && !t.concluida);
  if (tarefa) {
    tarefa.concluida = true; // Muda o status da tarefa para concluída
    console.log(`>> Tarefa "${tarefa.descricao}" marcada como concluída!\n`);
  } else {
    console.log(">> Tarefa não encontrada ou já concluída.\n");
  }
}

/**
 * Remove uma tarefa da lista, independente do seu status.
 * Pede o ID da tarefa que o usuário deseja remover.
 */
function removerTarefa() {
  console.log("\n======== Remover Tarefa =======\n");
  listarTarefas(); // Mostra a lista para o usuário saber qual ID escolher

  if (tarefas.length === 0) {
    return; // Se não há tarefas, encerra a função
  }

  const id = parseInt(prompt(">> Digite o ID da tarefa a remover: "));
  // Valida se o ID é um número
  if (isNaN(id)) {
    console.log(">> ID inválido!\n");
    return;
  }

  // Encontra o índice (posição) da tarefa no array
  const indice = tarefas.findIndex(t => t.id === id);

  if (indice !== -1) {
    // Remove a tarefa do array usando o índice encontrado
    const tarefaRemovida = tarefas.splice(indice, 1)[0];
    console.log(`>> Tarefa "${tarefaRemovida.descricao}" removida com sucesso!\n`);
  } else {
    console.log(">> Tarefa não encontrada.\n");
  }
}


// --- FUNÇÕES DE CONTROLE ---

/**
 * Exibe o menu principal e retorna a opção escolhida pelo usuário.
 */
function menu() {
  console.log("\n===============================");
  console.log("\nTo-do List - Escolha uma opção:");
  console.log("[1] Adicionar tarefa");
  console.log("[2] Listar tarefas");
  console.log("[3] Concluir tarefa");
  console.log("[4] Remover tarefa"); // Nova opção
  console.log("[0] Sair");
  console.log("\n===============================\n");
  return prompt("> ").trim();
}

/**
 * Função principal que controla o fluxo do programa.
 * Mantém o menu rodando até que o usuário decida sair.
 */
function main() {
  let opcao;

  // Loop principal do menu
  do {
    opcao = menu();

    // Estrutura switch para tratar a opção do usuário
    switch (opcao) {
      case "1":
        adicionarTarefa();
        break;
      case "2":
        listarTarefas();
        break;
      case "3":
        concluirTarefa();
        break;
      case "4":
        removerTarefa();
        break;
      case "0":
        console.log(">> Saindo da To-do List... Até logo!");
        break;
      default:
        console.log(">> Opção inválida! Escolha uma opção do menu.");
    }
  } while (opcao !== "0");
}

// Executa o programa
main();
