var tarefas = [];

function adicionarTarefas(titulo, descricao) {
  tarefas.push({
    // gerando um id unico
    id: Date.now(),

    // pegando o valor do input de titulo
    titulo: titulo,

    // pegando o valor do input de descrição
    descricao: descricao
  });
}

function listarTarefas() {
  return tarefas;
}


module.exports = { adicionarTarefas, listarTarefas }