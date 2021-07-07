"use strict";
//06 - Type Alias
//serve para criar um tipo personalizado. Dessa forma é criado esse type, e dps esse type pode ser utilizado em funções, variaveis e etc
var nomeAluno = ['Éslin', 'Maicon']; //aqui ele define uma variável com o tipo "aluno", dessa forma se não receber array terá erro
var funcionarios = [{
        nome: 'Éslin',
        sobrenome: 'Makicine',
    },
    {
        nome: 'Maicon',
        sobrenome: 'Dobrotinic',
    },];
function tratarFuncionarios(funcionarios) {
    for (var _i = 0, funcionarios_1 = funcionarios; _i < funcionarios_1.length; _i++) {
        var funcionario = funcionarios_1[_i];
        console.log('Nome do funcionario: ', funcionario.nome);
    }
}
;
