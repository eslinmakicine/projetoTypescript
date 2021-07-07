//03 - Tipos Básicos

//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 26;
const avaliacao: number = 4.5;

//String
const nome: string = 'Éslin Makicine';

//Array
const idades: number[] = [23,26,30];
const nomes: string[] = ['éslin', 'ketlyn', 'elsa'];
const idades2: Array<number> = [23,31,50]; //esse é outra forma de escrever da mesma forma que foi escrito na variavel "idade"

//Tuple
//ele define a quantidade de posições e o tipo de cada um. É utilizado quando esses itens são bem definidos
let jogadores: [string, string, boolean, number]; //foi escolhida o tipo de variavel "let" pois o valor será alterado. Const não permite isso
jogadores = ['Maicon', 'Dobrotinic', true, 25]; 

//Enum
//é mt utilizado para ajudar a fazer o mapeamento de informações

enum StatusAprovacao {
    Aprovado,
    Pendente,
    Rejeitado
}

const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;

//Any
//pode ser qualquer coisa, por esse motivo é utilizado o any, quando não há certeza de qual é o padrao dos dados. Porem, é necessário utilizar com cautela
const retornoDaAPI: any[] = [123, 'Maicon', false];
const retornoDaAPI2: any = { //nao colocou nenhum tipo de any, igual acima que foi any[]
    //nesse caso não se sabe oq retorna, então utiliza any para ele anular a tipagem do typescript
};

//Void
//é utilizado pra dizer quando uma função não vai retornar nada. É pouco utilizado
function printNaTela(msg: string): void{
    console.log(msg); //como só exibe msg na tela e não tem um "return", é registrado que não terá retorno
}

//Null e undefined
const u: undefined = undefined;
const n: null = null;

//Object
//quando sabe que ele é objeto mas não é um tipo primitivo como number, string e etc
function criar(objetinho: object) {
    //
}

//  criar('vitor') //Ele não aceita dessa forma pq é tipo string, entao da erro
criar({
    propriedade: 1,
}); //dessa forma da certo, pois ele leva como parametro um objeto




//Obs: no arquivo Never.ts, tbm tem outro tipo que nao é mt comum chamado never. Foi feito em um arquivo separado pois foi feito uma aula somente para esse tipo