//06 - Type Alias
//serve para criar um tipo personalizado. Dessa forma é criado esse type, e dps esse type pode ser utilizado em funções, variaveis e etc

type alunos = Array<string>; //aqui ele diz que o tipo de aluno é um tipo com array
const nomeAluno: alunos = ['Éslin', 'Maicon'];  //aqui ele define uma variável com o tipo "aluno", dessa forma se não receber array terá erro

type Funcionario = {
    nome: string;
    sobrenome: string;
};

const funcionarios: Funcionario[] = [{
    nome: 'Éslin',
    sobrenome: 'Makicine', 
},
{
    nome: 'Maicon',
    sobrenome: 'Dobrotinic', 
},];

function tratarFuncionarios(funcionarios: Funcionario[]){ //dessa forma fica melhor, pois a pessoa consegue entender que ele está recebendo um tipo que é um objeto e visualizar os atributos
    for(let funcionario of funcionarios){
        console.log('Nome do funcionario: ', funcionario.nome);
    }
};