// Importando os models de tarefa
var tarefas = require("../models/tarefaModels");

// Controle da rota index
function exibirTarefa(request, response){

  // Listando as tarefas
  var tarefa = tarefas.listarTarefas();
  console.log("Tarefas listadas: ", tarefa);
  
  // Renderizando o arquivo pagina index
  response.render("index");
}

// Controle da rota adicionarTarefa
function exibirNovaTarefa(request, response){
  response.render("adicionarTarefa");
}

// Controle da rota adicionarTarefa
function adicionarTarefa(request, response){
  console.log("Chegou na rota adicionarTarefa");

  // Recebendo os dados do form
  var titulo = request.body.titulo;
  var descricao = request.body.descricao;

  // Adicionando a tarefa
  tarefas.adicionarTarefas(titulo, descricao);

  // Redirecionando para a rota index
  response.redirect("/");
}

// Exportando as funções de rotas
module.exports = { exibirTarefa, exibirNovaTarefa, adicionarTarefa };