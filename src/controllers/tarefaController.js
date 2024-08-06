// Controle da rota index
function exibirTarefa(request, response){
  response.render("index");
}

// Controle da rota adicionarTarefa
function exibirNovaTarefa(request, response){
  response.render("adicionarTarefa");
}

// Controle da rota adicionarTarefa
function adicionarTarefa(request, response){
  console.log("Chegou na rota adicionarTarefa");
  response.redirect("/");
}

// Exportando as funções de rotas
module.exports = { exibirTarefa, exibirNovaTarefa, adicionarTarefa };