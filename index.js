
const express = require('express');

const server = express();

server.use(express.json());

var tarefas = [
    {
id: 1,
Descricao: 'Comprar P£o', 
Finalizado: false
}
];

server.get('/tarefa',function(require,response){
return response.json(tarefas);
});

server.get('/tarefa/:id',function(require,response){
const id = request.params.id;

const tarefa = tarefas.filter(t => t.id == id);

return response.json(tarefa);

});

server.post('/tarefa',function(request,response){
const tarefa = request.body;
tarefas.push(tarefa);

})

server.listen(process.env.Port || 3000);
